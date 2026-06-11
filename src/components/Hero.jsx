export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Badge */}
        <div className="flex justify-center mb-6">
          <span className="inline-flex items-center gap-2 bg-brand-50 text-brand-700 text-xs font-semibold px-3 py-1.5 rounded-full border border-brand-100">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-500 animate-pulse"></span>
            Used by 3,000+ teams worldwide
          </span>
        </div>

        {/* Headline */}
        <h1 className="font-display text-5xl md:text-6xl font-extrabold text-slate-950 text-center leading-tight max-w-3xl mx-auto mb-6">
          Ship projects faster,{' '}
          <span className="text-brand-500">without the chaos</span>
        </h1>

        <p className="text-lg text-slate-500 text-center max-w-xl mx-auto mb-10 leading-relaxed">
          Taskflow gives your team one place to plan, track, and ship — without the spreadsheet mess or the bloated tools nobody actually uses.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-16">
          <a
            href="#pricing"
            className="w-full sm:w-auto bg-brand-500 text-white font-semibold px-6 py-3 rounded-xl hover:bg-brand-600 transition-all shadow-lg shadow-brand-500/25 text-center"
          >
            Start for free — no card needed
          </a>
          <a
            href="#features"
            className="w-full sm:w-auto border border-slate-200 text-slate-700 font-medium px-6 py-3 rounded-xl hover:border-slate-300 hover:bg-slate-50 transition-all text-center"
          >
            See how it works →
          </a>
        </div>

        {/* Dashboard mockup */}
        <div className="relative max-w-4xl mx-auto">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/50 rounded-2xl z-10 pointer-events-none" style={{top: '60%'}}></div>
          <div className="rounded-2xl border border-slate-200 shadow-2xl shadow-slate-200/60 overflow-hidden bg-slate-50">
            {/* Fake browser bar */}
            <div className="bg-slate-100 px-4 py-3 flex items-center gap-2 border-b border-slate-200">
              <div className="w-3 h-3 rounded-full bg-red-400"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
              <div className="w-3 h-3 rounded-full bg-green-400"></div>
              <div className="flex-1 ml-3 bg-white rounded-md px-3 py-1 text-xs text-slate-400">app.taskflow.io/dashboard</div>
            </div>
            {/* Fake dashboard */}
            <div className="p-6 bg-white">
              <div className="flex items-center justify-between mb-5">
                <div>
                  <div className="h-5 w-32 bg-slate-900 rounded font-display font-bold text-sm flex items-center px-1 text-white">Q3 Roadmap</div>
                </div>
                <div className="flex gap-2">
                  <div className="h-7 w-16 bg-brand-50 rounded-lg border border-brand-100"></div>
                  <div className="h-7 w-20 bg-brand-500 rounded-lg"></div>
                </div>
              </div>
              {/* Kanban columns */}
              <div className="grid grid-cols-3 gap-4">
                {['To Do', 'In Progress', 'Done'].map((col, ci) => (
                  <div key={col} className="bg-slate-50 rounded-xl p-3">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xs font-semibold text-slate-500 uppercase tracking-wide">{col}</span>
                      <span className="text-xs bg-slate-200 text-slate-500 rounded-full w-4 h-4 flex items-center justify-center">{3 - ci}</span>
                    </div>
                    {[...Array(3 - ci)].map((_, i) => (
                      <div key={i} className="bg-white rounded-lg p-3 mb-2 border border-slate-100 shadow-sm">
                        <div className={`h-2 rounded mb-2 ${i === 0 ? 'bg-brand-200 w-4/5' : i === 1 ? 'bg-slate-200 w-3/5' : 'bg-slate-200 w-2/3'}`}></div>
                        <div className="h-2 bg-slate-100 rounded w-1/2 mb-3"></div>
                        <div className="flex items-center justify-between">
                          <div className="flex -space-x-1">
                            {[...Array(2)].map((_, a) => (
                              <div key={a} className={`w-5 h-5 rounded-full border-2 border-white ${a === 0 ? 'bg-violet-400' : 'bg-emerald-400'}`}></div>
                            ))}
                          </div>
                          <div className={`text-xs px-2 py-0.5 rounded-full font-medium ${ci === 0 ? 'bg-red-50 text-red-500' : ci === 1 ? 'bg-amber-50 text-amber-600' : 'bg-emerald-50 text-emerald-600'}`}>
                            {ci === 0 ? 'High' : ci === 1 ? 'Medium' : 'Done'}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
