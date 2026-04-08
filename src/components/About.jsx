import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background Ornaments */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent" />
      <div className="absolute top-[10%] -left-20 w-64 h-64 bg-cyan-500/5 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[10%] -right-20 w-80 h-80 bg-blue-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row gap-12 lg:gap-20 items-center">
          
          {/* Visual/Image Collage (Placeholder/Premium feel) */}
          <div className="flex-1 w-full max-w-md md:max-w-none">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden aspect-[4/3] flex items-center justify-center p-8">
                <div className="text-center space-y-6">
                  <div className="w-20 h-20 mx-auto rounded-2xl bg-cyan-500/10 flex items-center justify-center border border-cyan-500/20">
                    <svg className="w-10 h-10 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-xl mb-2">Education & Experience</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      Bridging the gap between academic excellence and real-world industrial expertise.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -right-6 bg-slate-900/90 border border-slate-700 backdrop-blur-md p-6 rounded-2xl shadow-2xl transition-transform hover:-translate-y-2">
                <p className="text-cyan-400 font-bold text-3xl mb-1">01+</p>
                <p className="text-slate-400 text-xs font-bold uppercase tracking-wider">Years Experience</p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 space-y-8">
            <div className="space-y-4">
              <h2 className="text-cyan-500 font-bold tracking-widest text-sm uppercase">About Me</h2>
              <h3 className="text-3xl md:text-4xl font-extrabold text-white leading-tight">
                Crafting Scalable <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 text-gradient">Digital Solutions</span>
              </h3>
            </div>

            <div className="prose prose-invert max-w-none text-slate-400 text-lg leading-relaxed space-y-6">
              <p>
                I completed my Higher National Diploma in Information Technology (HNDIT) at SLIATE Kegalle, along with a 6-month internship at Oxymai Pvt Ltd where I gained hands-on experience in real-world web development projects.
              </p>
              <p>
                I specialize in full-stack development using modern technologies such as 
                <span className="text-white font-medium"> React (Vite), Next.js, Node.js, and Firebase</span>. 
                I am passionate about building scalable, high-performance applications and continuously improving my technical skills.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="p-4 rounded-xl bg-slate-800/30 border border-slate-700/50 hover:border-cyan-500/30 transition-colors">
                <p className="text-white font-bold mb-1 italic">SLIATE Kegalle</p>
                <p className="text-slate-500 text-sm">HNDIT Graduate</p>
              </div>
              <div className="p-4 rounded-xl bg-slate-800/30 border border-slate-700/50 hover:border-cyan-500/30 transition-colors">
                <p className="text-white font-bold mb-1 italic">Oxymai Pvt Ltd</p>
                <p className="text-slate-500 text-sm">Web Dev Internship</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
