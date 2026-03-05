import { motion, AnimatePresence, type Variants } from 'framer-motion';
import { Github } from 'lucide-react';
import { useState } from 'react';

export default function Projects() {
  const projects = [
    { 
      title: "Fiddo", 
      desc: "Plataforma web para la gestión de usuarios fieles y beneficios.", 
      tech: "Node.js, Express", 
      link: "https://github.com/tobiaschoclin1/mercadoLibre.git",
      videoMp4: "/video_fiddo.mp4",
      videoMov: "/video_fiddo.mov"
    },
    { 
      title: "Farmacia", 
      desc: "Solución integral enfocada en el control de stock y operaciones.", 
      tech: "Java, React, PostgreSQL", 
      link: "https://github.com/tobiaschoclin1/farmacia.git",
      videoMp4: "/video_farmacia.mp4",
      videoMov: "/video_farmacia.mov"
    },
    { 
      title: "Crypto Quant", 
      desc: "Análisis cuantitativo para seguimiento de precios y trading.", 
      tech: "Integración API, Python", 
      link: "https://github.com/tobiaschoclin1/crypto-quant.git",
      videoMp4: "/video_crypto.mp4",
      videoMov: "/video_crypto.mov"
    }
  ];

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const isAnyProjectActive = hoveredIndex !== null;

  const cardVariants: Variants = {
    initial: { 
      opacity: 0, 
      y: 30,
      scale: 1,
      zIndex: 1
    },
    animate: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="projects" className="relative py-24">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-[#FF4A57] text-5xl md:text-6xl font-bold mb-16"
      >
        Proyectos
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-0">
        <AnimatePresence>
          {projects.map((p, i) => {
            const isActive = hoveredIndex === i;
            const expandsLeftOnDesktop = i % 3 === 2;

            return (
              <div key={i} className="relative min-h-[340px]">
                <motion.a
                  href={p.link}
                  target="_blank"
                  rel="noreferrer"
                  variants={cardVariants}
                  initial="initial"
                  whileInView="animate"
                  whileHover={{
                    scale: isActive ? 1.02 : 1.03,
                    y: -10,
                    transition: { duration: 0.25, ease: 'easeOut' }
                  }}
                  viewport={{ once: true }}
                  onMouseEnter={() => setHoveredIndex(i)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className={`group relative w-full h-full overflow-hidden bg-[#27293d] p-10 transition-all duration-300 flex flex-col cursor-pointer border border-transparent hover:border-[#FF4A57]/50
                    ${isAnyProjectActive && !isActive ? 'opacity-20 scale-95 blur-sm pointer-events-none' : 'opacity-100'}
                    ${isActive ? 'shadow-[0_30px_80px_rgba(0,0,0,0.65)] lg:absolute lg:top-0 lg:w-[calc(200%+2rem)] lg:min-h-[340px] lg:z-50' : 'hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)]'}
                    ${isActive && expandsLeftOnDesktop ? 'lg:right-0' : ''}
                    ${isActive && !expandsLeftOnDesktop ? 'lg:left-0' : ''}`}
                >
                  {isActive && (
                    <div className="absolute inset-0 w-full h-full transition-opacity duration-300 z-10 opacity-100">
                      <video
                        className="w-full h-full object-cover pointer-events-none"
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="auto"
                      >
                        <source src={p.videoMp4} type="video/mp4" />
                        <source src={p.videoMov} type="video/quicktime" />
                      </video>
                      <div className="absolute inset-0 bg-black/45 z-0" />
                    </div>
                  )}

                  <div className={`relative z-20 flex flex-col h-full transition-all duration-300 ${isActive ? 'lg:scale-95' : 'group-hover:scale-95'}`}>
                    <div className="flex flex-col group-hover:items-center transition-all duration-500">
                      <div className="w-14 h-14 mb-8 bg-[#1e1e2f] border border-gray-700 rounded-full flex items-center justify-center group-hover:border-[#FF4A57] transition-colors flex-shrink-0">
                        <span className="text-[#FF4A57] text-xl font-bold">{i + 1}</span>
                      </div>

                      <div className="flex flex-col group-hover:text-center">
                        <h3 className="text-2xl font-bold mb-4 group-hover:text-[#FF4A57] transition-colors">{p.title}</h3>
                        <p className="text-gray-400 text-base md:text-lg mb-8 leading-relaxed flex-grow group-hover:text-white">
                          {p.desc}
                        </p>
                      </div>
                    </div>

                    <div className="mt-auto flex flex-col gap-4 group-hover:items-center">
                      <span className="text-[#FF4A57] text-xs md:text-sm font-bold tracking-widest uppercase">
                        {p.tech}
                      </span>
                      <div className="text-white text-sm font-semibold flex items-center gap-2">
                        <Github size={18} /> <span>Ver Repositorio</span>
                      </div>
                    </div>
                  </div>
                </motion.a>
              </div>
            );
          })}
        </AnimatePresence>
      </div>
    </section>
  );
}