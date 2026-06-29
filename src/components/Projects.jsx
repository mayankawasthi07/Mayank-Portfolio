const projects = [
  {
    title: 'Taskflow — SaaS Landing Page',
    desc: 'A conversion-focused landing page for a project management SaaS. Built with React and Tailwind from scratch — hero, features, pricing toggle, and footer. Lighthouse score 96.',
    tags: ['React', 'Tailwind CSS', 'Vercel'],
    link: 'https://taskflow-landing.vercel.app',
    accent: 'bg-brand-50 text-brand-600',
    preview: (
      <div className="p-4 h-full flex flex-col gap-2 bg-white w-full">
        <div className="flex gap-1.5 mb-1">
          <div className="w-2 h-2 rounded-full bg-red-300"></div>
          <div className="w-2 h-2 rounded-full bg-yellow-300"></div>
          <div className="w-2 h-2 rounded-full bg-green-300"></div>
        </div>
        <div className="h-3 w-2/3 bg-slate-200 rounded mx-auto mt-2"></div>
        <div className="h-2 w-1/2 bg-slate-100 rounded mx-auto"></div>
        <div className="flex gap-2 justify-center mt-2">
          <div className="h-6 w-16 bg-brand-500 rounded-lg"></div>
          <div className="h-6 w-16 bg-slate-100 rounded-lg border border-slate-200"></div>
        </div>
        <div className="grid grid-cols-3 gap-1.5 mt-3">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="bg-slate-50 rounded p-1.5 border border-slate-100">
              <div className="w-4 h-4 bg-brand-100 rounded mb-1"></div>
              <div className="h-1.5 w-full bg-slate-200 rounded"></div>
              <div className="h-1.5 w-2/3 bg-slate-100 rounded mt-1"></div>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    title: 'Analytica — Analytics Dashboard',
    desc: 'A fully interactive analytics dashboard for a early-stage SaaS startup. Features real-time charts, user stats, revenue tracking, and a responsive sidebar — all built in React with Recharts.',
    tags: ['React', 'Recharts', 'Tailwind CSS'],
    link: '#',
    accent: 'bg-violet-50 text-violet-600',
    preview: (
      <div className="p-4 h-full flex gap-3 bg-white w-full">
        {/* Sidebar */}
        <div className="flex flex-col gap-2 w-8">
          <div className="w-full h-2 bg-violet-200 rounded"></div>
          {[...Array(4)].map((_, i) => (
            <div key={i} className={`w-full h-1.5 rounded ${i === 0 ? 'bg-violet-400' : 'bg-slate-100'}`}></div>
          ))}
        </div>
        {/* Main content */}
        <div className="flex-1 flex flex-col gap-2">
          {/* Stat cards */}
          <div className="grid grid-cols-3 gap-1.5">
            {['bg-violet-50', 'bg-emerald-50', 'bg-amber-50'].map((bg, i) => (
              <div key={i} className={`${bg} rounded p-1.5`}>
                <div className="h-1.5 w-1/2 bg-slate-200 rounded mb-1"></div>
                <div className="h-2.5 w-3/4 bg-slate-300 rounded"></div>
              </div>
            ))}
          </div>
          {/* Chart */}
          <div className="flex-1 bg-slate-50 rounded border border-slate-100 p-2 flex items-end gap-1">
            {[40, 65, 45, 80, 55, 90, 70].map((h, i) => (
              <div
                key={i}
                className="flex-1 rounded-sm"
                style={{
                  height: `${h}%`,
                  background: i === 5 ? '#7c3aed' : '#ede9fe'
                }}
              ></div>
            ))}
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Aria — AI Chat Interface',
    desc: 'A sleek AI chat interface built for an early-stage startup. Features streaming responses, conversation history, prompt suggestions, and a clean minimal UI — integrated with OpenAI API on the frontend.',
    tags: ['React', 'OpenAI API', 'Tailwind CSS'],
    link: '#',
    accent: 'bg-emerald-50 text-emerald-600',
    preview: (
      <div className="p-3 h-full flex flex-col bg-white w-full">
        {/* Header */}
        <div className="flex items-center gap-2 mb-3 pb-2 border-b border-slate-100">
          <div className="w-5 h-5 rounded-full bg-emerald-400 flex items-center justify-center">
            <div className="w-2 h-2 rounded-full bg-white"></div>
          </div>
          <div className="h-2 w-16 bg-slate-200 rounded"></div>
          <div className="ml-auto w-2 h-2 rounded-full bg-emerald-400"></div>
        </div>
        {/* Messages */}
        <div className="flex-1 flex flex-col gap-2">
          <div className="flex gap-2 items-start">
            <div className="w-4 h-4 rounded-full bg-slate-200 shrink-0 mt-0.5"></div>
            <div className="bg-slate-100 rounded-xl rounded-tl-none px-2.5 py-1.5 max-w-[75%]">
              <div className="h-1.5 w-20 bg-slate-300 rounded mb-1"></div>
              <div className="h-1.5 w-14 bg-slate-200 rounded"></div>
            </div>
          </div>
          <div className="flex gap-2 items-start flex-row-reverse">
            <div className="w-4 h-4 rounded-full bg-emerald-400 shrink-0 mt-0.5"></div>
            <div className="bg-emerald-50 border border-emerald-100 rounded-xl rounded-tr-none px-2.5 py-1.5 max-w-[75%]">
              <div className="h-1.5 w-16 bg-emerald-200 rounded mb-1"></div>
              <div className="h-1.5 w-12 bg-emerald-100 rounded"></div>
            </div>
          </div>
          <div className="flex gap-2 items-start">
            <div className="w-4 h-4 rounded-full bg-slate-200 shrink-0 mt-0.5"></div>
            <div className="bg-slate-100 rounded-xl rounded-tl-none px-2.5 py-1.5 max-w-[75%]">
              <div className="h-1.5 w-24 bg-slate-300 rounded mb-1"></div>
              <div className="h-1.5 w-16 bg-slate-200 rounded mb-1"></div>
              <div className="h-1.5 w-10 bg-slate-200 rounded"></div>
            </div>
          </div>
        </div>
        {/* Input */}
        <div className="mt-2 flex items-center gap-1.5 bg-slate-50 border border-slate-200 rounded-lg px-2 py-1.5">
          <div className="flex-1 h-1.5 bg-slate-200 rounded"></div>
          <div className="w-4 h-4 rounded bg-emerald-400 shrink-0"></div>
        </div>
      </div>
    ),
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-xs font-semibold text-brand-500 uppercase tracking-widest">Projects</span>
          <h2 className="font-display text-4xl font-extrabold text-slate-950 mt-2 mb-4">
            Recent work
          </h2>
          <p className="text-slate-500 text-lg max-w-lg mx-auto">
            A few projects that show how I think about design, performance, and user experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <div key={i} className="bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-sm hover:shadow-md transition-shadow group">
              {/* Preview */}
              <div className="h-44 bg-slate-50 border-b border-slate-100 overflow-hidden">
                <div className="w-full h-full">{p.preview}</div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="font-display font-bold text-slate-900 mb-2 text-base">{p.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-4">{p.desc}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {p.tags.map(tag => (
                    <span key={tag} className={`text-xs font-medium px-2.5 py-1 rounded-full ${p.accent}`}>
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={p.link}
                  className="text-sm font-semibold text-brand-500 hover:text-brand-600 transition-colors inline-flex items-center gap-1"
                >
                  {p.link === '#' ? 'Case study coming soon' : 'View live site →'}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}