import { useState } from 'react';

const plans = [
  {
    name: 'Starter',
    monthly: 0,
    yearly: 0,
    desc: 'Perfect for solo founders and tiny teams just getting started.',
    cta: 'Get started free',
    ctaStyle: 'border border-slate-200 text-slate-700 hover:bg-slate-50',
    features: ['Up to 3 users', '5 active projects', 'Basic kanban board', 'Slack integration', '5GB storage'],
  },
  {
    name: 'Team',
    monthly: 12,
    yearly: 9,
    desc: 'For growing teams that need more power and collaboration.',
    cta: 'Start 14-day trial',
    ctaStyle: 'bg-brand-500 text-white hover:bg-brand-600 shadow-lg shadow-brand-500/25',
    popular: true,
    features: ['Up to 25 users', 'Unlimited projects', 'Timeline & Gantt view', 'AI task assistant', 'All integrations', 'Priority support'],
  },
  {
    name: 'Scale',
    monthly: 29,
    yearly: 22,
    desc: 'For larger teams that need security, compliance, and admin controls.',
    cta: 'Contact us',
    ctaStyle: 'border border-slate-200 text-slate-700 hover:bg-slate-50',
    features: ['Unlimited users', 'SSO & SAML', 'Advanced analytics', 'Custom roles', 'Audit logs', 'Dedicated support'],
  },
];

function Check() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-brand-500 shrink-0 mt-0.5">
      <circle cx="8" cy="8" r="7" fill="currentColor" opacity="0.1"/>
      <path d="M5 8l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export default function Pricing() {
  const [yearly, setYearly] = useState(false);

  return (
    <section id="pricing" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-xs font-semibold text-brand-500 uppercase tracking-widest">Pricing</span>
          <h2 className="font-display text-4xl font-extrabold text-slate-950 mt-2 mb-4">
            Simple, honest pricing
          </h2>
          <p className="text-slate-500 mb-6">No hidden fees. Cancel anytime. Start free.</p>

          {/* Toggle */}
          <div className="inline-flex items-center gap-3 bg-slate-100 p-1 rounded-xl">
            <button
              onClick={() => setYearly(false)}
              className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-all ${!yearly ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
            >
              Monthly
            </button>
            <button
              onClick={() => setYearly(true)}
              className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-all flex items-center gap-2 ${yearly ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}
            >
              Yearly
              <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded-full">−25%</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`rounded-2xl p-6 border transition-all relative ${plan.popular ? 'border-brand-200 ring-2 ring-brand-500/20' : 'border-slate-100'}`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-brand-500 text-white text-xs font-semibold px-3 py-1 rounded-full">Most popular</span>
                </div>
              )}

              <div className="mb-5">
                <h3 className="font-display font-bold text-slate-900 text-lg mb-1">{plan.name}</h3>
                <p className="text-slate-400 text-sm">{plan.desc}</p>
              </div>

              <div className="mb-6">
                <span className="font-display text-4xl font-extrabold text-slate-950">
                  ${yearly ? plan.yearly : plan.monthly}
                </span>
                {(yearly ? plan.yearly : plan.monthly) > 0 && (
                  <span className="text-slate-400 text-sm ml-1">/user/month</span>
                )}
              </div>

              <a
                href="/"
                className={`block text-center py-2.5 rounded-xl text-sm font-semibold mb-6 transition-all ${plan.ctaStyle}`}
              >
                {plan.cta}
              </a>

              <ul className="space-y-2.5">
                {plan.features.map((f, fi) => (
                  <li key={fi} className="flex items-start gap-2 text-sm text-slate-600">
                    <Check />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
