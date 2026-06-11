const companies = ['Notion', 'Linear', 'Vercel', 'Figma', 'Stripe', 'Loom'];

export default function SocialProof() {
  return (
    <section className="py-12 bg-slate-50 border-y border-slate-100">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-center text-xs font-semibold text-slate-400 uppercase tracking-widest mb-8">
          Trusted by teams at
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {companies.map(name => (
            <span key={name} className="text-slate-300 font-display font-bold text-lg hover:text-slate-400 transition-colors cursor-default select-none">
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
