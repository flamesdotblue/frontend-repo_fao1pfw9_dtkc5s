import React from 'react';

export default function CallToAction() {
  return (
    <section id="get-started" className="relative overflow-hidden bg-gradient-to-b from-blue-700 to-blue-900">
      <div className="absolute inset-0 opacity-20" aria-hidden="true">
        <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" viewBox="0 0 800 400">
          <defs>
            <linearGradient id="g" x1="0" x2="1" y1="0" y2="1">
              <stop stopColor="#60a5fa" offset="0%" />
              <stop stopColor="#34d399" offset="100%" />
            </linearGradient>
          </defs>
          <g fill="url(#g)">
            <circle cx="100" cy="80" r="80" />
            <circle cx="700" cy="320" r="110" />
            <circle cx="400" cy="200" r="60" />
          </g>
        </svg>
      </div>

      <div className="relative mx-auto max-w-5xl px-6 py-16 md:py-24 text-center text-white">
        <h2 className="text-3xl md:text-4xl font-bold">
          Bring evidence to the bedside — adapted for India
        </h2>
        <p className="mt-4 text-blue-100 max-w-3xl mx-auto">
          Join the early access program to explore specialty pathways, India-specific drug data with costs, and interactive case learning.
        </p>

        <form
          onSubmit={(e) => e.preventDefault()}
          className="mt-8 flex w-full max-w-xl mx-auto rounded-xl bg-white p-2 ring-1 ring-white/20 focus-within:ring-2 focus-within:ring-emerald-300"
        >
          <input
            type="email"
            required
            placeholder="Enter your work email"
            className="w-full rounded-lg px-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none"
          />
          <button
            type="submit"
            className="ml-2 inline-flex items-center justify-center rounded-lg bg-emerald-500 px-5 py-3 font-semibold text-white hover:bg-emerald-600 focus:outline-none focus:ring-4 focus:ring-emerald-300"
          >
            Request access
          </button>
        </form>

        <p className="mt-3 text-xs text-blue-100/80">
          Verified physicians only • Free access • HIPAA-aligned privacy
        </p>
      </div>
    </section>
  );
}
