const features = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <rect x="2" y="2" width="8" height="8" rx="2" stroke="currentColor" strokeWidth="1.5"/>
        <rect x="12" y="2" width="8" height="8" rx="2" stroke="currentColor" strokeWidth="1.5"/>
        <rect x="2" y="12" width="8" height="8" rx="2" stroke="currentColor" strokeWidth="1.5"/>
        <rect x="12" y="12" width="8" height="8" rx="2" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
    title: 'Kanban that actually works',
    desc: 'Drag, drop, and reorganise tasks in seconds. Custom columns, swimlanes, and filters — set up in minutes, not an afternoon.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <circle cx="11" cy="11" r="9" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M11 6v5l3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Deadlines that stick',
    desc: 'Smart reminders, timeline views, and automated status updates keep everyone accountable — without the 9am standup.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M4 6h14M4 11h10M4 16h7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: 'One source of truth',
    desc: 'Docs, tasks, and discussions live together. No more "which Slack thread was that in" — everything links back to the task.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M11 2l2.5 5.5L19 8.5l-4 4 1 5.5L11 15.5 6 18l1-5.5-4-4 5.5-1z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'AI that fills in the gaps',
    desc: 'Auto-generate subtasks, write task descriptions, and get weekly summaries — so your team spends time doing, not documenting.',
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
    title: 'Works with your stack',
    desc: 'Native integrations with GitHub, Slack, Figma, and 40+ tools. Your workflow stays yours — we just plug in.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M3 17l4-4 4 4 8-8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Reports in one click',
    desc: 'Velocity charts, workload views, and burndown reports auto-generate from your tasks. Show stakeholders what\'s shipping.',
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-semibold text-brand-500 uppercase tracking-widest">Features</span>
          <h2 className="font-display text-4xl font-extrabold text-slate-950 mt-2 mb-4">
            Everything your team needs.<br/>Nothing you don't.
          </h2>
          <p className="text-slate-500 text-lg max-w-lg mx-auto">
            Built for teams of 2 to 200. Flexible enough to fit how you already work.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f, i) => (
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
