import React from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative" id="about">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 min-h-[80vh] md:min-h-[85vh] items-center">
          <div className="py-24 md:py-32">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur">Tech • Portfolio • Interactive • Modern</span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
                Crafting delightful digital experiences
              </h1>
              <p className="text-white/70 max-w-xl">
                I’m a developer and designer focused on building accessible, human‑centered products with clean aesthetics and playful interactions.
              </p>
              <div className="flex items-center gap-3">
                <a href="#projects" className="inline-flex items-center justify-center rounded-md bg-white text-neutral-900 px-5 py-3 font-medium shadow hover:shadow-lg transition-shadow">
                  View Projects
                </a>
                <a href="#contact" className="inline-flex items-center justify-center rounded-md border border-white/20 px-5 py-3 font-medium text-white/90 hover:bg-white/10 transition-colors">
                  Get in Touch
                </a>
              </div>
            </motion.div>
          </div>
          <div className="relative h-[50vh] md:h-[70vh]">
            {/* Gradient overlay to improve text readability without blocking Spline interaction */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
