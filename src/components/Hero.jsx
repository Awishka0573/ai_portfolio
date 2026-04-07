import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[calc(100vh-4rem)] flex items-center pt-8 pb-12 overflow-hidden">
      {/* Background Glow Effect */}
      <div className="absolute top-1/4 right-0 -z-10 w-[500px] h-[500px] bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 -z-10 w-[400px] h-[400px] bg-blue-500/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 text-white">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-16">
          
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left space-y-8 animate-in fade-in slide-in-from-left-8 duration-700">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              Available for new projects
            </div>

            <h1 className="text-3xl md:text-5xl font-extrabold leading-tight tracking-tight">
              I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Antigravity</span>
              <br />
              <span className="text-white">AI Engineer & Full-Stack Developer</span>
            </h1>

            <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Specializing in building state-of-the-art AI-driven applications and premium digital experiences. I turn complex problems into sleek, efficient, and beautiful web solutions.
            </p>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4">
              <button className="px-8 py-4 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-bold transition-all shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:-translate-y-1 active:translate-y-0">
                View My Work
              </button>
              <button className="px-8 py-4 rounded-xl border border-slate-700 bg-slate-900/50 hover:bg-slate-800 text-white font-bold transition-all backdrop-blur-sm hover:-translate-y-1 active:translate-y-0">
                Let's Talk
              </button>
            </div>

            {/* Social Stats/Briefs */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-slate-800">
              <div>
                <h4 className="text-white font-bold text-2xl">4+</h4>
                <p className="text-slate-500 text-sm">Years Exp.</p>
              </div>
              <div>
                <h4 className="text-white font-bold text-2xl">50+</h4>
                <p className="text-slate-500 text-sm">Projects</p>
              </div>
              <div>
                <h4 className="text-white font-bold text-2xl">100%</h4>
                <p className="text-slate-500 text-sm">Happy Clients</p>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="flex-1 relative animate-in fade-in slide-in-from-right-8 duration-700 delay-200">
            <div className="relative z-10 w-full max-w-[450px] aspect-square mx-auto rounded-3xl overflow-hidden border-2 border-slate-800 group">
              <img 
                src="/hero_avatar.png" 
                alt="Portrait" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-cyan-500/20 blur-3xl rounded-full animate-pulse -z-10" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-500/20 blur-3xl rounded-full -z-10" />
            
            {/* Tech Badge */}
            <div className="absolute right-0 bottom-10 bg-slate-900/90 border border-slate-700 backdrop-blur-md p-4 rounded-2xl shadow-2xl animate-bounce hover:animate-none group-hover:border-cyan-500/50 transition-colors z-20">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-cyan-500 flex items-center justify-center text-white">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                </div>
                <div>
                  <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest leading-none">Speed</p>
                  <p className="text-white font-bold whitespace-nowrap">Turbo Performance</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
