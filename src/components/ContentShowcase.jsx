import React from 'react';

const items = [
  {
    title: 'Clinical Topics',
    desc: 'Concise overviews with India-specific epidemiology, diagnostics, and treatment pathways.',
    chip: '12,000+ topics',
  },
  {
    title: 'Drug Database',
    desc: 'Generic and brand catalog with combinations, formulations, and typical market prices.',
    chip: 'India-specific',
  },
  {
    title: 'Clinical Cases',
    desc: 'Interactive cases with workup costs, treatment decisions, outcomes, and expert commentary.',
    chip: 'Case-based',
  },
  {
    title: 'Algorithms & Protocols',
    desc: 'Flowcharts and decision trees adapted for Indian practice and resource settings.',
    chip: 'Quick reference',
  },
];

export default function ContentShowcase() {
  return (
    <section className="relative bg-slate-50">
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <div className="max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Clinical content that matches your reality</h2>
          <p className="mt-3 text-slate-600">
            Curated by an editorial board of Indian clinicians with transparent references, peer review, and versioning.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          {items.map((card) => (
            <article key={card.title} className="group relative overflow-hidden rounded-2xl bg-white ring-1 ring-slate-200">
              <div className="p-6">
                <span className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700 ring-1 ring-blue-100">
                  {card.chip}
                </span>
                <h3 className="mt-4 text-xl font-semibold text-slate-900">{card.title}</h3>
                <p className="mt-2 text-slate-600">{card.desc}</p>
              </div>
              <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-r from-blue-50/0 to-blue-50" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
