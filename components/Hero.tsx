/**
 * Hero — value prop, primary CTA, trust row, live deal card
 */
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Shield, TrendingUp, Users, Zap } from 'lucide-react';
import { ease, transition, stagger } from '../utils/motion';
import './Hero.css';

const Hero: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { ...stagger.normal } },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { ...transition.normal, ease } },
  };

  const heroImage =
    'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=800&q=85';
  const heroFallback =
    'https://images.pexels.com/photos/164936/pexels-photo-164936.jpeg?auto=compress&cs=tinysrgb&w=800&q=85';

  return (
    <section className="hero">
      <div className="hero-bg-pattern" aria-hidden="true" />
      <div className="container hero-container">
        <motion.div
          className="hero-left"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            className="hero-badge"
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <Shield size={12} aria-hidden />
            <span>SEBI-compliant • India’s first music exchange</span>
          </motion.div>
          <motion.h1 className="hero-title" variants={itemVariants}>
            Own a piece of the songs
            <br />
            <span className="hero-title-accent">that move the world.</span>
          </motion.h1>
          <motion.p className="hero-subtitle" variants={itemVariants}>
            Buy fractional rights to music. Earn monthly royalties as streams grow. Trade shares on a live market—from ₹50.
          </motion.p>
          <motion.div className="hero-cta" variants={itemVariants}>
            <motion.a
              href="#browse"
              className="btn-primary"
              whileHover={{
                scale: 1.02,
                boxShadow: '0 12px 28px rgba(37, 99, 235, 0.35)',
              }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
            >
              Start investing — free
              <motion.span className="btn-icon-wrap" whileHover={{ x: 3 }}>
                <ArrowRight size={18} aria-hidden />
              </motion.span>
            </motion.a>
            <motion.a
              href="#how-it-works"
              className="btn-secondary"
              whileHover={{ scale: 1.02, borderColor: 'var(--color-primary)' }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
            >
              How it works
            </motion.a>
          </motion.div>
          <motion.div className="hero-proof" variants={itemVariants}>
            {[
              { icon: Users, text: '2,500+ investors' },
              { icon: TrendingUp, text: '₹12Cr+ deployed' },
              { icon: Zap, text: 'From ₹50 to start' },
            ].map((item, i) => (
              <React.Fragment key={item.text}>
                {i > 0 && <span className="hero-proof-dot" />}
                <motion.div
                  className="hero-proof-item"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + i * 0.08, duration: 0.3 }}
                  whileHover={{ y: -1 }}
                >
                  <item.icon size={14} aria-hidden />
                  <span>
                    {i === 0 && <><strong>2,500+</strong> investors</>}
                    {i === 1 && <><strong>₹12Cr+</strong> deployed</>}
                    {i === 2 && <>From <strong>₹50</strong> to start</>}
                  </span>
                </motion.div>
              </React.Fragment>
            ))}
          </motion.div>
        </motion.div>
        <motion.div
          className="hero-card"
          initial={{ opacity: 0, x: 28 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.5, ease }}
        >
          <div className="hero-card-label">Live deal</div>
          <motion.div
            className="card-image"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.4, ease }}
          >
            <img
              src={heroImage}
              alt="Featured deal: Midnight Dreams — invest in music royalties"
              className="card-image-img"
              fetchPriority="high"
              decoding="async"
              onError={(e) => {
                const t = e.target as HTMLImageElement;
                if (t.dataset.failed !== '1') {
                  t.dataset.failed = '1';
                  t.onerror = null;
                  t.src = heroFallback;
                }
              }}
            />
            <div className="card-overlay" />
            <div className="card-info">
              <span className="card-artist">Arjun Mehta</span>
              <span className="card-title">Midnight Dreams</span>
            </div>
          </motion.div>
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
                <motion.div
                  className="progress-fill"
                  initial={{ width: 0 }}
                  animate={{ width: '68%' }}
                  transition={{ delay: 0.85, duration: 0.75, ease: [0.33, 1, 0.68, 1] }}
                />
              </div>
              <div className="progress-meta">312 investors • Closes in 6 days</div>
            </div>
            <motion.a
              href="#browse"
              className="card-cta"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
            >
              Invest in this deal
              <ArrowRight size={16} aria-hidden />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
