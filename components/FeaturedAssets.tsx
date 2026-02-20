import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, TrendingUp } from 'lucide-react';
import './FeaturedAssets.css';

const featuredAssets = [
  { id: 1, title: 'Monsoon Nights', artist: 'Priya Sharma', price: '₹5', change: '+12.5%', image: 'https://images.unsplash.com/photo-1768845431893-8e28ed7bf79e?w=800&q=80', gradient: 'linear-gradient(120deg, rgba(5, 150, 105, 0.6) 0%, rgba(37, 99, 235, 0.6) 100%)' },
  { id: 2, title: 'Urban Pulse (Album)', artist: 'Vikram Collective', price: '₹2', change: '+8.2%', image: 'https://images.unsplash.com/photo-1625081822211-7fcd844303d8?w=800&q=80', gradient: 'linear-gradient(45deg, rgba(234, 88, 12, 0.6) 0%, rgba(217, 119, 6, 0.6) 100%)' },
  { id: 3, title: 'Neon City', artist: 'Zara X', price: '₹5', change: '+15.3%', image: 'https://images.unsplash.com/photo-1645523906752-0121f6cdc0da?w=800&q=80', gradient: 'linear-gradient(160deg, rgba(124, 58, 237, 0.6) 0%, rgba(219, 39, 119, 0.6) 100%)' },
  { id: 4, title: 'Indie Collection Vol. 3', artist: 'Various Artists', price: '₹4', change: '+6.8%', image: 'https://images.unsplash.com/photo-1549532313-335d43eb3290?w=800&q=80', gradient: 'linear-gradient(90deg, rgba(29, 78, 216, 0.6) 0%, rgba(14, 165, 233, 0.6) 100%)' },
];

const FeaturedAssets: React.FC = () => (
  <section id="browse" className="featured-assets">
    <div className="container">
      <motion.div className="featured-header" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
        <div className="featured-header-left">
          <div className="featured-label">FEATURED ASSETS</div>
          <h2 className="featured-title">Trending on Kohrus</h2>
        </div>
        <motion.a href="#browse" className="featured-view-all" whileHover={{ x: 4 }} whileTap={{ scale: 0.95 }}>View all assets <ArrowRight size={16} /></motion.a>
      </motion.div>
      <motion.div className="featured-grid" variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } }} initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-50px' }}>
        {featuredAssets.map((asset) => (
          <motion.div key={asset.id} className="featured-card" variants={{ hidden: { opacity: 0, scale: 0.95 }, visible: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: 'easeOut' } } }} whileHover={{ y: -8, transition: { duration: 0.2 } }}>
            <div className="card-image-container">
              <img src={asset.image} alt={asset.title} className="card-image" />
              <div className="card-gradient-overlay" style={{ background: asset.gradient }} />
            </div>
            <div className="card-body">
              <h3 className="card-title">{asset.title}</h3>
              <p className="card-artist">{asset.artist}</p>
              <div className="card-stats">
                <div className="card-price"><span className="price-label">Price</span><span className="price-value">{asset.price}</span></div>
                <div className="card-change"><TrendingUp size={14} /><span className="change-value">{asset.change}</span></div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default FeaturedAssets;
