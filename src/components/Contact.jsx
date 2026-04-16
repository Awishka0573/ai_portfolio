import React, { useState } from 'react';
import { motion } from 'framer-motion';

const MotionBackground = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <motion.div
      animate={{
        scale: [1, 1.2, 1],
        x: [0, 100, 0],
        y: [0, 50, 0],
      }}
      transition={{
        duration: 20,
        repeat: Infinity,
        ease: "linear"
      }}
      className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-cyan-500/10 blur-[120px] rounded-full"
    />
    <motion.div
      animate={{
        scale: [1, 1.3, 1],
        x: [0, -120, 0],
        y: [0, 80, 0],
      }}
      transition={{
        duration: 25,
        repeat: Infinity,
        ease: "linear"
      }}
      className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-500/10 blur-[120px] rounded-full"
    />
  </div>
);

const Contact = () => {
  const [copyStatus, setCopyStatus] = useState('');

  const handleCopy = (text, label) => {
    navigator.clipboard.writeText(text);
    setCopyStatus(label);
    setTimeout(() => setCopyStatus(''), 2000);
  };

  const contactData = [
    {
      id: 'email',
      label: 'Email',
      value: 'awishkaisuru0573@gmail.com',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      action: () => handleCopy('awishkaisuru0573@gmail.com', 'Email'),
      isCopy: true
    },
    {
      id: 'phone',
      label: 'Phone',
      value: '070 122 4436',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      action: () => handleCopy('070 122 4436', 'Phone'),
      isCopy: true
    },
    {
      id: 'github',
      label: 'GitHub',
      value: 'github.com/Awishka0573',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
        </svg>
      ),
      action: () => window.open('https://github.com/Awishka0573', '_blank'),
      isCopy: false
    },
    {
      id: 'linkedin',
      label: 'LinkedIn',
      value: 'linkedin.com/in/awishkaisuru',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      ),
      action: () => window.open('https://linkedin.com/in/awishkaisuru', '_blank'),
      isCopy: false
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-slate-950">
      <MotionBackground />
      
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent" />
      
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        <div className="text-center mb-16">
          <motion.h2 
            variants={itemVariants}
            className="text-cyan-500 font-bold tracking-widest text-sm uppercase mb-4"
          >
            Contact
          </motion.h2>
          <motion.h3 
            variants={itemVariants}
            className="text-3xl md:text-5xl font-extrabold text-white"
          >
            Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Touch</span>
          </motion.h3>
          <motion.p 
            variants={itemVariants}
            className="text-slate-400 mt-4 max-w-xl mx-auto italic"
          >
            I'm always open to new opportunities, collaborations, or just a friendly chat!
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {contactData.map((item) => (
            <motion.div 
              key={item.id}
              variants={itemVariants}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.95 }}
              onClick={item.action}
              className="group relative p-8 rounded-2xl bg-slate-900/40 border border-slate-800/50 hover:border-cyan-500/50 backdrop-blur-xl transition-all duration-300 cursor-pointer overflow-hidden shadow-2xl shadow-cyan-500/5"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10 flex flex-col items-center text-center space-y-4">
                <motion.div 
                  whileHover={{ rotate: [0, -10, 10, -10, 0], transition: { duration: 0.5 } }}
                  className="w-14 h-14 rounded-2xl bg-slate-800/80 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-500 group-hover:text-white group-hover:shadow-[0_0_20px_rgba(6,182,212,0.5)] transition-all duration-300 backdrop-blur-md"
                >
                  {item.icon}
                </motion.div>
                
                <div>
                  <h4 className="text-white font-bold text-lg mb-1 group-hover:text-cyan-400 transition-colors">{item.label}</h4>
                  <p className="text-slate-400 text-sm break-all">{item.value}</p>
                </div>

                {item.isCopy && (
                  <div className={`text-[10px] uppercase tracking-widest font-bold transition-all duration-300 ${copyStatus === item.label ? 'text-green-400' : 'text-slate-600 group-hover:text-slate-400'}`}>
                    {copyStatus === item.label ? 'Copied!' : 'Click to Copy'}
                  </div>
                )}
                
                {!item.isCopy && (
                  <div className="text-[10px] uppercase tracking-widest font-bold text-slate-600 group-hover:text-cyan-400 transition-all duration-300">
                    Click to Visit
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact;
