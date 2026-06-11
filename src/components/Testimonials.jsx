const testimonials = [
  {
    quote: "We cut our weekly planning meeting from 2 hours to 20 minutes. Taskflow just made the chaos disappear.",
    name: "Priya Mehta",
    role: "Head of Product, Razorpay",
    initials: "PM",
    color: "bg-violet-400",
  },
  {
    quote: "Every other tool felt like it was built for enterprise. Taskflow felt like it was built for us.",
    name: "Arjun Kapoor",
    role: "Co-founder, Growthly",
    initials: "AK",
    color: "bg-emerald-400",
  },
  {
    quote: "Our engineers stopped complaining about project management. That alone is worth the subscription.",
    name: "Sarah Lin",
    role: "CTO, Shipfast",
    initials: "SL",
    color: "bg-amber-400",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 px-6 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-xs font-semibold text-brand-500 uppercase tracking-widest">Testimonials</span>
          <h2 className="font-display text-4xl font-extrabold text-slate-950 mt-2">
            Teams love using it
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, s) => (
                  <svg key={s} width="14" height="14" viewBox="0 0 14 14" fill="#f59e0b">
                    <path d="M7 1l1.5 4H13l-3.5 2.5 1.5 4L7 9 3 11.5l1.5-4L1 5h4.5z"/>
                  </svg>
                ))}
              </div>

              <p className="text-slate-700 text-sm leading-relaxed mb-6">"{t.quote}"</p>

              <div className="flex items-center gap-3">
                <div className={`w-9 h-9 rounded-full ${t.color} flex items-center justify-center text-white text-xs font-bold`}>
                  {t.initials}
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900">{t.name}</p>
                  <p className="text-xs text-slate-400">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
