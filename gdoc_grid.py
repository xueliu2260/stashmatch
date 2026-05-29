#!/usr/bin/env python3
"""
Read a published Google Doc table and print a character grid.

The doc has rows with:
- x-coordinate (number)
- Character (one Unicode character)
- y-coordinate (number)
"""

import html
import re
import sys
import urllib.request
import urllib.error
from html.parser import HTMLParser
from typing import List, Optional, Tuple


class _GoogleDocTableParser(HTMLParser):
    """Collect text inside table rows (<tr>) and cells (<td>/<th>)."""

    def __init__(self) -> None:
        super().__init__()
        self._in_table = False
        self._in_tr = False
        self._in_cell = False
        self._cell_chunks: List[str] = []
        self._row: List[str] = []
        self.rows: List[List[str]] = []

    def handle_starttag(self, tag: str, attrs) -> None:  # type: ignore[override]
        if tag == "table":
            self._in_table = True
            return
        if not self._in_table:
            return
        if tag == "tr":
            self._in_tr = True
            self._row = []
            return
        if self._in_tr and tag in ("td", "th"):
            self._in_cell = True
            self._cell_chunks = []

    def handle_endtag(self, tag: str) -> None:  # type: ignore[override]
        if tag == "table":
            self._in_table = False
            return
        if not self._in_table:
            return
        if tag in ("td", "th") and self._in_cell:
            text = html.unescape("".join(self._cell_chunks)).strip()
            self._row.append(text)
            self._in_cell = False
            self._cell_chunks = []
            return
        if tag == "tr" and self._in_tr:
            if any(cell.strip() for cell in self._row):
                self.rows.append(self._row)
            self._in_tr = False
            self._row = []

    def handle_data(self, data: str) -> None:  # type: ignore[override]
        if self._in_cell:
            # Keep whitespace minimal so multi-tag cells still parse cleanly.
            self._cell_chunks.append(data)


def _fetch_text(url: str, timeout_s: int = 30) -> str:
    url = _normalize_gdoc_url(url)
    req = urllib.request.Request(
        url,
        headers={
            "User-Agent": "Mozilla/5.0 (compatible; gdoc-grid/1.0)",
        },
        method="GET",
    )
    try:
        with urllib.request.urlopen(req, timeout=timeout_s) as resp:
            charset = resp.headers.get_content_charset() or "utf-8"
            return resp.read().decode(charset, errors="replace")
    except urllib.error.HTTPError as exc:
        hint = ""
        if exc.code == 404:
            hint = (
                " (404 Not Found: make sure you're using a published-to-web URL, "
                "typically ending in '/pub' or including '?embedded=true')"
            )
        raise RuntimeError(f"Failed to fetch URL: {url} (HTTP {exc.code}).{hint}") from exc
    except urllib.error.URLError as exc:
        raise RuntimeError(f"Failed to fetch URL: {url} ({exc}).") from exc


_RE_GDOC_EMBED = re.compile(r"^https?://docs\.google\.com/document/d/e/[^/]+(?:/|$)")


def _normalize_gdoc_url(url: str) -> str:
    """
    Normalize common Google Doc URL variants.

    Best input is a "Publish to the web" URL ending with `/pub`, like:
    `https://docs.google.com/document/d/e/<token>/pub`
    """

    u = (url or "").strip()
    if not u:
        raise ValueError("URL must be a non-empty string.")

    # If user pasted the published base without `/pub`, add it.
    if _RE_GDOC_EMBED.match(u) and "/pub" not in u:
        u = u.rstrip("/") + "/pub"

    return u


def _maybe_int(s: str) -> Optional[int]:
    s2 = s.strip()
    if not s2:
        return None
    try:
        return int(s2)
    except ValueError:
        return None


Point = Tuple[int, int, str]  # (x, y, ch)


def _rows_to_points(rows: List[List[str]]) -> List[Point]:
    """
    Turn table rows into points.

    The puzzle format is always: x, character, y (like the example doc).
    Rows that do not match (like the header row) are skipped.
    """

    points: List[Point] = []
    for row in rows:
        if len(row) < 3:
            continue
        x = _maybe_int(row[0])
        ch = (row[1] or "").strip()
        y = _maybe_int(row[2])
        if x is None or y is None or not ch:
            continue
        # Keep only the first Unicode character if the cell has extra text.
        points.append((x, y, ch[0]))

    if not points:
        raise ValueError(
            "No data rows found. Make sure the doc has a table with columns: x-coordinate, Character, y-coordinate."
        )

    return points


def _render(points: List[Point]) -> List[str]:
    # Spec: coordinates are >= 0, with no upper bound.
    max_x = max(x for x, _, _ in points)
    max_y = max(y for _, y, _ in points)

    width = max_x + 1
    height = max_y + 1

    # Important: (0, 0) is the bottom-left corner of the picture.
    # - x grows to the right
    # - y grows upward
    # But when we print text, the first printed line is the top.
    # So we flip y when we place characters into the grid.
    grid: List[List[str]] = [[" " for _ in range(width)] for _ in range(height)]
    for x, y, ch in points:
        if x < 0 or y < 0:
            # Out-of-spec input; ignore rather than crash.
            continue
        if x < width and y < height:
            grid[max_y - y][x] = ch

    return ["".join(row) for row in grid]


def print_gdoc_grid(url: str) -> None:
    """
    Required entrypoint (one argument): a Google Doc URL string.

    When you call it, it prints the grid to the terminal.
    """

    html_text = _fetch_text(url)
    parser = _GoogleDocTableParser()
    parser.feed(html_text)

    points = _rows_to_points(parser.rows)
    for line in _render(points):
        print(line)


def _main(argv: List[str]) -> int:
    if len(argv) != 2:
        print("Usage: python3 gdoc_grid.py <published_google_doc_url>", file=sys.stderr)
        return 2
    print_gdoc_grid(argv[1])
    return 0


if __name__ == "__main__":
    raise SystemExit(_main(sys.argv))
