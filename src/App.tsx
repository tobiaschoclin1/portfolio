import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import SideNav from './components/SideNav';
import { Github, Mail } from 'lucide-react';

export default function App() {
  return (
    <main className="min-h-screen bg-[#1e1e2f] text-white font-sans relative overflow-x-hidden">
      <nav className="flex justify-between items-center p-8 max-w-6xl mx-auto z-10 relative">
        <div className="text-2xl font-bold tracking-widest text-[#FF4A57]">amogoe.</div>
        <div className="flex gap-6 text-gray-400">
          <a href="https://github.com/tobiaschoclin1" target="_blank" rel="noreferrer" className="hover:text-[#FF4A57] transition">
            <Github size={24} />
          </a>
          <a href="mailto:tobiaschoclin1@gmail.com" className="hover:text-[#FF4A57] transition">
            <Mail size={24} />
          </a>
        </div>
      </nav>
      <SideNav />
      <div className="max-w-6xl mx-auto px-8 pr-24 lg:pr-8">
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </main>
  );
}