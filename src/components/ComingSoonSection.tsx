import React, { useState, useEffect } from 'react';
import { FadeIn } from './animations/FadeIn';

export const ComingSoonSection: React.FC = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    // Set a future release date (placeholder - approximately 1 month from now)
    const releaseDate = new Date();
    releaseDate.setMonth(releaseDate.getMonth() + 1);
    
    const timer = setInterval(() => {
      const now = new Date();
      const difference = releaseDate.getTime() - now.getTime();
      
      const d = Math.floor(difference / (1000 * 60 * 60 * 24));
      const h = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const s = Math.floor((difference % (1000 * 60)) / 1000);
      
      setDays(d);
      setHours(h);
      setMinutes(m);
      setSeconds(s);
      
      if (difference <= 0) {
        clearInterval(timer);
      }
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20">
      <FadeIn>
        <div className="bg-gradient-to-r from-gray-800/60 to-gray-900/60 rounded-2xl p-8 border border-gray-700 shadow-xl shadow-blue-900/10">
          <div className="text-center mb-10">
            <div className="inline-block px-4 py-1 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full text-white text-sm font-medium mb-4">
              Coming Soon
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">NNX Plugin Store</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Still in development, NNX Plugin Store will be available after <span className="text-blue-400 font-semibold">v0.3.2 beta release</span>.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto mb-10">
            <CountdownItem value={days} label="Days" />
            <CountdownItem value={hours} label="Hours" />
            <CountdownItem value={minutes} label="Minutes" />
            <CountdownItem value={seconds} label="Seconds" />
          </div>
          
          <div className="max-w-md mx-auto">
            <div className="relative">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button className="absolute right-1 top-1 px-4 py-2 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-md text-white font-medium transition-all hover:shadow-lg hover:opacity-90">
                Notify Me
              </button>
            </div>
            <p className="text-gray-500 text-sm text-center mt-2">
              Get notified when the NNX Plugin Store launches.
            </p>
          </div>
        </div>
      </FadeIn>
      
      <div className="mt-16">
        <FadeIn>
          <h3 className="text-2xl font-bold text-center mb-8">Planned Features</h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeaturePreviewCard 
              title="Plugin Discovery"
              description="Browse and search through a curated collection of security plugins"
            />
            <FeaturePreviewCard 
              title="One-Click Installation"
              description="Seamlessly install plugins directly within NO_ONX"
            />
            <FeaturePreviewCard 
              title="Verified Publishers"
              description="Trust plugins from verified and trusted developers"
            />
            <FeaturePreviewCard 
              title="Rating System"
              description="Community-driven plugin ratings and reviews"
            />
            <FeaturePreviewCard 
              title="Update Management"
              description="Automatic notifications for plugin updates"
            />
            <FeaturePreviewCard 
              title="Developer Portal"
              description="Tools for developers to create and publish plugins"
            />
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

interface CountdownItemProps {
  value: number;
  label: string;
}

const CountdownItem: React.FC<CountdownItemProps> = ({ value, label }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="w-full aspect-square flex items-center justify-center bg-gray-800 rounded-lg border border-gray-700 mb-2">
        <span className="text-3xl md:text-4xl font-bold text-blue-400">{value}</span>
      </div>
      <span className="text-gray-400">{label}</span>
    </div>
  );
};

interface FeaturePreviewCardProps {
  title: string;
  description: string;
}

const FeaturePreviewCard: React.FC<FeaturePreviewCardProps> = ({ title, description }) => {
  return (
    <div className="bg-gray-800/30 rounded-lg p-6 border border-gray-800 transition-all duration-300 hover:bg-gray-800/50 hover:border-gray-700">
      <h4 className="text-lg font-semibold mb-2 text-blue-300">{title}</h4>
      <p className="text-gray-400">{description}</p>
    </div>
  );
};