import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-slate-950">
      {/* Dynamic Background Atmosphere */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 45, 0],
            opacity: [0.03, 0.08, 0.03],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-[10%] -left-20 w-96 h-96 bg-cyan-500 blur-[100px] rounded-full"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -45, 0],
            opacity: [0.03, 0.06, 0.03],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute bottom-[10%] -right-20 w-[30rem] h-[30rem] bg-blue-500 blur-[120px] rounded-full"
        />
      </div>

      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="flex flex-col md:flex-row gap-12 lg:gap-20 items-center"
        >
          
          {/* Visual/Image Collage */}
          <motion.div 
            variants={{
              hidden: { x: -50, opacity: 0 },
              visible: { x: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } }
            }}
            className="flex-1 w-full max-w-md md:max-w-none"
          >
            <div className="relative group">
              <motion.div 
                animate={{
                  opacity: [0.2, 0.4, 0.2],
                }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -inset-2 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"
              ></motion.div>
              
              <div className="relative bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden aspect-[4/3] flex items-center justify-center p-8 backdrop-blur-sm">
                <div className="text-center space-y-6">
                  <motion.div 
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-20 h-20 mx-auto rounded-2xl bg-cyan-500/10 flex items-center justify-center border border-cyan-500/20 shadow-inner"
                  >
                    <svg className="w-10 h-10 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                    </svg>
                  </motion.div>
                  <motion.div variants={itemVariants}>
                    <h3 className="text-white font-bold text-2xl mb-2">Education & Experience</h3>
                    <p className="text-slate-400 text-sm leading-relaxed max-w-xs mx-auto">
                      Bridging the gap between academic excellence and real-world industrial expertise.
                    </p>
                  </motion.div>
                </div>
              </div>
              
              {/* Floating Badge */}
              <motion.div 
                animate={{
                  y: [0, -15, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute -bottom-6 -right-6 bg-slate-900/90 border border-slate-700 backdrop-blur-xl p-6 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] z-20"
              >
                <p className="text-cyan-400 font-bold text-4xl mb-1 flex items-center gap-1">
                  01<span className="text-blue-500">+</span>
                </p>
                <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">Years Experience</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Content */}
          <div className="flex-1 space-y-8">
            <div className="space-y-4">
              <motion.h2 variants={itemVariants} className="text-cyan-500 font-bold tracking-widest text-sm uppercase">About Me</motion.h2>
              <motion.h3 variants={itemVariants} className="text-3xl md:text-5xl font-extrabold text-white leading-tight">
                Crafting Scalable <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Digital Solutions</span>
              </motion.h3>
            </div>

            <motion.div variants={itemVariants} className="prose prose-invert max-w-none text-slate-400 text-lg leading-relaxed space-y-6">
              <p>
                I completed my Higher National Diploma in Information Technology (HNDIT) at SLIATE Kegalle, along with a 6-month internship at Oxymai Pvt Ltd where I gained hands-on experience in real-world web development projects.
              </p>
              <p>
                I specialize in full-stack development using modern technologies such as 
                <span className="text-white font-medium"> React (Vite), Next.js, Node.js, and Firebase</span>. 
                I am passionate about building scalable, high-performance applications and continuously improving my technical skills.
              </p>
            </motion.div>

            <motion.div variants={containerVariants} className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <motion.div 
                variants={itemVariants}
                whileHover={{ scale: 1.02, backgroundColor: "rgba(30, 41, 59, 0.5)" }}
                className="p-4 rounded-2xl bg-slate-800/20 border border-slate-700/50 hover:border-cyan-500/50 transition-all cursor-default flex items-center gap-4"
              >
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center overflow-hidden border border-slate-700/50 p-1">
                  <img src="/sliate_logo.png" alt="SLIATE" className="w-full h-full object-contain" />
                </div>
                <div>
                  <p className="text-white font-bold label-text">SLIATE Kegalle</p>
                  <p className="text-slate-500 text-xs">HNDIT Graduate</p>
                </div>
              </motion.div>
              <motion.div 
                variants={itemVariants}
                whileHover={{ scale: 1.02, backgroundColor: "rgba(30, 41, 59, 0.5)" }}
                className="p-4 rounded-2xl bg-slate-800/20 border border-slate-700/50 hover:border-cyan-500/50 transition-all cursor-default flex items-center gap-4"
              >
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center overflow-hidden border border-slate-700/50 p-1">
                  <img src="/oxymai_logo.png" alt="Oxymai" className="w-full h-full object-contain" />
                </div>
                <div>
                  <p className="text-white font-bold label-text">Oxymai Pvt Ltd</p>
                  <p className="text-slate-500 text-xs">Web Dev Internship</p>
                </div>
              </motion.div>
            </motion.div>
          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default About;
