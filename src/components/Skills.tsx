import { motion } from 'framer-motion';
import { SiReact, SiSpringboot, SiDocker, SiNodedotjs, SiPostgresql, SiPython } from 'react-icons/si';

export default function Skills() {
  const skills = [
    { name: "React & TypeScript", desc: "Desarrollo de interfaces dinámicas y tipado estático.", icon: <SiReact size={32} /> },
    { name: "Java & Spring Boot", desc: "Creación de APIs RESTful y arquitecturas robustas.", icon: <SiSpringboot size={32} /> },
    { name: "Node.js & Express", desc: "Backend escalable y manejo de asincronía.", icon: <SiNodedotjs size={32} /> },
    { name: "Bases de Datos", desc: "Modelado y persistencia relacional con PostgreSQL.", icon: <SiPostgresql size={32} /> },
    { name: "Docker", desc: "Containerización para asegurar entornos consistentes.", icon: <SiDocker size={32} /> },
    { name: "Python", desc: "Análisis de datos, automatización e integración.", icon: <SiPython size={32} /> },
  ];

  return (
    <section id="skills" className="relative py-24 border-t border-gray-800/50 pr-16 lg:pr-0">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-[#FF4A57] text-4xl md:text-5xl font-bold mb-16"
      >
        Habilidades
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
      <div className="absolute right-0 top-0 h-full w-px bg-gray-700 hidden lg:block">
        <div className="absolute -left-[5px] top-1/4 w-3 h-3 rounded-full border-2 border-[#FF4A57] bg-[#1e1e2f]"></div>
        <div className="absolute -left-[5px] top-1/2 w-3 h-3 rounded-full bg-[#FF4A57]"></div>
      </div>
    </section>
  );
}