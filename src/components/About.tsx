import { Download } from 'lucide-react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="relative py-32 flex flex-col justify-center min-h-[85vh]">
      <motion.div 
        initial={{ opacity: 0, y: 30 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8 }}
        className="max-w-4xl"
      >
        <h1 className="text-7xl md:text-8xl font-bold leading-tight mb-2 tracking-tight">
          Tobias Choclin
        </h1>
        <h2 className="text-4xl md:text-5xl font-semibold text-[#FF4A57] mb-8">
          Desarrollador de Software
        </h2>
        <p className="text-gray-400 text-lg md:text-xl mb-12 max-w-2xl leading-relaxed">
          Estudiante de Ingeniería en Informática e Ingeniero de Soporte IT en Red Hat. Apasionado por crear soluciones escalables y llevarlas a la vida mediante código.
        </p>
        
        {/* Reemplazamos el button por un anchor tag (a) */}
        <a 
          href="/CV Tobias Choclin 2026.pdf" 
          download="CV Tobias Choclin 2026.pdf"
          className="bg-[#FF4A57] w-max text-white px-8 py-4 text-lg font-bold hover:bg-rose-600 transition hover:scale-105 transform shadow-lg shadow-[#FF4A57]/20 flex items-center gap-3"
        >
          <Download size={24} /> Descargar CV
        </a>
        
      </motion.div>
      <div className="absolute right-0 top-1/4 h-1/2 w-px bg-gray-700 hidden lg:block">
        <div className="absolute -left-[5px] top-0 w-3 h-3 rounded-full bg-[#FF4A57]"></div>
        <div className="absolute -left-[5px] top-1/2 w-3 h-3 rounded-full border-2 border-[#FF4A57] bg-[#1e1e2f]"></div>
        <div className="absolute -left-[5px] bottom-0 w-3 h-3 rounded-full border-2 border-[#FF4A57] bg-[#1e1e2f]"></div>
      </div>
    </section>
  );
}