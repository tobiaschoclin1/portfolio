import { motion } from 'framer-motion';
import { SiReact, SiSpringboot, SiPython, SiMongodb, SiPostgresql, SiDocker } from 'react-icons/si';
import { useTranslation } from 'react-i18next';

export default function Skills() {
  const { t } = useTranslation();

  const skills = [
    { name: t('skills.items.react.name'), desc: t('skills.items.react.desc'), icon: <SiReact size={32} /> },
    { name: t('skills.items.java.name'), desc: t('skills.items.java.desc'), icon: <SiSpringboot size={32} /> },
    { name: t('skills.items.python.name'), desc: t('skills.items.python.desc'), icon: <SiPython size={32} /> },
    { name: t('skills.items.mongodb.name'), desc: t('skills.items.mongodb.desc'), icon: <SiMongodb size={32} /> },
    { name: t('skills.items.postgresql.name'), desc: t('skills.items.postgresql.desc'), icon: <SiPostgresql size={32} /> },
    { name: t('skills.items.docker.name'), desc: t('skills.items.docker.desc'), icon: <SiDocker size={32} /> },
  ];

  return (
    <section id="skills" className="relative py-24 border-t border-gray-800/50">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-[#FF4A57] text-4xl md:text-5xl font-bold mb-16"
      >
        {t('skills.title')}
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="bg-[#27293d] p-8 hover:-translate-y-2 transition-transform duration-300 border border-transparent hover:border-gray-700"
          >
            <div className="text-[#FF4A57] mb-6">{s.icon}</div>
            <h3 className="text-xl font-bold mb-3">{s.name}</h3>
            <p className="text-gray-400 text-sm leading-relaxed">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}