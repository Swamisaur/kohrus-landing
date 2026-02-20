/**
 * Kohrus Landing Page — Root component
 */
import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import SocialProof from './components/SocialProof';
import HowItWorks from './components/HowItWorks';
import FeaturedAssets from './components/FeaturedAssets';
import CTA from './components/CTA';
import Footer from './components/Footer';

const App: React.FC = () => (
  <div className="app">
    <Navigation />
    <Hero />
    <SocialProof />
    <HowItWorks />
    <FeaturedAssets />
    <CTA />
    <Footer />
  </div>
);

export default App;
