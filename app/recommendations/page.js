import Link from 'next/link';

const recommendations = [
  {
    name: 'Forest Rib Hat',
    designer: 'Juniper Thread Co.',
    matchedYarn: 'Heather Fern by Malabrigo',
    matchScore: 94,
    reason: 'The worsted weight and earthy tone make this a quick, cozy knit with strong stitch definition.',
    difficulty: 'Beginner',
    patternUrl: 'https://www.ravelry.com/patterns/search#craft=knitting&query=ribbed%20hat',
    startUrl: '/recommendations',
    accent: '#8a9a74',
    imageUrl: makePatternImageDataUrl('Forest Rib Hat', '#8a9a74'),
  },
  {
    name: 'Soft Morning Wrap',
    designer: 'Rowan & Finch',
    matchedYarn: 'Evening Haze by Brooklyn Tweed',
    matchScore: 90,
    reason: 'Fingering weight gives the wrap a light drape, while the cool blue palette keeps it airy and calm.',
    difficulty: 'Intermediate',
    patternUrl: 'https://www.ravelry.com/patterns/search#craft=knitting&query=knit%20wrap',
    startUrl: '/recommendations',
    accent: '#8fa8b8',
    imageUrl: null,
  },
  {
    name: 'Honey Cabin Cowl',
    designer: 'The Cozy Loop',
    matchedYarn: 'Honey Tea by Lion Brand',
    matchScore: 87,
    reason: 'The aran yarn gives this cowl structure and warmth, and the golden tone suits textured stitches.',
    difficulty: 'Advanced Beginner',
    patternUrl: 'https://www.ravelry.com/patterns/search#craft=knitting&query=cowl',
    startUrl: '/recommendations',
    accent: '#d7a35f',
    imageUrl: makePatternImageDataUrl('Honey Cabin Cowl', '#d7a35f'),
  },
];

export default function RecommendationsPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
      <section className="overflow-hidden rounded-[2.25rem] border border-stone-200 bg-[#f8f3ec]/95 shadow-soft backdrop-blur">
        <div className="p-6 sm:p-8 lg:p-10">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div className="space-y-3">
              <span className="inline-flex w-fit items-center rounded-full border border-stone-300 bg-white/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-stone-600">
                StashMatch
              </span>
              <div className="space-y-2">
                <h1 className="text-4xl text-stone-950 sm:text-5xl" style={{ fontFamily: 'var(--font-display)' }}>
                  Pattern Recommendations
                </h1>
                <p className="max-w-2xl text-base leading-7 text-stone-600">
                  A curated gallery of knitting ideas with image-first cards, consistent framing, and quick next steps.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <div className="rounded-2xl border border-stone-200 bg-white px-4 py-3 text-sm text-stone-600">
                Based on your cabinet and Ravelry favourites
              </div>
              <Link
                href="/"
                className="inline-flex items-center justify-center rounded-full border border-stone-300 bg-white px-4 py-3 text-sm font-semibold text-stone-700 transition hover:bg-stone-50"
              >
                Back to Cabinet
              </Link>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
            {recommendations.map((item) => (
              <article
                key={item.name}
                className="flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-stone-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <div className="relative aspect-[4/5] w-full overflow-hidden bg-stone-100">
                  {item.imageUrl ? (
                    <img
                      src={item.imageUrl}
                      alt={`${item.name} pattern preview`}
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  ) : (
                    <PlaceholderArt accent={item.accent} />
                  )}
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/45 to-transparent p-4">
                    <span className="inline-flex rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-stone-700">
                      {item.difficulty}
                    </span>
                  </div>
                </div>

                <div className="flex flex-1 flex-col gap-4 p-5">
                  <div className="space-y-1">
                    <h2 className="text-xl text-stone-950" style={{ fontFamily: 'var(--font-display)' }}>
                      {item.name}
                    </h2>
                    <p className="text-sm text-stone-500">{item.designer}</p>
                  </div>

                  <div className="space-y-2 text-sm text-stone-700">
                    <InfoRow label="Matched yarn" value={item.matchedYarn} />
                    <InfoRow label="Match score" value={`${item.matchScore}%`} />
                  </div>

                  <div className="rounded-2xl bg-stone-50 p-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-stone-500">Recommendation reason</p>
                    <p className="mt-2 text-sm leading-6 text-stone-700">{item.reason}</p>
                  </div>

                  <div className="mt-auto grid gap-2 sm:grid-cols-2">
                    <a
                      href={item.patternUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center rounded-full bg-stone-900 px-4 py-3 text-sm font-semibold text-white transition hover:bg-stone-800"
                    >
                      Open Pattern
                    </a>
                    <a
                      href={item.startUrl}
                      className="inline-flex items-center justify-center rounded-full border border-stone-300 bg-white px-4 py-3 text-sm font-semibold text-stone-700 transition hover:bg-stone-50"
                    >
                      Start Project
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

function InfoRow({ label, value }) {
  return (
    <div className="flex items-start justify-between gap-4 rounded-2xl bg-stone-50 px-3 py-2">
      <span className="text-xs font-semibold uppercase tracking-[0.16em] text-stone-500">{label}</span>
      <span className="text-right text-sm font-medium leading-6 text-stone-800">{value}</span>
    </div>
  );
}

function PlaceholderArt({ accent }) {
  return (
    <div
      className="relative flex h-full w-full items-center justify-center overflow-hidden"
      style={{
        background: `linear-gradient(135deg, ${accent}, rgba(255,255,255,0.96))`,
      }}
    >
      <svg viewBox="0 0 240 300" className="h-40 w-40 text-white/85" aria-hidden="true">
        <circle cx="120" cy="138" r="62" fill="currentColor" opacity="0.35" />
        <path
          d="M82 140c0-22 17-40 38-40s38 18 38 40-17 40-38 40-38-18-38-40Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="8"
        />
        <path
          d="M98 122c10 10 34 10 44 0M92 141c12 8 44 8 56 0M96 160c8 6 40 6 48 0"
          fill="none"
          stroke="currentColor"
          strokeWidth="6"
          strokeLinecap="round"
        />
        <path
          d="M120 78c14 9 21 20 21 31"
          fill="none"
          stroke="currentColor"
          strokeWidth="6"
          strokeLinecap="round"
        />
        <path
          d="M122 83c-7-17-17-29-31-40"
          fill="none"
          stroke="currentColor"
          strokeWidth="6"
          strokeLinecap="round"
        />
      </svg>
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/20 to-transparent p-4 text-center text-xs font-semibold uppercase tracking-[0.18em] text-white/90">
        No image available
      </div>
    </div>
  );
}

function makePatternImageDataUrl(title, accent) {
  const safeTitle = String(title ?? '').replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 1000" role="img" aria-label="${safeTitle}">
      <defs>
        <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="${accent}" stop-opacity="0.85"/>
          <stop offset="100%" stop-color="#f9f5ef" stop-opacity="1"/>
        </linearGradient>
      </defs>
      <rect width="800" height="1000" fill="url(#bg)"/>
      <circle cx="170" cy="170" r="70" fill="#fff" fill-opacity="0.35"/>
      <circle cx="620" cy="210" r="100" fill="#fff" fill-opacity="0.22"/>
      <path d="M130 680c100-160 190-240 290-240s180 70 240 200" fill="none" stroke="#fff" stroke-opacity="0.55" stroke-width="24" stroke-linecap="round"/>
      <path d="M170 710c80-120 150-180 220-180s130 50 180 160" fill="none" stroke="#fff" stroke-opacity="0.45" stroke-width="18" stroke-linecap="round"/>
      <rect x="68" y="68" width="664" height="864" rx="56" fill="none" stroke="#fff" stroke-opacity="0.28" stroke-width="4"/>
      <text x="400" y="850" text-anchor="middle" font-family="Inter, Arial, sans-serif" font-size="40" font-weight="700" fill="#ffffff" fill-opacity="0.96">${safeTitle}</text>
      <text x="400" y="900" text-anchor="middle" font-family="Inter, Arial, sans-serif" font-size="24" font-weight="500" fill="#ffffff" fill-opacity="0.86">Pattern preview</text>
    </svg>
  `;

  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}
