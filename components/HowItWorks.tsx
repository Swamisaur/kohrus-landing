import React from 'react';
import { motion } from 'framer-motion';
import './HowItWorks.css';

const steps = [
  { number: 1, title: 'Browse & Discover', description: 'Explore songs, albums and collections from verified artists. Analyse yield projections, streaming data and risk scores.', image: 'https://images.unsplash.com/photo-1548094891-c4ba474efd16?w=800&q=80' },
  { number: 2, title: 'Invest from ₹50', description: 'Purchase fractional royalty shares via UPI. Choose your investment amount and own a piece of the music you love.', image: 'https://images.unsplash.com/photo-1635950340810-2fb374521a7b?w=800&q=80' },
  { number: 3, title: 'Earn & Trade', description: 'Receive monthly royalty dividends as streams grow. Trade your shares on the secondary market anytime, 24/7.', image: 'https://images.unsplash.com/photo-1634117622592-114e3024ff27?w=800&q=80' },
];

const HowItWorks: React.FC = () => (
  <section id="how-it-works" className="how-it-works">
    <div className="container">
      <motion.div className="how-header" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
        <div className="how-label">HOW IT WORKS</div>
        <h2 className="how-title">Start earning in 3 simple steps</h2>
        <p className="how-subtitle">Whether you're an artist seeking capital or a fan wanting to invest, getting started is easy.</p>
      </motion.div>
      <motion.div className="how-cards" variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.15 } } }} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-100px' }}>
        {steps.map((step) => (
          <motion.div key={step.number} className="step-card" variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } } }} whileHover={{ y: -8, transition: { duration: 0.2 } }}>
            <div className="step-image-wrapper">
              <img src={step.image} alt={step.title} className="step-image" />
              <div className="step-gradient-overlay" />
            </div>
            <div className="step-number">{step.number}</div>
            <h3 className="step-title">{step.title}</h3>
            <p className="step-description">{step.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default HowItWorks;
