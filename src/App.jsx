import React from 'react';
import HeroSplineCover from './components/HeroSplineCover';
import FeatureHighlights from './components/FeatureHighlights';
import DrugSpotlightMetformin from './components/DrugSpotlightMetformin';
import DrugComparisonTable from './components/DrugComparisonTable';
import DiabetesPathwayFlowchart from './components/DiabetesPathwayFlowchart';
import CallToAction from './components/CallToAction';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <HeroSplineCover />
      <FeatureHighlights />
      <DrugSpotlightMetformin />
      <DrugComparisonTable />
      <DiabetesPathwayFlowchart />
      <CallToAction />
      <footer className="bg-white border-t border-slate-200">
        <div className="mx-auto max-w-7xl px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-600">© {new Date().getFullYear()} Medeco. All rights reserved.</p>
          <nav className="flex items-center gap-6 text-sm text-slate-600">
            <a className="hover:text-slate-900" href="#features">Features</a>
            <a className="hover:text-slate-900" href="#get-started">Get started</a>
            <a className="hover:text-slate-900" href="#">Privacy</a>
          </nav>
        </div>
      </footer>
    </div>
  );
}
