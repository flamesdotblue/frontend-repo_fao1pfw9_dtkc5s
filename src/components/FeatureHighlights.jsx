import React from 'react';
import { Stethoscope, Pill, Database, Search } from 'lucide-react';

const features = [
  {
    icon: Stethoscope,
    title: 'India-aligned pathways',
    desc: 'Diagnosis and treatment flows curated by Indian specialists to reflect local practice and resource availability.',
  },
  {
    icon: Pill,
    title: 'Drug reality with costs',
    desc: 'Generic/brand options commonly available in India with formulations, combinations, and typical MRP ranges.',
  },
  {
    icon: Database,
    title: 'Offline-first PWA',
    desc: 'Fast access at point of care, with smart syncing so your bookmarks and recent topics work even without internet.',
  },
  {
    icon: Search,
    title: 'Intelligent search',
    desc: 'Full-text, filters by specialty and content type, and support for English + Hindi voice search.',
  },
];

export default function FeatureHighlights() {
  return (
    <section id="features" className="relative bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <div className="max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Built for Indian clinicians</h2>
          <p className="mt-3 text-slate-600">
            A focused experience that transforms global evidence into practical guidance for Indian clinical settings.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-sm text-slate-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
