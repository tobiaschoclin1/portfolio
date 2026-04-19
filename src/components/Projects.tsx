import { motion, AnimatePresence, type Variants } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function Projects() {
  const { t } = useTranslation();
  
  const projects = [
    {
      title: t('projects.items.fiddo.title'),
      desc: t('projects.items.fiddo.desc'),
      tech: t('projects.items.fiddo.tech'),
      link: "https://fiddo-app.onrender.com/login"
    },
    {
      title: t('projects.items.farmacia.title'),
      desc: t('projects.items.farmacia.desc'),
      tech: t('projects.items.farmacia.tech'),
      link: "https://farmacia-2xm1.onrender.com/registro"
    },
    {
      title: t('projects.items.crypto.title'),
      desc: t('projects.items.crypto.desc'),
      tech: t('projects.items.crypto.tech'),
      link: "https://crypto-quant-pro.onrender.com/"
    }
  ];

  const cardVariants: Variants = {
    initial: {
      opacity: 0,
      y: 30
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
        {t('projects.title')}
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                whileHover={{
                  scale: 1.02,
                  y: -10,
                  transition: { duration: 0.25, ease: 'easeOut' }
                }}
                viewport={{ once: true }}
                className="group relative h-[400px] md:h-[420px] overflow-hidden bg-[#27293d] p-10 transition-all duration-300 flex flex-col cursor-pointer border border-transparent hover:border-[#FF4A57]/50 hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
              >
                <div className="relative z-20 flex flex-col h-full transition-all duration-300 group-hover:scale-95">
                  <div className="flex flex-col transition-all duration-500">
                    <div className="w-14 h-14 mb-8 bg-[#1e1e2f] border border-gray-700 rounded-full flex items-center justify-center group-hover:border-[#FF4A57] transition-colors flex-shrink-0">
                      <span className="text-[#FF4A57] text-xl font-bold">{i + 1}</span>
                    </div>

                    <div className="flex flex-col">
                      <h3 className="text-2xl font-bold mb-4 group-hover:text-[#FF4A57] transition-colors">{p.title}</h3>
                      <p className="text-gray-400 text-base md:text-lg mb-8 leading-relaxed flex-grow group-hover:text-white">
                        {p.desc}
                      </p>
                    </div>
                  </div>

                  <div className="mt-auto flex flex-col gap-4">
                    <span className="text-[#FF4A57] text-xs md:text-sm font-bold tracking-widest uppercase min-h-[2.75rem] flex items-center leading-tight">
                      {p.tech}
                    </span>
                    <div className="text-white text-sm font-semibold flex items-center gap-2">
                      <ExternalLink size={18} /> <span>{t('projects.viewRepo')}</span>
                    </div>
                  </div>
                </div>
              </motion.a>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
}