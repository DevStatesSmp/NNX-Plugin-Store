import React from 'react';
import { Zap, Box, Lock, Server } from 'lucide-react';
import { FadeIn } from './animations/FadeIn';

export const StatusSection: React.FC = () => {
  return (
    <section className="py-16">
      <div className="text-center mb-16">
        <FadeIn>
          <h2 className="text-3xl font-bold mb-6">Lightweight Security Tool</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            NO_ONX provides powerful security features in a lightweight package. The NNX Plugin Store extends its capabilities with community-driven plugins.
          </p>
        </FadeIn>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <FeatureCard 
          icon={<Zap className="w-8 h-8 text-blue-500" />}
          title="Lightweight"
          description="Minimal resource usage while providing maximum security benefits"
        />
        <FeatureCard 
          icon={<Box className="w-8 h-8 text-indigo-500" />}
          title="Extensible"
          description="Add new capabilities through the upcoming plugin ecosystem"
        />
        <FeatureCard 
          icon={<Lock className="w-8 h-8 text-emerald-500" />}
          title="Secure"
          description="Built with security as the primary focus from the ground up"
        />
        <FeatureCard 
          icon={<Server className="w-8 h-8 text-amber-500" />}
          title="Open Source"
          description="Community-driven development with transparency at its core"
        />
      </div>
    </section>
  );
};

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <FadeIn>
      <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700 transition-all duration-300 hover:bg-gray-800 hover:border-gray-600 hover:transform hover:-translate-y-1 hover:shadow-xl shadow-blue-900/20">
        <div className="flex flex-col items-center text-center">
          <div className="mb-4 p-3 rounded-full bg-gray-700/50">
            {icon}
          </div>
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <p className="text-gray-400">{description}</p>
        </div>
      </div>
    </FadeIn>
  );
};