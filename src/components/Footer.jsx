import React from 'react';

const Footer = () => {
  return (
    <footer className="relative mt-20 pb-12 overflow-hidden">
      {/* Decorative Top Border with Glow */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[2px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent blur-sm" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start text-center md:text-left">
          
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="flex items-center justify-center md:justify-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-cyan-500/20">
                AI
              </div>
              <span className="text-white font-bold text-xl tracking-wide">Awishka Isuru</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs mx-auto md:mx-0">
              Building modern, scalable, and high-performance digital experiences with precision and passion.
            </p>
          </div>

          {/* Quick Links Column */}
          <div className="space-y-4">
            <h4 className="text-white font-bold text-sm uppercase tracking-widest italic">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              <a href="#home" className="text-slate-400 hover:text-cyan-400 transition-colors text-sm">Home</a>
              <a href="#about" className="text-slate-400 hover:text-cyan-400 transition-colors text-sm">About</a>
              <a href="#contact" className="text-slate-400 hover:text-cyan-400 transition-colors text-sm">Contact</a>
            </nav>
          </div>

          {/* Connect Column */}
          <div className="space-y-6">
            <h4 className="text-white font-bold text-sm uppercase tracking-widest italic">Connect</h4>
            <div className="flex items-center justify-center md:justify-end gap-4">
              <a href="https://github.com/Awishka0573" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:border-cyan-500/50 hover:text-cyan-400 transition-all duration-300">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
              </a>
              <a href="https://linkedin.com/in/awishkaisuru" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:border-cyan-500/50 hover:text-cyan-400 transition-all duration-300">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-slate-900 flex flex-col md:flex-row items-center justify-between gap-4 text-center">
          <p className="text-slate-500 text-xs tracking-widest font-medium uppercase font-sans">
            &copy; {new Date().getFullYear()} Awishka Isuru. <span className="text-cyan-500/50">Designed with passion.</span>
          </p>
          <div className="flex items-center gap-6 text-[10px] uppercase tracking-[0.2em] font-bold text-slate-600">
            <span className="hover:text-slate-400 cursor-default transition-colors">Privacy Policy</span>
            <span className="hover:text-slate-400 cursor-default transition-colors">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
