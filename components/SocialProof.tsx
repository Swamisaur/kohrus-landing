import React from 'react';
import { motion } from 'framer-motion';
import './SocialProof.css';

const stats = [
  { value: '2,500+', label: 'Investors' },
  { value: '150+', label: 'Artists' },
  { value: '₹12Cr+', label: 'Deployed' },
];

const SocialProof: React.FC = () => (
  <section className="social-proof" aria-label="Trust metrics">
    <div className="container">
      <div className="social-proof-content">
        <motion.span
          className="proof-label"
          initial={{ opacity: 0, y: 6 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35 }}
        >
          Trusted by artists & investors
        </motion.span>
        {stats.map((stat, index) => (
          <React.Fragment key={stat.label}>
            {index > 0 && <span className="proof-dot" aria-hidden />}
            <motion.span
              className="proof-stat"
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.35 }}
              whileHover={{ y: -1 }}
            >
              <strong className="proof-value">{stat.value}</strong> {stat.label}
            </motion.span>
          </React.Fragment>
        ))}
      </div>
    </div>
  </section>
);

export default SocialProof;
