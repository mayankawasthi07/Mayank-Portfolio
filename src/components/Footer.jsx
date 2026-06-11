export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-12">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-7 h-7 rounded-lg bg-brand-500 flex items-center justify-center">
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                  <path d="M3 4h10M3 8h7M3 12h4" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <span className="font-display font-bold text-white text-base">Taskflow</span>
            </div>
            <p className="text-sm leading-relaxed text-slate-500">
              The project management tool built for teams that move fast.
            </p>
          </div>

          {[
            {
              title: 'Product',
              links: ['Features', 'Pricing', 'Changelog', 'Roadmap'],
            },
            {
              title: 'Company',
              links: ['About', 'Blog', 'Careers', 'Press'],
            },
            {
              title: 'Support',
              links: ['Docs', 'Community', 'Status', 'Contact'],
            },
          ].map((col) => (
            <div key={col.title}>
              <p className="text-xs font-semibold text-slate-300 uppercase tracking-widest mb-4">{col.title}</p>
              <ul className="space-y-2.5">
                {col.links.map(link => (
                  <li key={link}>
                    <a href="/" className="text-sm hover:text-slate-200 transition-colors">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-600">© 2025 Taskflow, Inc. All rights reserved.</p>
          <div className="flex gap-6 text-xs">
            <a href="/" className="hover:text-slate-300 transition-colors">Privacy</a>
            <a href="/" className="hover:text-slate-300 transition-colors">Terms</a>
            <a href="/" className="hover:text-slate-300 transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
