import React from 'react';
import { Pill, IndianRupee, CheckCircle2, Scale } from 'lucide-react';

const brands = [
  { name: 'Glycomet', strength: '500mg', form: '10 tablets', price: '₹25–35' },
  { name: 'Glucophage', strength: '500mg', form: '10 tablets', price: '₹40–50' },
  { name: 'Obimet', strength: '500mg', form: '10 tablets', price: '₹20–30' },
];

const combos = [
  { name: 'Metformin + Glimepiride (Glycomet-GP)', pack: '15 tablets', price: '₹60–80' },
  { name: 'Metformin + Vildagliptin (Galvus Met)', pack: '15 tablets', price: '₹180–220' },
];

export default function DrugSpotlightMetformin() {
  return (
    <section className="bg-slate-50">
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <div className="flex items-start justify-between gap-6 flex-col md:flex-row">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 text-blue-700 ring-1 ring-blue-100 px-3 py-1 text-xs font-medium">
              <Pill className="h-4 w-4" />
              <span>Drug Spotlight</span>
            </div>
            <h2 className="mt-4 text-3xl md:text-4xl font-bold text-slate-900">Metformin</h2>
            <p className="mt-3 text-slate-600">
              First-line therapy for type 2 diabetes in India. Cost-effective, widely available, and aligned with India-specific treatment pathways.
            </p>
            <div className="mt-4 inline-flex items-center gap-2 text-sm text-emerald-700 bg-emerald-50 ring-1 ring-emerald-100 rounded-full px-3 py-1">
              <CheckCircle2 className="h-4 w-4" /> Widely available across chemists
            </div>
          </div>
          <div className="w-full md:w-auto">
            <div className="rounded-2xl bg-white ring-1 ring-slate-200 p-5 shadow-sm">
              <div className="flex items-center gap-2 text-slate-700">
                <IndianRupee className="h-5 w-5 text-blue-600" />
                <span className="text-sm">Typical monthly cost (monotherapy)</span>
              </div>
              <p className="mt-1 text-2xl font-semibold text-slate-900">₹150–300</p>
              <p className="mt-1 text-xs text-slate-500">Typical prescription: 500mg BD; can increase to 1000mg BD</p>
            </div>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-2xl bg-white ring-1 ring-slate-200 p-6">
            <h3 className="text-lg font-semibold text-slate-900">Brands in India</h3>
            <div className="mt-4 divide-y divide-slate-100">
              {brands.map((b) => (
                <div key={b.name} className="py-3 flex items-center justify-between">
                  <div>
                    <p className="font-medium text-slate-900">{b.name} {b.strength}</p>
                    <p className="text-sm text-slate-500">Pack: {b.form}</p>
                  </div>
                  <p className="text-sm font-semibold text-slate-900">{b.price}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-2xl bg-white ring-1 ring-slate-200 p-6">
            <h3 className="text-lg font-semibold text-slate-900">Common combinations</h3>
            <div className="mt-4 divide-y divide-slate-100">
              {combos.map((c) => (
                <div key={c.name} className="py-3 flex items-center justify-between">
                  <div>
                    <p className="font-medium text-slate-900">{c.name}</p>
                    <p className="text-sm text-slate-500">Pack: {c.pack}</p>
                  </div>
                  <p className="text-sm font-semibold text-slate-900">{c.price}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-2xl bg-white ring-1 ring-slate-200 p-6">
            <div className="flex items-center gap-2 text-slate-700">
              <Scale className="h-5 w-5 text-blue-600" />
              <h4 className="font-semibold text-slate-900">Drug comparison tool</h4>
            </div>
            <p className="mt-2 text-sm text-slate-600">
              Compare costs, availability, and efficacy across similar drugs with India-specific evidence.
            </p>
            <button className="mt-4 inline-flex items-center justify-center rounded-lg bg-blue-600 text-white px-4 py-2 text-sm font-medium hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300">
              Compare alternatives
            </button>
          </div>
          <div className="rounded-2xl bg-white ring-1 ring-slate-200 p-6">
            <div className="flex items-center gap-2 text-slate-700">
              <Pill className="h-5 w-5 text-blue-600" />
              <h4 className="font-semibold text-slate-900">Interaction checker</h4>
            </div>
            <p className="mt-2 text-sm text-slate-600">
              Check multi-drug interactions with severity ratings and India-available alternatives.
            </p>
            <button className="mt-4 inline-flex items-center justify-center rounded-lg bg-emerald-600 text-white px-4 py-2 text-sm font-medium hover:bg-emerald-700 focus:outline-none focus:ring-4 focus:ring-emerald-300">
              Check interactions
            </button>
          </div>
          <div className="rounded-2xl bg-white ring-1 ring-slate-200 p-6">
            <div className="flex items-center gap-2 text-slate-700">
              <IndianRupee className="h-5 w-5 text-blue-600" />
              <h4 className="font-semibold text-slate-900">Pathway preview</h4>
            </div>
            <p className="mt-2 text-sm text-slate-600">
              India-adapted diabetes pathway with cost annotations and availability notes.
            </p>
            <ul className="mt-3 space-y-1 text-sm text-slate-600 list-disc list-inside">
              <li>Lifestyle → Metformin (₹150–300/month)</li>
              <li>Second line: Glimepiride or DPP4i</li>
              <li>Third line: Insulin (Mixtard/Novomix)</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
