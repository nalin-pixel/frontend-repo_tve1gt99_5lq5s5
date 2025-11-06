import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

export default function Contact() {
  const [status, setStatus] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    setStatus('Thanks! I\'ll get back to you soon.');
    e.currentTarget.reset();
  };

  return (
    <section id="contact" className="relative py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur"
        >
          <h2 className="text-3xl font-bold tracking-tight">Let’s work together</h2>
          <p className="mt-2 text-white/70">Have a project in mind or just want to say hi? Drop a message below.</p>

          <form onSubmit={onSubmit} className="mt-8 grid gap-4">
            <div className="grid gap-2">
              <label htmlFor="name" className="text-sm text-white/80">Name</label>
              <input id="name" name="name" required className="w-full rounded-md border border-white/10 bg-neutral-900 px-4 py-3 outline-none ring-0 focus:border-cyan-400/50" />
            </div>
            <div className="grid gap-2">
              <label htmlFor="email" className="text-sm text-white/80">Email</label>
              <input id="email" type="email" name="email" required className="w-full rounded-md border border-white/10 bg-neutral-900 px-4 py-3 outline-none ring-0 focus:border-cyan-400/50" />
            </div>
            <div className="grid gap-2">
              <label htmlFor="message" className="text-sm text-white/80">Message</label>
              <textarea id="message" name="message" rows="5" required className="w-full rounded-md border border-white/10 bg-neutral-900 px-4 py-3 outline-none ring-0 focus:border-cyan-400/50" />
            </div>
            <div className="flex items-center justify-between">
              <motion.button
                type="submit"
                whileTap={{ scale: 0.98 }}
                whileHover={{ y: -1 }}
                className="inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-cyan-400 to-fuchsia-500 px-5 py-3 font-medium text-neutral-900 shadow-lg shadow-cyan-500/20"
              >
                <Send className="size-4" /> Send message
              </motion.button>
              <p className="text-sm text-white/70">{status}</p>
            </div>
          </form>
        </motion.div>

        <p className="mt-6 text-center text-xs text-white/50">Designed & built with care — © {new Date().getFullYear()}</p>
      </div>
    </section>
  );
}
