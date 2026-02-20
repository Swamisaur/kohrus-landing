import React from 'react';
import { motion } from 'framer-motion';
import { Twitter, Instagram, Linkedin } from 'lucide-react';
import './Footer.css';

const footerLinks = {
  platform: [
    { label: 'Browse Assets', href: '#browse' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Pricing', href: '#pricing' },
  ],
  artists: [
    { label: 'List Your Music', href: '#artists' },
    { label: 'Artist Dashboard', href: '#artists' },
    { label: 'Success Stories', href: '#artists' },
  ],
  legal: [
    { label: 'Terms of Service', href: '#legal' },
    { label: 'Privacy Policy', href: '#legal' },
    { label: 'SEBI Compliance', href: '#legal' },
  ],
};

const socialLinks = [
  { icon: Twitter, href: 'https://twitter.com/kohrus' },
  { icon: Instagram, href: 'https://instagram.com/kohrus' },
  { icon: Linkedin, href: 'https://linkedin.com/company/kohrus' },
];

const Footer: React.FC = () => (
  <footer className="footer">
    <div className="container">
      <div className="footer-top">
        <div className="footer-brand">
          <h3 className="footer-logo">kohrus</h3>
          <p className="footer-description">The Stock Market for Music. Invest in songs, earn royalties, trade shares.</p>
        </div>
        <div className="footer-column">
          <h4 className="footer-column-title">Platform</h4>
          <ul className="footer-links">
            {footerLinks.platform.map((link) => (
              <li key={link.label}><a href={link.href} className="footer-link">{link.label}</a></li>
            ))}
          </ul>
        </div>
        <div className="footer-column">
          <h4 className="footer-column-title">For Artists</h4>
          <ul className="footer-links">
            {footerLinks.artists.map((link) => (
              <li key={link.label}><a href={link.href} className="footer-link">{link.label}</a></li>
            ))}
          </ul>
        </div>
        <div className="footer-column">
          <h4 className="footer-column-title">Legal</h4>
          <ul className="footer-links">
            {footerLinks.legal.map((link) => (
              <li key={link.label}><a href={link.href} className="footer-link">{link.label}</a></li>
            ))}
          </ul>
        </div>
      </div>
      <div className="footer-divider" />
      <div className="footer-bottom">
        <p className="footer-copyright">© 2026 Kohrus Technologies Pvt. Ltd. All rights reserved.</p>
        <div className="footer-social">
          {socialLinks.map((social, index) => {
            const Icon = social.icon;
            return (
              <motion.a key={index} href={social.href} target="_blank" rel="noopener noreferrer" className="social-icon" whileHover={{ scale: 1.2, color: 'white' }} whileTap={{ scale: 0.9 }}>
                <Icon size={18} />
              </motion.a>
            );
          })}
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
