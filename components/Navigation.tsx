/**
 * Top navigation — logo, links, CTAs. Mobile: hamburger menu.
 */
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import './Navigation.css';

const navLinks = [
  { label: 'Browse', href: '#browse' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Artists', href: '#artists' },
  { label: 'Pricing', href: '#pricing' },
];

const Navigation: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const closeMobile = () => setMobileOpen(false);

  return (
    <motion.nav
      className={`navigation ${scrolled ? 'scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <div className="container nav-container">
        <motion.a
          href={`${import.meta.env.BASE_URL || '/'}`}
          className="logo"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          transition={{ duration: 0.2 }}
        >
          kohrus
        </motion.a>

        <div className="nav-links">
          {navLinks.map((link, index) => (
            <motion.a
              key={link.label}
              href={link.href}
              className="nav-link"
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.06 + 0.15, duration: 0.3 }}
              whileHover={{ y: -1 }}
              whileTap={{ scale: 0.98 }}
            >
              {link.label}
            </motion.a>
          ))}
        </div>

        <div className="nav-cta">
          <motion.button
            type="button"
            className="btn-login"
            initial={{ opacity: 0, x: 12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.35, duration: 0.3 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Log in
          </motion.button>
          <motion.a
            href="#browse"
            className="btn-signup"
            initial={{ opacity: 0, x: 12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.3 }}
            whileHover={{ scale: 1.03, boxShadow: '0 6px 20px rgba(37, 99, 235, 0.4)' }}
            whileTap={{ scale: 0.98 }}
          >
            Get Started
          </motion.a>

          <motion.button
            type="button"
            className="btn-mobile-menu"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((o) => !o)}
            whileTap={{ scale: 0.92 }}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </motion.button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="nav-mobile-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={closeMobile}
          >
            <motion.div
              className="nav-mobile-drawer"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
              onClick={(e) => e.stopPropagation()}
            >
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  className="nav-mobile-link"
                  onClick={closeMobile}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  whileTap={{ backgroundColor: 'rgba(37, 99, 235, 0.08)' }}
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href="#browse"
                className="nav-mobile-cta"
                onClick={closeMobile}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                whileTap={{ scale: 0.98 }}
              >
                Get Started
              </motion.a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navigation;
