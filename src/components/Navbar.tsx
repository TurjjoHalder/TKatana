import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import ThemeToggle from './ThemeToggle';

const links = [
  { name: 'Work', path: '/' },
  { name: 'Timeline', path: '/journey' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="glass-navbar">
      <div className="max-w-7xl mx-auto px-12 h-[72px] flex justify-between items-center">
        {/* Logo */}
        <NavLink 
          to="/" 
          className="text-xl font-bold font-headline tracking-tight text-text uppercase"
        >
          TURJJO HALDER
        </NavLink>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10">
          {links.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) => 
                `font-headline font-bold uppercase text-sm tracking-tighter transition-all hover:text-primary ${
                  isActive ? 'text-primary' : 'text-text-dim'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
          <ThemeToggle />
          <NavLink
            to="/contact"
            className="kinetic-gradient text-background px-6 py-2 rounded-md font-bold text-xs uppercase tracking-widest transition-transform active:scale-95"
          >
            Contact
          </NavLink>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center gap-4">
          <ThemeToggle />
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="text-primary p-1"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-full left-0 w-full bg-background border-b border-white/10 px-6 py-8 flex flex-col gap-6 shadow-2xl"
          >
            {links.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) => 
                  `font-headline font-bold uppercase text-2xl tracking-tighter transition-all ${
                    isActive ? 'text-primary' : 'text-text-dim'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
