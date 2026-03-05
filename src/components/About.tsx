import { Download } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export default function About() {
  const { t, i18n } = useTranslation();
  
  const cvFile = i18n.language === 'en' 
    ? '/Resume Tobias Choclin 2026.pdf' 
    : '/CV Tobias Choclin 2026.pdf';
  
  const cvFileName = i18n.language === 'en'
    ? 'Resume Tobias Choclin 2026.pdf'
    : 'CV Tobias Choclin 2026.pdf';
  
  return (
    <section id="about" className="relative py-32 flex flex-col justify-center min-h-[85vh]">
      <motion.div 
        initial={{ opacity: 0, y: 30 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8 }}
        className="max-w-4xl"
      >
        <h1 className="text-7xl md:text-8xl font-bold leading-tight mb-2 tracking-tight">
          {t('about.name')}
        </h1>
        <h2 className="text-4xl md:text-5xl font-semibold text-[#FF4A57] mb-8">
          {t('about.role')}
        </h2>
        <p className="text-gray-400 text-lg md:text-xl mb-12 max-w-2xl leading-relaxed">
          {t('about.description')}
        </p>
        
        {/* Reemplazamos el button por un anchor tag (a) */}
        <a 
          href={cvFile} 
          download={cvFileName}
          className="bg-[#FF4A57] w-max text-white px-8 py-4 text-lg font-bold hover:bg-rose-600 transition hover:scale-105 transform shadow-lg shadow-[#FF4A57]/20 flex items-center gap-3"
        >
          <Download size={24} /> {t('about.downloadCV')}
        </a>
        
      </motion.div>
    </section>
  );
}