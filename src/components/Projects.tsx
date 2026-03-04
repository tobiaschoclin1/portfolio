import { motion } from 'framer-motion';
import { Github } from 'lucide-react';

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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((p, i) => (
          <motion.a 
            href={p.link} 
            target="_blank" 
            rel="noreferrer" 
            key={i} 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="group relative overflow-hidden bg-[#27293d] p-10 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(255,74,87,0.15)] transition-all duration-300 flex flex-col cursor-pointer border border-transparent hover:border-gray-700"
          >
            {/* Video para Fiddo corregido sin comentarios internos */}
            {p.title === "Fiddo" && (
              <video 
                src="/video_fiddo.mov"
                className="absolute inset-0 w-full h-full object-contain opacity-0 group-hover:opacity-40 transition-opacity duration-500 pointer-events-none z-0"
                autoPlay 
                muted 
                loop 
                playsInline
              />
            )}

            <div className="relative z-10 flex flex-col h-full">
              <div className="w-14 h-14 mb-8 bg-[#1e1e2f] border border-gray-700 rounded-full flex items-center justify-center group-hover:border-[#FF4A57] transition-colors">
                <span className="text-[#FF4A57] text-xl font-bold">{i + 1}</span>
              </div>
              
              <h3 className="text-2xl font-bold mb-4">{p.title}</h3>
              <p className="text-gray-400 text-base md:text-lg mb-8 leading-relaxed flex-grow">
                {p.desc}
              </p>
              
              <div className="mt-auto flex flex-col gap-4">
                <span className="text-[#FF4A57] text-xs md:text-sm font-bold tracking-widest uppercase">
                  {p.tech}
                </span>
                <span className="text-white text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-2">
                  <Github size={18} /> Ver Repositorio
                </span>
              </div>
            </div>
          </motion.a>
        ))}
      </div>

      <div className="absolute right-0 top-1/4 h-1/2 w-px bg-gray-700 hidden lg:block">
        <div className="absolute -left-[5px] top-1/4 w-3 h-3 rounded-full border-2 border-[#FF4A57] bg-[#1e1e2f]"></div>
        <div className="absolute -left-[5px] top-3/4 w-3 h-3 rounded-full bg-[#FF4A57]"></div>
      </div>
    </section>
  );
}