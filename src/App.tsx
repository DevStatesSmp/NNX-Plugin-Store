import React from 'react';
import { Layout } from './components/Layout';
import { HeroSection } from './components/HeroSection';
import { StatusSection } from './components/StatusSection';
import { ComingSoonSection } from './components/ComingSoonSection';
import { Footer } from './components/Footer';
import ParticleBackground from './components/ParticleBackground';

function App() {
  return (
    <Layout>
      <ParticleBackground />
      <div className="relative z-10">
        <HeroSection />
        <StatusSection />
        <ComingSoonSection />
        <Footer />
      </div>
    </Layout>
  );
}

export default App;