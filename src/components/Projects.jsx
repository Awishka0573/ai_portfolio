import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: "EcoSmart Dashboard",
    description: "A real-time energy monitoring dashboard with advanced data visualization and predictive analytics for smart homes.",
    tech: ["React", "Tailwind", "Chart.js", "Firebase"],
    live: "#",
    github: "#",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Nova Portfolio",
    description: "A premium, motion-focused developer portfolio template with glassmorphism and high-performance physics-based animations.",
    tech: ["React", "Framer Motion", "Vite"],
    live: "#",
    github: "#",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "CloudVault AI",
    description: "Secure, AI-powered document management system with automated tagging, search, and end-to-end encryption features.",
    tech: ["Next.js", "Node.js", "OpenAI", "Supabase"],
    live: "#",
    github: "#",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800"
  }
];

const Projects = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      }
    }
  };

  const cardVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-slate-950">
      {/* Atmosphere Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            opacity: [0.03, 0.05, 0.03],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[20%] right-[-10%] w-[40rem] h-[40rem] bg-cyan-500 blur-[120px] rounded-full"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -50, 0],
            opacity: [0.03, 0.05, 0.03],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-[20%] left-[-10%] w-[35rem] h-[35rem] bg-blue-500 blur-[120px] rounded-full"
        />
      </div>

      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-cyan-500 font-bold tracking-widest text-sm uppercase mb-4"
          >
            Portfolio
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-extrabold text-white"
          >
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Projects</span>
          </motion.h3>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 mt-4 max-w-xl mx-auto"
          >
            A collection of projects that demonstrate my technical skills and passion for building innovative digital solutions.
          </motion.p>
        </div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              variants={cardVariants}
              whileHover={{ y: -10 }}
              className="group relative bg-slate-900/40 border border-slate-800/50 rounded-3xl overflow-hidden backdrop-blur-xl transition-all duration-500 hover:border-cyan-500/50 hover:shadow-2xl hover:shadow-cyan-500/10"
            >
              {/* Image Container */}
              <div className="relative h-56 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent z-10 opacity-60" />
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Hover Links Overlay */}
                <div className="absolute inset-0 z-20 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm bg-slate-950/40">
                  <a 
                    href={project.github} 
                    className="w-12 h-12 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center text-white hover:bg-cyan-500 hover:border-cyan-500 transition-all duration-300"
                    title="View GitHub"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
                  </a>
                  <a 
                    href={project.live} 
                    className="w-12 h-12 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center text-white hover:bg-cyan-500 hover:border-cyan-500 transition-all duration-300"
                    title="Live Demo"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
                  </a>
                </div>
              </div>

              {/* Content Container */}
              <div className="p-8">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tag, i) => (
                    <span 
                      key={i} 
                      className="px-3 py-1 text-[10px] font-bold uppercase tracking-widest bg-slate-800 text-cyan-400 rounded-full border border-slate-700/50 group-hover:border-cyan-500/30 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <h4 className="text-white font-bold text-xl mb-3 group-hover:text-cyan-400 transition-colors">{project.title}</h4>
                <p className="text-slate-400 text-sm leading-relaxed mb-6 line-clamp-3">
                  {project.description}
                </p>
                
                <div className="flex items-center justify-between pt-4 border-t border-slate-800/50">
                   <span className="text-slate-500 text-xs font-medium">Personal Project</span>
                   <motion.div 
                     whileHover={{ x: 5 }}
                     className="text-cyan-400 text-xs font-bold uppercase tracking-widest flex items-center gap-2 cursor-pointer"
                   >
                     View Details
                     <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
                   </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
