import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Interactive 3D Landing',
    desc: 'A playful landing experience powered by WebGL and Spline.',
    tags: ['React', 'Spline', 'Framer Motion'],
    href: '#',
  },
  {
    title: 'Design System Kit',
    desc: 'A reusable component library with accessibility in mind.',
    tags: ['TypeScript', 'Tailwind', 'Radix'],
    href: '#',
  },
  {
    title: 'Realtime Dashboard',
    desc: 'Live metrics and insights with smooth animations.',
    tags: ['FastAPI', 'WebSockets', 'Charts'],
    href: '#',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Selected Work</h2>
            <p className="text-white/70 mt-2">A few highlights that showcase my range from motion to systems thinking.</p>
          </div>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <motion.a
              key={p.title}
              href={p.href}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              className="group relative rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur transition hover:bg-white/10"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-lg font-semibold group-hover:text-white/95">{p.title}</h3>
                  <p className="mt-1 text-sm text-white/70">{p.desc}</p>
                </div>
                <ExternalLink className="size-4 text-white/60 group-hover:text-white/90" />
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="rounded-md bg-white/10 px-2 py-1 text-xs text-white/80">{t}</span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
