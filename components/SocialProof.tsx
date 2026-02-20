import React from 'react';
import { motion } from 'framer-motion';
import './SocialProof.css';

const stats = [
  { label: '2,500+ Investors' },
  { label: '150+ Artists' },
  { label: '₹12Cr+ Deployed' },
];

const SocialProof: React.FC = () => (
  <section className="social-proof">
    <div className="container">
      <div className="social-proof-content">
        <span className="proof-label">Trusted by artists & investors across</span>
        {stats.map((stat, index) => (
          <React.Fragment key={stat.label}>
            {index > 0 && <span className="proof-dot" />}
            <motion.span
              className="proof-stat"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              {stat.label}
            </motion.span>
          </React.Fragment>
        ))}
      </div>
    </div>
  </section>
);

export default SocialProof;
