/**
 * Hero — value prop, primary CTA, trust row, live deal card
 */
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Shield, TrendingUp, Users, Zap } from 'lucide-react';
import './Hero.css';

const Hero: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.15 } },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] } },
  };

  return (
    <section className="hero">
      <div className="hero-bg-pattern" aria-hidden="true" />
      <div className="container hero-container">
        <motion.div className="hero-left" variants={containerVariants} initial="hidden" animate="visible">
          <motion.div className="hero-badge" variants={itemVariants}>
            <Shield size={12} />
            <span>SEBI-compliant • India’s first music exchange</span>
          </motion.div>
          <motion.h1 className="hero-title" variants={itemVariants}>
            Earn from music.
            <br />
            <span className="hero-title-accent">Like the stock market.</span>
          </motion.h1>
          <motion.p className="hero-subtitle" variants={itemVariants}>
            Buy fractional rights to songs and albums. Get monthly royalty payouts as they stream. Sell your shares anytime on a live market.
          </motion.p>
          <motion.div className="hero-cta" variants={itemVariants}>
            <motion.a href="#browse" className="btn-primary" whileHover={{ scale: 1.02, boxShadow: '0 12px 28px rgba(37, 99, 235, 0.35)' }} whileTap={{ scale: 0.98 }}>
              Start investing — free
              <ArrowRight size={18} />
            </motion.a>
            <motion.a href="#how-it-works" className="btn-secondary" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              How it works
            </motion.a>
          </motion.div>
          <motion.div className="hero-proof" variants={itemVariants}>
            <div className="hero-proof-item">
              <Users size={14} />
              <span><strong>2,500+</strong> investors</span>
            </div>
            <div className="hero-proof-dot" />
            <div className="hero-proof-item">
              <TrendingUp size={14} />
              <span><strong>₹12Cr+</strong> deployed</span>
            </div>
            <div className="hero-proof-dot" />
            <div className="hero-proof-item">
              <Zap size={14} />
              <span>From <strong>₹50</strong> to start</span>
            </div>
          </motion.div>
        </motion.div>
        <motion.div
          className="hero-card"
          initial={{ opacity: 0, x: 32 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.35, duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <div className="hero-card-label">Live deal</div>
          <div className="card-image">
            <img
              src={`${import.meta.env.BASE_URL}hero-card.svg`}
              alt="Featured: Midnight Dreams"
              className="card-image-img"
              onError={(e) => {
                const t = e.target as HTMLImageElement;
                t.onerror = null;
                t.src = 'https://images.unsplash.com/photo-1662207188435-1f39465f141a?w=800&q=80';
              }}
            />
            <div className="card-overlay" />
            <div className="card-info">
              <span className="card-artist">Arjun Mehta</span>
              <span className="card-title">Midnight Dreams</span>
            </div>
          </div>
          <div className="card-body">
            <div className="card-metrics">
              <div className="card-metric">
                <span className="card-metric-value">₹199</span>
                <span className="card-metric-label">per share</span>
              </div>
              <div className="card-metric card-metric-highlight">
                <span className="card-metric-value">+12.5%</span>
                <span className="card-metric-label">30d</span>
              </div>
              <div className="card-metric">
                <span className="card-metric-value">68%</span>
                <span className="card-metric-label">funded</span>
              </div>
            </div>
            <div className="card-progress">
              <div className="progress-bar">
                <motion.div className="progress-fill" initial={{ width: 0 }} animate={{ width: '68%' }} transition={{ delay: 0.9, duration: 0.8, ease: 'easeOut' }} />
              </div>
              <div className="progress-meta">312 investors • Closes in 6 days</div>
            </div>
            <motion.a href="#browse" className="card-cta" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              Invest in this deal
              <ArrowRight size={16} />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
