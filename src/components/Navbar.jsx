import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed w-full top-0 z-50 backdrop-blur-md bg-slate-950/80 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3 cursor-pointer group">
            {/* Logo */}
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center text-white font-bold text-xl group-hover:shadow-[0_0_20px_rgba(6,182,212,0.5)] transition-all duration-300 shadow-lg shadow-cyan-500/20">
              AI
            </div>
            {/* Logo Name */}
            <span className="text-white font-bold text-xl tracking-wide group-hover:text-cyan-400 transition-colors duration-300">
              Awishka Isuru
            </span>
          </div>

          <div className="hidden sm:block">
            <div className="ml-10 flex items-center space-x-6">
              <a href="#about" className="text-slate-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors hover:bg-white/5">About</a>
              <a href="#contact" className="text-slate-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors hover:bg-white/5">Contact</a>
              <a href="#cv" className="bg-cyan-600 hover:bg-cyan-500 text-white px-5 py-2 rounded-lg text-sm font-medium transition-all shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 hover:scale-105 active:scale-95">CV</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
