import { motion } from 'framer-motion';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function Contact() {
  const { t } = useTranslation();
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setStatus(t('contact.sending'));
    const form = e.target;
    const formData = new FormData(form);
    formData.append("access_key", "a258a1c7-e099-420f-a5fe-fc7544be0fa8");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
      const data = await res.json();
      
      if (data.success) {
        setStatus(t('contact.success'));
        form.reset();
      } else {
        setStatus(t('contact.error'));
      }
    } catch (err) {
      setStatus(t('contact.errorConnection'));
    }
  };

  return (
    <section id="contact" className="relative py-24 mb-20">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-[#FF4A57] text-5xl md:text-6xl font-bold mb-16"
      >
        {t('contact.title')}
      </motion.h2>
      <motion.form 
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl flex flex-col gap-8"
      >
        <input type="email" name="email" required placeholder={t('contact.email')} className="bg-[#27293d] text-white p-6 text-lg outline-none focus:ring-2 focus:ring-[#FF4A57] transition" />
        <textarea name="message" required placeholder={t('contact.message')} rows={4} className="bg-[#27293d] text-white p-6 text-lg outline-none focus:ring-2 focus:ring-[#FF4A57] transition"></textarea>
        
        <div className="flex items-center gap-4 mt-4">
          <button type="submit" className="bg-[#FF4A57] text-white px-10 py-4 text-lg font-bold hover:bg-rose-600 transition flex items-center justify-center gap-3 w-max hover:scale-105 transform">
            {t('contact.send')}
          </button>
          {status && <span className="text-gray-300 text-sm font-semibold">{status}</span>}
        </div>
      </motion.form>
    </section>
  );
}