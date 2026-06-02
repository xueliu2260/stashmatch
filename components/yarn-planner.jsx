'use client';

import { useEffect, useMemo, useState } from 'react';
import { MOCK_INVENTORY_EXAMPLES, getPreviewColorOptions, recommendPatterns } from '../src/recommender.js';

export default function YarnPlanner() {
  const recommendedPatterns = useMemo(
    () => recommendPatterns(MOCK_INVENTORY_EXAMPLES, 5),
    [],
  );
  const [selectedPattern, setSelectedPattern] = useState(null);

  useEffect(() => {
    if (!selectedPattern) {
      return undefined;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setSelectedPattern(null);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [selectedPattern]);

  function openPreview(pattern) {
    const previewOptions = pattern.previewOptions?.length > 0
      ? pattern.previewOptions
      : getPreviewColorOptions(pattern, MOCK_INVENTORY_EXAMPLES);

    setSelectedPattern({
      ...pattern,
      previewOptions,
    });
  }

  function closePreview() {
    setSelectedPattern(null);
  }

  return (
    <main className="relative mx-auto min-h-screen w-full max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
      <div className="absolute inset-x-0 top-0 -z-10 h-72 bg-gradient-to-b from-amber-100/70 via-stone-50 to-transparent" />

      <section className="overflow-hidden rounded-[2.25rem] border border-stone-200 bg-[#f8f3ec]/95 shadow-soft backdrop-blur">
        <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-[1.05fr_0.95fr] lg:p-10">
          <div className="space-y-6">
            <div className="inline-flex items-center rounded-full border border-stone-300 bg-white/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-stone-600">
              StashMatch
            </div>

            <div className="space-y-4">
              <h1
                className="max-w-2xl text-4xl leading-tight text-stone-950 sm:text-5xl lg:text-6xl"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                My Yarn Cabinet
              </h1>
              <p className="max-w-2xl text-base leading-7 text-stone-600 sm:text-lg">
                A cozy little view of the yarn waiting on your shelves, plus pattern recommendations you can preview with your own stash.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href="#pattern-recommendations"
                className="inline-flex items-center justify-center rounded-full bg-stone-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-stone-800"
              >
                See Pattern Recommendations
              </a>
              <a
                href="#pattern-recommendations"
                className="inline-flex items-center justify-center rounded-full border border-stone-300 bg-white px-5 py-3 text-sm font-semibold text-stone-700 transition hover:bg-stone-50"
              >
                Open Gallery
              </a>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              <Metric label="Total skeins" value="19" />
              <Metric label="Remaining yards" value="3,930" />
              <Metric label="Pattern picks" value={recommendedPatterns.length} />
            </div>
          </div>

          <div className="rounded-[1.75rem] border border-stone-200 bg-white p-5 shadow-lg">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-stone-500">Cabinet notes</p>
                <h2 className="mt-2 text-2xl text-stone-950" style={{ fontFamily: 'var(--font-display)' }}>
                  Warm neutrals, easy browsing
                </h2>
              </div>
              <div className="rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-900">
                Ready to preview
              </div>
            </div>

            <div className="mt-6 space-y-4">
              <div className="rounded-3xl bg-stone-50 p-4">
                <div className="flex items-center justify-between text-sm text-stone-600">
                  <span>Matched color pair</span>
                  <span>Stone Blue + Oatmeal Ivory</span>
                </div>
                <div className="mt-3 flex gap-2">
                  {['#6f8fb1', '#ded3bf', '#78956f', '#c98c49'].map((color) => (
                    <span key={color} className="h-8 flex-1 rounded-full border border-white" style={{ backgroundColor: color }} />
                  ))}
                </div>
              </div>

              <div className="rounded-3xl bg-stone-50 p-4">
                <div className="flex items-center justify-between text-sm text-stone-600">
                  <span>Preview mode</span>
                  <span>Color, texture, and gauge may vary</span>
                </div>
                <div className="mt-3 h-2 rounded-full bg-stone-200">
                  <div className="h-2 w-[78%] rounded-full bg-gradient-to-r from-amber-300 to-stone-500" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="pattern-recommendations" className="mt-6 rounded-[2rem] border border-stone-200 bg-white/90 p-6 shadow-soft sm:p-8">
        <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-stone-500">Pattern Recommendations</p>
            <h2 className="mt-2 text-2xl text-stone-950" style={{ fontFamily: 'var(--font-display)' }}>
              Cozy patterns matched to your stash
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-6 text-stone-500">
            Curated cards with consistent image framing, matched yarn pairings, and a one-click preview of how each idea could look with your yarn.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
          {recommendedPatterns.map((pattern) => (
            <article
              key={pattern.id}
              className="flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-stone-200 bg-stone-50 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-stone-100">
                {pattern.imageUrl ? (
                  <img
                    src={pattern.imageUrl}
                    alt={`${pattern.name} pattern preview`}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                ) : (
                  <PatternPlaceholder />
                )}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/45 to-transparent p-4">
                  <span className="inline-flex rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-stone-700">
                    {pattern.type}
                  </span>
                </div>
              </div>

              <div className="flex flex-1 flex-col gap-4 p-5">
                <div className="space-y-1">
                  <h3 className="text-xl text-stone-950" style={{ fontFamily: 'var(--font-display)' }}>
                    {pattern.name}
                  </h3>
                  <p className="text-sm text-stone-500">{pattern.designer ?? 'Pattern designer'}</p>
                </div>

                <div className="space-y-2 text-sm text-stone-700">
                  <InfoRow label="Matched yarn or yarn pair" value={pattern.matchedPairLabel} />
                  <InfoRow label="Reason" value={pattern.matchedReason} />
                </div>

                <div className="mt-auto flex flex-wrap items-center gap-2">
                  <span className="inline-flex rounded-full border border-stone-200 bg-white px-3 py-1 text-xs font-semibold text-stone-600">
                    Score {Math.round(pattern.score)}
                  </span>
                  <span className="inline-flex rounded-full border border-stone-200 bg-white px-3 py-1 text-xs font-semibold text-stone-600">
                    Needle {pattern.needleMm ?? 5} mm
                  </span>
                </div>

                <button
                  type="button"
                  onClick={() => openPreview(pattern)}
                  className="inline-flex items-center justify-center rounded-full bg-stone-900 px-4 py-3 text-sm font-semibold text-white transition hover:bg-stone-800"
                >
                  Preview With My Stash
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-6 rounded-[2rem] border border-stone-200 bg-white/90 p-6 shadow-soft sm:p-8">
        <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-stone-500">Yarn Cabinet</p>
            <h2 className="mt-2 text-2xl text-stone-950" style={{ fontFamily: 'var(--font-display)' }}>
              Your stash at a glance
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-6 text-stone-500">
            The same yarn inventory that powers the preview matching logic.
          </p>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {MOCK_INVENTORY_EXAMPLES.map((yarn) => (
            <article
              key={yarn.id}
              className="overflow-hidden rounded-[1.1rem] border border-stone-200 bg-stone-50 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <div
                className="h-8 border-b border-stone-200"
                style={{ background: `linear-gradient(135deg, ${yarn.color}, rgba(255,255,255,0.9))` }}
              />
              <div className="space-y-2.5 p-2.5">
                <div className="space-y-1">
                  <h3 className="text-sm text-stone-950" style={{ fontFamily: 'var(--font-display)' }}>
                    {yarn.name}
                  </h3>
                  <p className="text-[11px] text-stone-500">{yarn.brand}</p>
                </div>

                <div className="grid gap-1.5 text-[11px] text-stone-700">
                  <InfoRow label="Color" value={yarn.colorName} />
                  <InfoRow label="Weight" value={formatWeightLabel(yarn.weight)} />
                  <InfoRow label="Remaining yards" value={`${yarn.yardage * yarn.quantity} yd`} />
                  <InfoRow label="Skeins" value={String(yarn.quantity)} />
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {selectedPattern ? (
        <PreviewModal pattern={selectedPattern} onClose={closePreview} />
      ) : null}
    </main>
  );
}

function PreviewModal({ pattern, onClose }) {
  const previewOptions = (pattern.previewOptions ?? []).slice(0, 3);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-stone-950/45 px-4 py-6 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      onClick={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <div className="max-h-[92vh] w-full max-w-6xl overflow-y-auto rounded-[2rem] border border-stone-200 bg-[#faf7f1] shadow-2xl">
        <div className="flex items-start justify-between gap-4 border-b border-stone-200 px-5 py-4 sm:px-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-stone-500">
              Estimated visual preview — color, texture, and gauge may vary.
            </p>
            <h3 className="mt-2 text-2xl text-stone-950" style={{ fontFamily: 'var(--font-display)' }}>
              {pattern.name}
            </h3>
            <p className="mt-1 text-sm text-stone-500">
              Original pattern image and up to 3 stash-based preview options.
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-full border border-stone-300 bg-white px-3 py-2 text-sm font-semibold text-stone-700 transition hover:bg-stone-50"
          >
            Close
          </button>
        </div>

        <div className="grid gap-6 px-5 py-5 sm:px-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="space-y-4">
            <div className="overflow-hidden rounded-[1.75rem] border border-stone-200 bg-white shadow-sm">
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-stone-100">
                {pattern.imageUrl ? (
                  <img
                    src={pattern.imageUrl}
                    alt={`${pattern.name} original pattern`}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <PatternPlaceholder />
                )}
              </div>
              <div className="space-y-3 p-4">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-stone-500">Original pattern</p>
                    <h4 className="mt-1 text-lg text-stone-950" style={{ fontFamily: 'var(--font-display)' }}>
                      {pattern.name}
                    </h4>
                  </div>
                  <span className="rounded-full bg-stone-100 px-3 py-1 text-xs font-semibold text-stone-700">
                    {pattern.designer ?? 'Pattern designer'}
                  </span>
                </div>
                <p className="text-sm leading-6 text-stone-600">{pattern.description ?? pattern.reason}</p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {previewOptions.map((option, index) => (
                <article
                  key={`${pattern.id}-${option.mainYarn.id}-${option.contrastYarn.id}`}
                  className="overflow-hidden rounded-[1.5rem] border border-stone-200 bg-white shadow-sm"
                >
                  <div className="relative aspect-[4/5] w-full overflow-hidden bg-stone-100">
                    {option.previewImageUrl ? (
                      <img
                        src={option.previewImageUrl}
                        alt={`${pattern.name} preview option ${index + 1}`}
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <div
                        className="h-full w-full"
                        style={{
                          background: option.previewGradient ?? 'linear-gradient(135deg, #d9cdbb, #8fa8b8)',
                        }}
                      />
                    )}
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/45 to-transparent p-3">
                      <span className="inline-flex rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-stone-700">
                        Option {index + 1}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-3 p-4">
                    <div className="flex items-center justify-between gap-3">
                      <span className="rounded-full bg-stone-100 px-3 py-1 text-xs font-semibold text-stone-700">
                        Score {Math.round(option.score)}
                      </span>
                      <span className="text-xs font-semibold uppercase tracking-[0.16em] text-stone-500">
                        {option.useCase}
                      </span>
                    </div>

                    <div className="space-y-2 text-sm">
                      <Line label="Main yarn" value={`${option.mainYarn.name} · ${option.mainYarn.colorName || option.mainYarn.color}`} />
                      <Line label="Contrast yarn" value={`${option.contrastYarn.name} · ${option.contrastYarn.colorName || option.contrastYarn.color}`} />
                    </div>

                    <p className="rounded-2xl bg-stone-50 p-3 text-sm leading-6 text-stone-700">
                      {option.reason}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Metric({ label, value }) {
  return (
    <div className="rounded-2xl border border-stone-200 bg-white/85 p-4">
      <p className="text-sm font-medium text-stone-500">{label}</p>
      <p className="mt-2 text-3xl text-stone-950" style={{ fontFamily: 'var(--font-display)' }}>
        {value}
      </p>
    </div>
  );
}

function InfoRow({ label, value }) {
  return (
    <div className="flex items-center justify-between gap-2 rounded-lg bg-white px-2.5 py-1.5">
      <span className="text-stone-500">{label}</span>
      <span className="font-semibold text-stone-900">{value}</span>
    </div>
  );
}

function Line({ label, value }) {
  return (
    <div className="space-y-1">
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-stone-500">{label}</p>
      <p className="text-sm leading-6 text-stone-700">{value}</p>
    </div>
  );
}

function formatWeightLabel(weight) {
  const value = String(weight ?? '').trim();
  if (!value) {
    return 'Any';
  }
  if (value.toUpperCase() === value && value.length <= 4) {
    return value;
  }
  return value.charAt(0).toUpperCase() + value.slice(1);
}

function PatternPlaceholder() {
  return (
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden bg-gradient-to-br from-stone-200 via-stone-100 to-amber-50">
      <svg viewBox="0 0 240 300" className="h-40 w-40 text-stone-500/70" aria-hidden="true">
        <path
          d="M78 156c0-24 19-43 42-43s42 19 42 43-19 43-42 43-42-19-42-43Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="8"
        />
        <path
          d="M99 139c10 10 33 10 43 0M94 158c12 8 40 8 52 0M97 177c8 6 35 6 43 0"
          fill="none"
          stroke="currentColor"
          strokeWidth="6"
          strokeLinecap="round"
        />
        <path
          d="M118 89c10 10 17 21 20 32"
          fill="none"
          stroke="currentColor"
          strokeWidth="6"
          strokeLinecap="round"
        />
        <path
          d="M84 240c20-18 55-30 76-30s56 12 76 30"
          fill="none"
          stroke="currentColor"
          strokeWidth="6"
          strokeLinecap="round"
        />
      </svg>
      <p className="absolute bottom-4 left-0 right-0 text-center text-xs font-semibold uppercase tracking-[0.18em] text-stone-500">
        Pattern preview placeholder
      </p>
    </div>
  );
}
