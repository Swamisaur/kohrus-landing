import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, TrendingUp } from 'lucide-react';
import './FeaturedAssets.css';

const featuredAssets = [
  {
    id: 1,
    title: 'Monsoon Nights',
    artist: 'Priya Sharma',
    price: '₹5',
    change: '+12.5%',
    image: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=600&q=85',
    fallback: 'https://images.pexels.com/photos/733767/pexels-photo-733767.jpeg?auto=compress&cs=tinysrgb&w=600&q=85',
    gradient: 'linear-gradient(120deg, rgba(5, 150, 105, 0.5) 0%, rgba(37, 99, 235, 0.5) 100%)',
  },
  {
    id: 2,
    title: 'Urban Pulse (Album)',
    artist: 'Vikram Collective',
    price: '₹2',
    change: '+8.2%',
    image: 'https://images.pexels.com/photos/164936/pexels-photo-164936.jpeg?auto=compress&cs=tinysrgb&w=600&q=85',
    fallback: 'https://images.pexels.com/photos/257903/pexels-photo-257903.jpeg?auto=compress&cs=tinysrgb&w=600&q=85',
    gradient: 'linear-gradient(45deg, rgba(234, 88, 12, 0.5) 0%, rgba(217, 119, 6, 0.5) 100%)',
  },
  {
    id: 3,
    title: 'Neon City',
    artist: 'Zara X',
    price: '₹5',
    change: '+15.3%',
    image: 'https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=600&q=85',
    fallback: 'https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=600&q=85',
    gradient: 'linear-gradient(160deg, rgba(124, 58, 237, 0.5) 0%, rgba(219, 39, 119, 0.5) 100%)',
  },
  {
    id: 4,
    title: 'Indie Collection Vol. 3',
    artist: 'Various Artists',
    price: '₹4',
    change: '+6.8%',
    image: 'https://images.pexels.com/photos/1047442/pexels-photo-1047442.jpeg?auto=compress&cs=tinysrgb&w=600&q=85',
    fallback: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=600&q=85',
    gradient: 'linear-gradient(90deg, rgba(29, 78, 216, 0.5) 0%, rgba(14, 165, 233, 0.5) 100%)',
  },
];

const FeaturedAssets: React.FC = () => (
  <section id="browse" className="featured-assets">
    <div className="container">
      <motion.div
        className="featured-header"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.4 }}
      >
        <div className="featured-header-left">
          <div className="featured-label">LIVE DEALS</div>
          <h2 className="featured-title">Invest in music that’s trending now</h2>
        </div>
        <motion.a
          href="#browse"
          className="featured-view-all"
          whileHover={{ x: 4 }}
          whileTap={{ scale: 0.97 }}
          transition={{ duration: 0.2 }}
        >
          View all assets <ArrowRight size={16} aria-hidden />
        </motion.a>
      </motion.div>
      <motion.div
        className="featured-grid"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
      >
        {featuredAssets.map((asset) => (
          <motion.div
            key={asset.id}
            className="featured-card"
            variants={{
              hidden: { opacity: 0, y: 24 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] },
              },
            }}
            whileHover={{ y: -6, transition: { duration: 0.25 } }}
          >
            <motion.div
              className="card-image-container"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.35 }}
            >
              <img
                src={asset.image}
                alt={`${asset.title} by ${asset.artist} — ${asset.price} per share`}
                className="card-image"
                loading="lazy"
                decoding="async"
                onError={(e) => {
                  const t = e.target as HTMLImageElement;
                  if (t.dataset.failed !== '1') {
                    t.dataset.failed = '1';
                    t.onerror = null;
                    t.src = asset.fallback;
                  }
                }}
              />
              <div className="card-gradient-overlay" style={{ background: asset.gradient }} />
            </motion.div>
            <div className="card-body">
              <h3 className="card-title">{asset.title}</h3>
              <p className="card-artist">{asset.artist}</p>
              <div className="card-stats">
                <div className="card-price">
                  <span className="price-label">Price</span>
                  <span className="price-value">{asset.price}</span>
                </div>
                <div className="card-change">
                  <TrendingUp size={14} aria-hidden />
                  <span className="change-value">{asset.change}</span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default FeaturedAssets;
