import { motion, AnimatePresence, type Variants } from 'framer-motion';
import { Github } from 'lucide-react';
import { useState } from 'react';

export default function Projects() {
  const projects = [
    { 
      title: "Fiddo", 
      desc: "Plataforma web para la gestión de usuarios fieles y beneficios.", 
      tech: "Node.js, Express", 
      link: "https://github.com/tobiaschoclin1/mercadoLibre.git" 
    },
    { 
      title: "Farmacia", 
      desc: "Solución integral enfocada en el control de stock y operaciones.", 
      tech: "Java, React, PostgreSQL", 
      link: "https://github.com/tobiaschoclin1/farmacia.git" 
    },
    { 
      title: "Crypto Quant", 
      desc: "Análisis cuantitativo para seguimiento de precios y trading.", 
      tech: "Integración API, Python", 
      link: "https://github.com/tobiaschoclin1/crypto-quant.git" 
    }
  ];

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

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
    },
    hover: { 
      scale: 1.1, // Un poco más de escala para resaltar
      y: -10,
      zIndex: 50,
      transition: { 
        duration: 0.4, 
        ease: "easeOut" 
      }
    },
    exit: {
      scale: 1,
      y: 0,
      zIndex: 1,
      transition: { duration: 0.3 }
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
          {projects.map((p, i) => (
            <motion.a 
              href={p.link} 
              target="_blank" 
              rel="noreferrer" 
              key={i} 
              variants={cardVariants}
              initial="initial"
              whileInView="animate"
              whileHover="hover"
              exit="exit"
              viewport={{ once: true }}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              // Efecto de oscurecer las otras tarjetas
              className={`group relative overflow-hidden bg-[#27293d] p-10 hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-all duration-500 flex flex-col cursor-pointer border border-transparent hover:border-[#FF4A57]/50 
                ${hoveredIndex !== null && hoveredIndex !== i ? 'opacity-20 scale-95 blur-[2px]' : 'opacity-100'}`}
            >
              {/* Video para Fiddo */}
              {p.title === "Fiddo" && (
                <div className="absolute inset-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 flex items-center justify-center">
                  <video 
                    className="w-full h-full object-contain pointer-events-none"
                    autoPlay 
                    muted 
                    loop 
                    playsInline
                  >
                    <source src="/video_fiddo.mov" type="video/quicktime" />
                  </video>
                  {/* Overlay oscuro para legibilidad del texto */}
                  <div className="absolute inset-0 bg-black/40 z-0" />
                </div>
              )}

              {/* Contenido dinámico */}
              <div className="relative z-20 flex flex-col h-full transition-all duration-300 group-hover:scale-95">
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
          ))}
        </AnimatePresence>
      </div>

      {/* Decoración lateral */}
      <div className="absolute right-0 top-1/4 h-1/2 w-px bg-gray-700 hidden lg:block">
        <div className="absolute -left-[5px] top-1/4 w-3 h-3 rounded-full border-2 border-[#FF4A57] bg-[#1e1e2f]"></div>
        <div className="absolute -left-[5px] top-3/4 w-3 h-3 rounded-full bg-[#FF4A57]"></div>
      </div>
    </section>
  );
}