import React from 'react';
export default function Contact() {
    return (
      <section id="contact" className="py-24 px-6 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <span className="text-xs font-semibold text-brand-500 uppercase tracking-widest">Get in touch</span>
          <h2 className="font-display text-4xl font-extrabold text-slate-950 mt-2 mb-4">
            Let's build something together
          </h2>
          <p className="text-slate-500 text-lg mb-10 max-w-xl mx-auto">
            Have a project in mind, or just want to chat about your idea? I'm currently available for freelance work — drop me a message.
          </p>
  
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="mailto:mayankawasthi2001@gmail.com"
              className="w-full sm:w-auto bg-brand-500 text-white font-semibold px-6 py-3 rounded-xl hover:bg-brand-600 transition-all shadow-lg shadow-brand-500/25 text-center"
            >
              Email me
            </a>
            <a
              href="https://www.linkedin.com/in/mayankawasthi07/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto border border-slate-200 text-slate-700 font-medium px-6 py-3 rounded-xl hover:border-slate-300 hover:bg-slate-50 transition-all text-center"
            >
              Connect on LinkedIn
            </a>
          </div>
        </div>
      </section>
    );
  }