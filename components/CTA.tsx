import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import './CTA.css';

const CTA: React.FC = () => (
  <section className="cta-section">
    <div className="container">
      <motion.div className="cta-card" initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
        <motion.h2 className="cta-title" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>Ready to invest in the music you love?</motion.h2>
        <motion.p className="cta-subtext" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>Join thousands of investors earning passive income from music royalties. Start with as little as ₹50.</motion.p>
        <motion.div className="cta-buttons" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>
          <motion.a href="#browse" className="cta-btn-primary" whileHover={{ scale: 1.05, boxShadow: '0 8px 24px rgba(255, 255, 255, 0.3)' }} whileTap={{ scale: 0.95 }}>Create Free Account <ArrowRight size={18} /></motion.a>
          <motion.a href="#how-it-works" className="cta-btn-secondary" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>Learn More</motion.a>
        </motion.div>
      </motion.div>
    </div>
  </section>
);

export default CTA;
