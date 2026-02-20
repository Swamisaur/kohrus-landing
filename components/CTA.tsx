import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import './CTA.css';

const CTA: React.FC = () => (
  <section className="cta-section">
    <div className="container">
      <motion.div
        className="cta-card"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <motion.h2
          className="cta-title"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.4 }}
        >
          Your favourite songs could be paying you.
        </motion.h2>
        <motion.p
          className="cta-subtext"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.18, duration: 0.4 }}
        >
          Join 2,500+ investors earning monthly royalties from music. Start with ₹50—no lock-in, trade anytime.
        </motion.p>
        <motion.div
          className="cta-buttons"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.26, duration: 0.4 }}
        >
          <motion.a
            href="#browse"
            className="cta-btn-primary"
            whileHover={{ scale: 1.03, boxShadow: '0 8px 24px rgba(255, 255, 255, 0.35)' }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2 }}
          >
            Create free account <ArrowRight size={18} aria-hidden />
          </motion.a>
          <motion.a
            href="#how-it-works"
            className="cta-btn-secondary"
            whileHover={{ scale: 1.02, backgroundColor: 'rgba(255, 255, 255, 0.15)' }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2 }}
          >
            How it works
          </motion.a>
        </motion.div>
      </motion.div>
    </div>
  </section>
);

export default CTA;
