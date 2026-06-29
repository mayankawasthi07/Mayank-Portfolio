import React from 'react';

const services = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <rect x="2" y="2" width="8" height="8" rx="2" stroke="currentColor" strokeWidth="1.5"/>
        <rect x="12" y="2" width="8" height="8" rx="2" stroke="currentColor" strokeWidth="1.5"/>
        <rect x="2" y="12" width="8" height="8" rx="2" stroke="currentColor" strokeWidth="1.5"/>
        <rect x="12" y="12" width="8" height="8" rx="2" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
    title: 'Landing pages',
    desc: 'Fast, conversion-focused landing pages for products, startups, and personal brands — built to load instantly and look great on every device.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M4 6h14M4 11h10M4 16h7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Website redesigns',
    desc: 'Got an outdated or cluttered website? I rebuild it with modern UI, better structure, and improved performance — without losing your content.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <circle cx="7" cy="11" r="3" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="15" cy="7" r="3" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="15" cy="15" r="3" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M10 11h2M12 7h-1l-2 4M12 15h-1l-2-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: 'UI component development',
    desc: 'Custom, reusable React components built to match your design system — dashboards, forms, modals, navigation, and more.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M11 2l2.5 5.5L19 8.5l-4 4 1 5.5L11 15.5 6 18l1-5.5-4-4 5.5-1z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Responsive design',
    desc: 'Every project I build works seamlessly across mobile, tablet, and desktop — no broken layouts, no awkward scaling.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <circle cx="11" cy="11" r="9" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M11 6v5l3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Performance optimisation',
    desc: 'Slow site? I diagnose and fix loading issues, image optimisation, and code-splitting to get your Lighthouse scores up.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M3 17l4-4 4 4 8-8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Ongoing maintenance',
    desc: 'Need regular updates, bug fixes, or new features added to an existing site? I offer flexible monthly support.',
  },
];

export default function Features() {
  return (
    <section id="services" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-semibold text-brand-500 uppercase tracking-widest">Services</span>
          <h2 className="font-display text-4xl font-extrabold text-slate-950 mt-2 mb-4">
            What I can build for you
          </h2>
          <p className="text-slate-500 text-lg max-w-lg mx-auto">
            From a single landing page to a full UI overhaul — here's how I can help.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((f, i) => (
            <div
              key={i}
              className="group p-6 rounded-2xl border border-slate-100 hover:border-brand-100 hover:bg-brand-50/30 transition-all duration-200"
            >
              <div className="w-10 h-10 rounded-xl bg-brand-50 text-brand-500 flex items-center justify-center mb-4 group-hover:bg-brand-100 transition-colors">
                {f.icon}
              </div>
              <h3 className="font-display font-bold text-slate-900 mb-2 text-base">{f.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}