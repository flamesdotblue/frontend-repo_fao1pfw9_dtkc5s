import React from 'react';
import Spline from '@splinetool/react-spline';

export default function HeroSplineCover() {
  return (
    <section className="relative w-full min-h-[80vh] md:min-h-screen overflow-hidden bg-blue-600">
      {/* 3D Spline Scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/5EwoDiC2tChvmy4K/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Gradient overlay for contrast (non-interactive) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-blue-900/70 via-blue-900/40 to-blue-950/80" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-16 md:py-24 flex items-center min-h-[80vh] md:min-h-screen">
        <div className="max-w-3xl text-white">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs md:text-sm backdrop-blur-sm ring-1 ring-white/20">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            <span>India-first clinical decision support</span>
          </div>

          <h1 className="mt-6 font-bold leading-tight text-4xl md:text-6xl">
            Medeco — Clinical guidance aligned to Indian practice
          </h1>
          <p className="mt-4 md:mt-6 text-base md:text-lg text-blue-100">
            Evidence-based, peer-reviewed pathways adapted for Indian clinicians with local drug availability, real-world costs, and regional relevance.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#get-started"
              className="inline-flex items-center justify-center rounded-lg bg-white px-5 py-3 font-semibold text-blue-700 shadow-lg shadow-blue-900/30 hover:bg-blue-50 focus:outline-none focus:ring-4 focus:ring-white/30"
            >
              Get early access
            </a>
            <a
              href="#features"
              className="inline-flex items-center justify-center rounded-lg bg-blue-900/40 px-5 py-3 font-semibold text-white ring-1 ring-white/20 hover:bg-blue-900/60 focus:outline-none focus:ring-4 focus:ring-white/20"
            >
              Explore features
            </a>
          </div>

          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-6 text-blue-100/90 text-sm">
            <div>
              <p className="font-semibold text-white">25+ specialties</p>
              <p>12,000+ topics</p>
            </div>
            <div>
              <p className="font-semibold text-white">India-specific</p>
              <p>Drugs and costs</p>
            </div>
            <div>
              <p className="font-semibold text-white">Offline-first</p>
              <p>PWA support</p>
            </div>
            <div>
              <p className="font-semibold text-white">Peer-reviewed</p>
              <p>By Indian clinicians</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
