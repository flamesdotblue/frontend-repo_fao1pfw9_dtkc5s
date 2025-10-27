import React, { useMemo, useState } from 'react';
import { Activity, Pill, HeartPulse, Syringe, ChevronRight, IndianRupee } from 'lucide-react';

const STEPS = [
  {
    id: 'lifestyle',
    title: 'Lifestyle + Education',
    detail: 'Dietary counselling, physical activity (150 min/week), weight management, smoking cessation.',
    cost: 'Low',
    note: 'Foundational step at diagnosis and every follow-up.',
  },
  {
    id: 'metformin',
    title: 'Start Metformin',
    detail: 'Begin 500mg once daily, titrate to 500mg BD, then 1000mg BD as tolerated. Monitor GI side effects and eGFR.',
    cost: '₹150–300/mo',
    note: 'Preferred first-line unless contraindicated (eGFR < 30 mL/min/1.73 m²).',
  },
  {
    id: 'add-second',
    title: 'Add second agent',
    detail: 'Choose based on hypoglycaemia risk, cost and comorbidities: Glimepiride (low cost) or DPP4i (vildagliptin/sitagliptin).',
    cost: '₹60–300/mo',
    note: 'Sulfonylureas are economical; DPP4i have lower hypoglycaemia risk.',
  },
  {
    id: 'sglt2i',
    title: 'Consider SGLT2 inhibitor',
    detail: 'For CKD/HF or ASCVD, consider dapagliflozin/empagliflozin if affordable and available.',
    cost: '₹500–900/mo',
    note: 'Renal and heart failure benefits independent of glycaemic control.',
  },
  {
    id: 'insulin',
    title: 'Initiate Insulin if needed',
    detail: 'Basal insulin or premix (e.g., Mixtard/Novomix). Educate on SMBG and hypoglycaemia recognition.',
    cost: '₹800–1500/mo',
    note: 'Add-on when oral agents inadequate or symptomatic hyperglycaemia.',
  },
];

const ICON_MAP = {
  lifestyle: Activity,
  metformin: Pill,
  'add-second': Pill,
  sglt2i: HeartPulse,
  insulin: Syringe,
};

export default function DiabetesPathwayFlowchart() {
  const [selected, setSelected] = useState('metformin');

  const nodes = useMemo(() => STEPS, []);
  const sel = nodes.find((n) => n.id === selected) ?? nodes[0];

  return (
    <section className="bg-slate-50">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="flex items-start justify-between gap-6 flex-col md:flex-row">
          <div className="max-w-2xl">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Diabetes pathway (India-adapted)</h2>
            <p className="mt-2 text-slate-600 text-sm">Tap a step to view details. Costs shown are typical monthly ranges for India.</p>
          </div>
          <div className="rounded-2xl bg-white ring-1 ring-slate-200 p-4 w-full md:w-auto">
            <div className="flex items-center gap-2 text-slate-700"><IndianRupee className="h-5 w-5 text-blue-600" /><span className="text-sm">Cost annotations included</span></div>
          </div>
        </div>

        {/* Flowchart rail */}
        <div className="mt-8 overflow-x-auto">
          <ol className="min-w-[720px] grid grid-cols-5 gap-4">
            {nodes.map((n, idx) => {
              const Icon = ICON_MAP[n.id] ?? Activity;
              const active = n.id === selected;
              return (
                <li key={n.id} className="flex items-center">
                  <button
                    onClick={() => setSelected(n.id)}
                    className={[
                      'flex-1 relative rounded-2xl p-4 text-left ring-1 transition shadow-sm',
                      active
                        ? 'bg-blue-600 text-white ring-blue-600'
                        : 'bg-white text-slate-800 ring-slate-200 hover:bg-slate-50',
                    ].join(' ')}
                    aria-current={active ? 'step' : undefined}
                  >
                    <div className="flex items-start gap-3">
                      <span className={[
                        'inline-flex h-10 w-10 items-center justify-center rounded-xl',
                        active ? 'bg-white/15 text-white' : 'bg-blue-50 text-blue-600',
                      ].join(' ')}>
                        <Icon className="h-5 w-5" />
                      </span>
                      <div>
                        <div className="font-semibold leading-tight">{n.title}</div>
                        <div className={active ? 'text-blue-100 text-xs mt-1' : 'text-slate-500 text-xs mt-1'}>
                          {n.cost === 'Low' ? 'Low cost' : `~ ${n.cost}`}
                        </div>
                      </div>
                    </div>
                  </button>
                  {idx < nodes.length - 1 && (
                    <div className="mx-2 flex-none text-slate-400">
                      <ChevronRight className="h-6 w-6" />
                    </div>
                  )}
                </li>
              );
            })}
          </ol>
        </div>

        {/* Details panel */}
        <div className="mt-8 rounded-2xl bg-white ring-1 ring-slate-200 p-6">
          <h3 className="text-lg font-semibold text-slate-900">{sel.title}</h3>
          <p className="mt-2 text-slate-700 text-sm">{sel.detail}</p>
          <div className="mt-4 flex flex-wrap gap-3">
            <span className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700 ring-1 ring-blue-100">
              <IndianRupee className="h-4 w-4" /> {sel.cost === 'Low' ? 'Low cost' : sel.cost}
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700 ring-1 ring-emerald-100">
              Note
            </span>
          </div>
          <p className="mt-2 text-slate-600 text-sm">{sel.note}</p>
        </div>
      </div>
    </section>
  );
}
