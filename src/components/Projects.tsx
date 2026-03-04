import { motion, AnimatePresence, type Variants } from 'framer-motion';
import { Github } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

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
  const fiddoVideoRef = useRef<HTMLVideoElement>(null);
  const farmaciaVideoRef = useRef<HTMLVideoElement>(null);
  const cryptoVideoRef = useRef<HTMLVideoElement>(null);
  const fiddoIndex = projects.findIndex((project) => project.title === 'Fiddo');
  const farmaciaIndex = projects.findIndex((project) => project.title === 'Farmacia');
  const cryptoIndex = projects.findIndex((project) => project.title === 'Crypto Quant');
  const isFiddoHovered = hoveredIndex === fiddoIndex;
  const isFarmaciaHovered = hoveredIndex === farmaciaIndex;
  const isCryptoHovered = hoveredIndex === cryptoIndex;

  useEffect(() => {
    if (isFiddoHovered && fiddoVideoRef.current) {
      fiddoVideoRef.current.currentTime = 0;
      fiddoVideoRef.current.play().catch(() => {});
    }
    if (isFarmaciaHovered && farmaciaVideoRef.current) {
      farmaciaVideoRef.current.currentTime = 0;
      farmaciaVideoRef.current.play().catch(() => {});
    }
    if (isCryptoHovered && cryptoVideoRef.current) {
      cryptoVideoRef.current.currentTime = 0;
      cryptoVideoRef.current.play().catch(() => {});
    }
  }, [isFiddoHovered, isFarmaciaHovered, isCryptoHovered]);

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
            const isFiddo = p.title === 'Fiddo';
            const isFarmacia = p.title === 'Farmacia';
            const isCrypto = p.title === 'Crypto Quant';
            const fiddoActive = isFiddo && hoveredIndex === i;
            const farmaciaActive = isFarmacia && hoveredIndex === i;
            const cryptoActive = isCrypto && hoveredIndex === i;
            const isAnyProjectActive = isFiddoHovered || isFarmaciaHovered || isCryptoHovered;

            return (
            <motion.a 
              href={p.link} 
              target="_blank" 
              rel="noreferrer" 
              key={i} 
              variants={cardVariants}
              initial="initial"
              whileInView="animate"
              whileHover={{
                scale: fiddoActive || farmaciaActive || cryptoActive ? 1.02 : 1.03,
                y: -8,
                transition: { duration: 0.3, ease: 'easeOut' }
              }}
              viewport={{ once: true }}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={{ zIndex: fiddoActive || farmaciaActive || cryptoActive ? 60 : 10 }}
              className={`group relative overflow-hidden bg-[#27293d] p-10 transition-all duration-500 flex flex-col cursor-pointer border border-transparent hover:border-[#FF4A57]/50
                ${isAnyProjectActive && !fiddoActive && !farmaciaActive && !cryptoActive ? 'opacity-25 scale-95 blur-sm' : 'opacity-100'}
                ${fiddoActive || farmaciaActive || cryptoActive ? 'lg:col-span-2 lg:min-h-[320px] shadow-[0_30px_80px_rgba(0,0,0,0.65)]' : 'hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)]'}`}
            >
              {/* Video para Fiddo */}
              {isFiddo && fiddoActive && (
                <div className="absolute inset-0 w-full h-full transition-opacity duration-500 z-10 opacity-100">
                  <video
                    ref={fiddoVideoRef}
                    className="w-full h-full object-cover pointer-events-none"
                    muted
                    loop
                    playsInline
                    preload="auto"
                  >
                    <source src="/video_fiddo.mp4" type="video/mp4" />
                    <source src="/video_fiddo.mov" type="video/quicktime" />
                  </video>
                  {/* Overlay oscuro para legibilidad del texto */}
                  <div className="absolute inset-0 bg-black/40 z-0" />
                </div>
              )}

              {/* Video para Farmacia */}
              {isFarmacia && farmaciaActive && (
                <div className="absolute inset-0 w-full h-full transition-opacity duration-500 z-10 opacity-100">
                  <video
                    ref={farmaciaVideoRef}
                    className="w-full h-full object-cover pointer-events-none"
                    muted
                    loop
                    playsInline
                    preload="auto"
                  >
                    <source src="/video_farmacia.mp4" type="video/mp4" />
                    <source src="/video_farmacia.mov" type="video/quicktime" />
                  </video>
                  {/* Overlay oscuro para legibilidad del texto */}
                  <div className="absolute inset-0 bg-black/40 z-0" />
                </div>
              )}

              {/* Video para Crypto Quant */}
              {isCrypto && cryptoActive && (
                <div className="absolute inset-0 w-full h-full transition-opacity duration-500 z-10 opacity-100">
                  <video
                    ref={cryptoVideoRef}
                    className="w-full h-full object-cover pointer-events-none"
                    muted
                    loop
                    playsInline
                    preload="auto"
                  >
                    <source src="/video_crypto.mp4" type="video/mp4" />
                    <source src="/video_crypto.mov" type="video/quicktime" />
                  </video>
                  {/* Overlay oscuro para legibilidad del texto */}
                  <div className="absolute inset-0 bg-black/40 z-0" />
                </div>
              )}

              {/* Contenido dinámico */}
              <div className={`relative z-20 flex flex-col h-full transition-all duration-300 ${fiddoActive || farmaciaActive || cryptoActive ? 'lg:scale-95' : 'group-hover:scale-95'}`}>
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
            );
          })}
        </AnimatePresence>
      </div>
    </section>
  );
}