import { useState } from 'react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-brand-500 flex items-center justify-center">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 4h10M3 8h7M3 12h4" stroke="white" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </div>
          <span className="font-display font-700 text-slate-900 text-lg font-bold">Taskflow</span>
        </div>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8 text-sm text-slate-600 font-medium">
          <a href="#features" className="hover:text-slate-900 transition-colors">Features</a>
          <a href="#testimonials" className="hover:text-slate-900 transition-colors">Testimonials</a>
          <a href="#pricing" className="hover:text-slate-900 transition-colors">Pricing</a>
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a href="#pricing" className="text-sm text-slate-600 font-medium hover:text-slate-900 transition-colors">Log in</a>
          <a
            href="#pricing"
            className="bg-brand-500 text-white text-sm font-semibold px-4 py-2 rounded-lg hover:bg-brand-600 transition-colors"
          >
            Start free
          </a>
        </div>

        {/* Mobile hamburger */}
        <button onClick={() => setOpen(!open)} className="md:hidden p-1">
          <div className="w-5 h-0.5 bg-slate-700 mb-1"></div>
          <div className="w-5 h-0.5 bg-slate-700 mb-1"></div>
          <div className="w-5 h-0.5 bg-slate-700"></div>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-slate-100 px-6 py-4 flex flex-col gap-4 text-sm font-medium text-slate-700">
          <a href="#features" onClick={() => setOpen(false)}>Features</a>
          <a href="#testimonials" onClick={() => setOpen(false)}>Testimonials</a>
          <a href="#pricing" onClick={() => setOpen(false)}>Pricing</a>
          <a href="#pricing" className="bg-brand-500 text-white text-center py-2 rounded-lg font-semibold">Start free</a>
        </div>
      )}
    </nav>
  );
}
