/**
 * Top navigation — logo, links, CTAs
 */
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './Navigation.css';

const Navigation: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Browse', href: '#browse' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Artists', href: '#artists' },
    { label: 'Pricing', href: '#pricing' },
  ];

  return (
    <motion.nav
      className={`navigation ${scrolled ? 'scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <div className="container nav-container">
        <motion.a href={`${import.meta.env.BASE_URL || '/'}`} className="logo" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          kohrus
        </motion.a>
        <div className="nav-links">
          {navLinks.map((link, index) => (
            <motion.a
              key={link.label}
              href={link.href}
              className="nav-link"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 + 0.2 }}
              whileHover={{ color: 'var(--color-primary)' }}
            >
              {link.label}
            </motion.a>
          ))}
        </div>
        <div className="nav-cta">
          <motion.button className="btn-login" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            Log in
          </motion.button>
          <motion.button className="btn-signup" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 }} whileHover={{ scale: 1.05, boxShadow: '0 4px 12px rgba(37, 99, 235, 0.4)' }} whileTap={{ scale: 0.95 }}>
            Get Started
          </motion.button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navigation;
