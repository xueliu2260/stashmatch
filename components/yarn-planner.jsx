'use client';

import Link from 'next/link';

const yarnCabinet = [
  {
    name: 'Cloud Merino',
    brand: 'Juniper Moon',
    color: 'Oatmeal Ivory',
    weight: 'DK',
    remainingYards: 860,
    skeins: 4,
    swatch: '#d9cdbb',
  },
  {
    name: 'Heather Fern',
    brand: 'Malabrigo',
    color: 'Moss Heather',
    weight: 'Worsted',
    remainingYards: 520,
    skeins: 2,
    swatch: '#8a9a74',
  },
  {
    name: 'Evening Haze',
    brand: 'Brooklyn Tweed',
    color: 'Stone Blue',
    weight: 'Fingering',
    remainingYards: 1240,
    skeins: 5,
    swatch: '#8fa8b8',
  },
  {
    name: 'Honey Tea',
    brand: 'Lion Brand',
    color: 'Warm Amber',
    weight: 'Aran',
    remainingYards: 390,
    skeins: 3,
    swatch: '#d7a35f',
  },
  {
    name: 'Cocoa Bloom',
    brand: 'Cascade',
    color: 'Cinnamon Brown',
    weight: 'Bulky',
    remainingYards: 240,
    skeins: 2,
    swatch: '#9b6b53',
  },
  {
    name: 'Rose Linen',
    brand: 'Rowan',
    color: 'Dusty Rose',
    weight: 'Sport',
    remainingYards: 680,
    skeins: 3,
    swatch: '#c48f92',
  },
];

export default function YarnPlanner() {
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
                A cozy little view of the yarn waiting on your shelves, with soft tones, rounded cards, and a quick path to your next project.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/recommendations"
                className="inline-flex items-center justify-center rounded-full bg-stone-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-stone-800"
              >
                Recommend from Ravelry Favourites
              </Link>
              <span className="inline-flex items-center rounded-full border border-stone-300 bg-white px-4 py-3 text-sm font-medium text-stone-600">
                6 yarns in the cabinet
              </span>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              <Metric label="Total skeins" value="19" />
              <Metric label="Remaining yards" value="3,930" />
              <Metric label="Weight range" value="6 types" />
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
                Ready to recommend
              </div>
            </div>

            <div className="mt-6 space-y-4">
              <div className="rounded-3xl bg-stone-50 p-4">
                <div className="flex items-center justify-between text-sm text-stone-600">
                  <span>Top matched weight</span>
                  <span>DK</span>
                </div>
                <div className="mt-3 h-2 rounded-full bg-stone-200">
                  <div className="h-2 w-[78%] rounded-full bg-gradient-to-r from-amber-300 to-stone-500" />
                </div>
              </div>

              <div className="rounded-3xl bg-stone-50 p-4">
                <div className="flex items-center justify-between text-sm text-stone-600">
                  <span>Color mood</span>
                  <span>Soft earth tones</span>
                </div>
                <div className="mt-3 flex gap-2">
                  {['#d9cdbb', '#8a9a74', '#8fa8b8', '#d7a35f'].map((color) => (
                    <span key={color} className="h-8 flex-1 rounded-full border border-white" style={{ backgroundColor: color }} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-6 rounded-[2rem] border border-stone-200 bg-white/90 p-6 shadow-soft sm:p-8">
        <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-stone-500">Cabinet inventory</p>
            <h2 className="mt-2 text-2xl text-stone-950" style={{ fontFamily: 'var(--font-display)' }}>
              Yarn cards
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-6 text-stone-500">
            Each card shows the essentials at a glance so you can plan with less digging and more making.
          </p>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {yarnCabinet.map((yarn) => (
            <article
              key={`${yarn.name}-${yarn.brand}`}
              className="overflow-hidden rounded-[1.1rem] border border-stone-200 bg-stone-50 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="h-8 border-b border-stone-200" style={{ background: `linear-gradient(135deg, ${yarn.swatch}, rgba(255,255,255,0.9))` }} />
              <div className="space-y-2.5 p-2.5">
                <div className="space-y-1">
                  <h3 className="text-sm text-stone-950" style={{ fontFamily: 'var(--font-display)' }}>
                    {yarn.name}
                  </h3>
                  <p className="text-[11px] text-stone-500">{yarn.brand}</p>
                </div>

                <div className="grid gap-1.5 text-[11px] text-stone-700">
                  <InfoRow label="Color" value={yarn.color} />
                  <InfoRow label="Weight" value={yarn.weight} />
                  <InfoRow label="Remaining yards" value={`${yarn.remainingYards} yd`} />
                  <InfoRow label="Skeins" value={String(yarn.skeins)} />
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
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
