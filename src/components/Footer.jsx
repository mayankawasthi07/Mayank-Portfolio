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
              <span className="font-display font-bold text-white text-base">Mayank Awasthi</span>
            </div>
            <p className="text-sm leading-relaxed text-slate-500">
              Frontend Developer building clean, fast, and responsive web experiences.
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold text-slate-300 uppercase tracking-widest mb-4">Navigate</p>
            <ul className="space-y-2.5">
              <li><a href="#services" className="text-sm hover:text-slate-200 transition-colors">Services</a></li>
              <li><a href="#projects" className="text-sm hover:text-slate-200 transition-colors">Projects</a></li>
              <li><a href="#contact" className="text-sm hover:text-slate-200 transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold text-slate-300 uppercase tracking-widest mb-4">Connect</p>
            <ul className="space-y-2.5">
              <li><a href="https://www.linkedin.com/in/mayankawasthi07/" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-slate-200 transition-colors">LinkedIn</a></li>
              <li><a href="https://github.com/mayankawasthi07" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-slate-200 transition-colors">GitHub</a></li>
              {/* <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-slate-200 transition-colors">Instagram</a></li> */}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold text-slate-300 uppercase tracking-widest mb-4">Services</p>
            <ul className="space-y-2.5">
              <li><a href="#services" className="text-sm hover:text-slate-200 transition-colors">Landing Pages</a></li>
              <li><a href="#services" className="text-sm hover:text-slate-200 transition-colors">UI Development</a></li>
              <li><a href="#services" className="text-sm hover:text-slate-200 transition-colors">Redesigns</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-600">© 2025 Mayank Awasthi. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}