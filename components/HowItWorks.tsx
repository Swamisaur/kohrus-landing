import React from 'react';
import { motion } from 'framer-motion';
import { Search, Wallet, TrendingUp } from 'lucide-react';
import './HowItWorks.css';

const steps = [
  {
    number: 1,
    title: 'Browse & Discover',
    description: 'Explore songs, albums and collections from verified artists. Analyse yield projections, streaming data and risk scores.',
    image: 'https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=900&q=85',
    fallback: 'https://images.pexels.com/photos/733767/pexels-photo-733767.jpeg?auto=compress&cs=tinysrgb&w=900&q=85',
    icon: Search,
  },
  {
    number: 2,
    title: 'Invest from ₹50',
    description: 'Purchase fractional royalty shares via UPI. Choose your investment amount and own a piece of the music you love.',
    image: 'https://images.pexels.com/photos/4386432/pexels-photo-4386432.jpeg?auto=compress&cs=tinysrgb&w=900&q=85',
    fallback: 'https://images.pexels.com/photos/5096436/pexels-photo-5096436.jpeg?auto=compress&cs=tinysrgb&w=900&q=85',
    icon: Wallet,
  },
  {
    number: 3,
    title: 'Earn & Trade',
    description: 'Receive monthly royalty dividends as streams grow. Trade your shares on the secondary market anytime, 24/7.',
    image: 'https://images.pexels.com/photos/6770616/pexels-photo-6770616.jpeg?auto=compress&cs=tinysrgb&w=900&q=85',
    fallback: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=900&q=85',
    icon: TrendingUp,
  },
];

const HowItWorks: React.FC = () => (
  <section id="how-it-works" className="how-it-works">
    <div className="how-it-works-bg" aria-hidden="true" />
    <div className="container how-container">
      <motion.div
        className="how-header"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.5 }}
      >
        <div className="how-label">HOW IT WORKS</div>
        <h2 className="how-title">Start earning in 3 simple steps</h2>
        <p className="how-subtitle">
          Join India’s first music exchange. Artists get funding; investors earn royalties. No middlemen—just you and the music.
        </p>
      </motion.div>
      <motion.div
        className="how-cards"
        variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.1 } } }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
      >
        {steps.map((step) => {
          const Icon = step.icon;
          return (
            <motion.article
              key={step.number}
              className="step-card"
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] } },
              }}
              whileHover={{ y: -8, transition: { duration: 0.25 } }}
            >
              <motion.div
                className="step-image-wrapper"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.4 }}
              >
                <img
                  src={step.image}
                  alt={`Step ${step.number}: ${step.title}`}
                  className="step-image"
                  loading="lazy"
                  decoding="async"
                  onError={(e) => {
                    const t = e.target as HTMLImageElement;
                    if (t.dataset.failed !== '1') {
                      t.dataset.failed = '1';
                      t.onerror = null;
                      t.src = step.fallback;
                    }
                  }}
                />
                <div className="step-gradient-overlay" />
                <div className="step-number-badge">
                  <span className="step-number">{step.number}</span>
                  <Icon className="step-icon" size={20} strokeWidth={2} aria-hidden />
                </div>
              </motion.div>
              <div className="step-content">
                <h3 className="step-title">{step.title}</h3>
                <p className="step-description">{step.description}</p>
              </div>
            </motion.article>
          );
        })}
      </motion.div>
    </div>
  </section>
);

export default HowItWorks;
