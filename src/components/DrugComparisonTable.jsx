import React, { useMemo, useState } from 'react';
import { Search, Filter, ArrowUpDown, IndianRupee } from 'lucide-react';

// Sample India-focused brand data for Metformin and common alternatives
const RAW_DATA = [
  { generic: 'Metformin', brand: 'Glycomet', strength: '500mg', form: '10 tablets', priceRange: '₹25–35' },
  { generic: 'Metformin', brand: 'Glucophage', strength: '500mg', form: '10 tablets', priceRange: '₹40–50' },
  { generic: 'Metformin', brand: 'Obimet', strength: '500mg', form: '10 tablets', priceRange: '₹20–30' },
  { generic: 'Metformin', brand: 'Glycomet', strength: '850mg', form: '10 tablets', priceRange: '₹35–50' },
  { generic: 'Glimepiride', brand: 'Amaryl', strength: '1mg', form: '10 tablets', priceRange: '₹60–80' },
  { generic: 'Vildagliptin', brand: 'Galvus', strength: '50mg', form: '14 tablets', priceRange: '₹240–280' },
  { generic: 'Metformin + Glimepiride', brand: 'Glycomet-GP', strength: '1/500mg', form: '15 tablets', priceRange: '₹60–80' },
  { generic: 'Vildagliptin + Metformin', brand: 'Galvus Met', strength: '50/500mg', form: '15 tablets', priceRange: '₹180–220' },
];

function parseMinPrice(range) {
  // Extract the minimum numeric value from a price string like "₹25–35"
  const m = range.match(/([0-9]+)/);
  return m ? Number(m[1]) : 0;
}

export default function DrugComparisonTable() {
  const [query, setQuery] = useState('');
  const [strengthFilter, setStrengthFilter] = useState('All');
  const [sortAsc, setSortAsc] = useState(true);
  const [genericFilter, setGenericFilter] = useState('All');

  const strengths = useMemo(() => {
    const set = new Set(RAW_DATA.map((d) => d.strength));
    return ['All', ...Array.from(set)];
  }, []);

  const generics = useMemo(() => {
    const set = new Set(RAW_DATA.map((d) => d.generic));
    return ['All', ...Array.from(set)];
  }, []);

  const filtered = useMemo(() => {
    let out = RAW_DATA.filter((row) => {
      const q = query.trim().toLowerCase();
      const matchesQuery = !q || row.brand.toLowerCase().includes(q) || row.generic.toLowerCase().includes(q);
      const matchesStrength = strengthFilter === 'All' || row.strength === strengthFilter;
      const matchesGeneric = genericFilter === 'All' || row.generic === genericFilter;
      return matchesQuery && matchesStrength && matchesGeneric;
    });
    out.sort((a, b) => {
      const pa = parseMinPrice(a.priceRange);
      const pb = parseMinPrice(b.priceRange);
      return sortAsc ? pa - pb : pb - pa;
    });
    return out;
  }, [query, strengthFilter, sortAsc, genericFilter]);

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Brand comparison</h2>
            <p className="mt-1 text-slate-600 text-sm">Search, filter and sort India-available brands and combinations with indicative MRPs.</p>
          </div>

          <div className="flex w-full md:w-auto flex-col gap-2 md:flex-row md:items-center">
            <div className="flex items-center gap-2 rounded-xl ring-1 ring-slate-200 bg-white px-3 py-2 w-full md:w-80">
              <Search className="h-4 w-4 text-slate-500" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search brand or generic"
                className="w-full bg-transparent text-sm text-slate-900 placeholder-slate-400 focus:outline-none"
              />
            </div>
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-2 rounded-xl ring-1 ring-slate-200 bg-white px-3 py-2">
                <Filter className="h-4 w-4 text-slate-500" />
                <select
                  className="bg-transparent text-sm focus:outline-none"
                  value={genericFilter}
                  onChange={(e) => setGenericFilter(e.target.value)}
                >
                  {generics.map((g) => (
                    <option key={g} value={g}>{g}</option>
                  ))}
                </select>
              </div>
              <div className="flex items-center gap-2 rounded-xl ring-1 ring-slate-200 bg-white px-3 py-2">
                <Filter className="h-4 w-4 text-slate-500" />
                <select
                  className="bg-transparent text-sm focus:outline-none"
                  value={strengthFilter}
                  onChange={(e) => setStrengthFilter(e.target.value)}
                >
                  {strengths.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </div>
              <button
                type="button"
                onClick={() => setSortAsc((v) => !v)}
                className="inline-flex items-center gap-2 rounded-xl ring-1 ring-slate-200 bg-white px-3 py-2 text-sm text-slate-700 hover:bg-slate-50"
                aria-label="Toggle sort order by price"
              >
                <ArrowUpDown className="h-4 w-4" />
                Sort by price
              </button>
            </div>
          </div>
        </div>

        <div className="mt-6 overflow-x-auto rounded-2xl ring-1 ring-slate-200 bg-white">
          <table className="min-w-full text-left">
            <thead className="bg-slate-50 text-slate-600 text-xs uppercase">
              <tr>
                <th className="px-4 py-3">Generic</th>
                <th className="px-4 py-3">Brand</th>
                <th className="px-4 py-3">Strength</th>
                <th className="px-4 py-3">Form</th>
                <th className="px-4 py-3">Price</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-sm">
              {filtered.map((row) => (
                <tr key={`${row.brand}-${row.strength}-${row.form}`} className="hover:bg-slate-50">
                  <td className="px-4 py-3 text-slate-700">{row.generic}</td>
                  <td className="px-4 py-3 font-medium text-slate-900">{row.brand}</td>
                  <td className="px-4 py-3 text-slate-700">{row.strength}</td>
                  <td className="px-4 py-3 text-slate-700">{row.form}</td>
                  <td className="px-4 py-3 text-slate-900 font-semibold flex items-center gap-1">
                    <IndianRupee className="h-4 w-4 text-blue-600" />
                    <span>{row.priceRange}</span>
                  </td>
                </tr>
              ))}
              {filtered.length === 0 && (
                <tr>
                  <td colSpan={5} className="px-4 py-6 text-center text-slate-500">No matches for current filters.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
