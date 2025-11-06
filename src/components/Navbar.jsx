import React from 'react';
import { motion } from 'framer-motion';
import { User, FolderGit2, Mail, Rocket } from 'lucide-react';

const navItems = [
  { href: '#about', label: 'About', icon: User },
  { href: '#projects', label: 'Projects', icon: FolderGit2 },
  { href: '#contact', label: 'Contact', icon: Mail },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md supports-[backdrop-filter]:bg-neutral-950/60 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="inline-flex items-center gap-2 font-semibold tracking-tight">
            <Rocket className="size-5 text-cyan-400" />
            <span className="text-white">MyPortfolio</span>
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            {navItems.map(({ href, label, icon: Icon }) => (
              <a
                key={href}
                href={href}
                className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors"
              >
                <Icon className="size-4" />
                {label}
              </a>
            ))}
          </nav>
          <motion.a
            href="#contact"
            className="rounded-md bg-gradient-to-r from-cyan-400 to-fuchsia-500 px-4 py-2 text-sm font-medium text-neutral-900 shadow-lg shadow-cyan-500/20"
            whileTap={{ scale: 0.98 }}
            whileHover={{ y: -1 }}
          >
            Hire me
          </motion.a>
        </div>
      </div>
    </header>
  );
}
