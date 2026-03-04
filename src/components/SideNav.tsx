import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function SideNav() {
  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    const sections = ['about', 'skills', 'projects', 'contact'];
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionIndex = sections.indexOf(entry.target.id);
            if (sectionIndex !== -1) {
              setActiveSection(sectionIndex);
            }
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const sections = [
    { name: 'Sobre mí', id: 'about' },
    { name: 'Habilidades', id: 'skills' },
    { name: 'Proyectos', id: 'projects' },
    { name: 'Contacto', id: 'contact' }
  ];

  return (
    <div className="fixed right-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-8 z-50">
      <div className="relative flex flex-col items-center gap-8">
        {/* Línea vertical */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-gray-700" />
        
        {/* Puntos de navegación */}
        {sections.map((section, index) => (
          <a
            key={section.id}
            href={`#${section.id}`}
            className="relative group cursor-pointer"
          >
            <motion.div
              className={`w-3 h-3 rounded-full transition-all duration-300 relative z-10 ${
                activeSection === index
                  ? 'bg-[#FF4A57] scale-125'
                  : 'border-2 border-[#FF4A57] bg-[#1e1e2f] hover:bg-[#FF4A57] hover:scale-110'
              }`}
              whileHover={{ scale: 1.3 }}
            />
            {/* Tooltip */}
            <span className="absolute right-6 top-1/2 -translate-y-1/2 bg-[#27293d] text-white px-3 py-1 rounded text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
              {section.name}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}
