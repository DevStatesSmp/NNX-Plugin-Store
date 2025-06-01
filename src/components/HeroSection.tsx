import React, { useEffect, useState } from 'react';
import { Shield, Github, ExternalLink } from 'lucide-react';
import { FadeIn } from './animations/FadeIn';

export const HeroSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="py-20 flex flex-col items-center justify-center">
      <FadeIn show={isVisible} delay={100}>
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-indigo-600">
            NNX Plugin Store
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            The official plugins store for NO_ONX
          </p>
        </div>
      </FadeIn>

      <FadeIn show={isVisible} delay={300}>
        <div className="mb-10 transition-transform hover:scale-105 duration-300">
          <a href="https://github.com/DevStatesSmp/NO_ONX" className="block">
            <img 
              src="https://github.com/user-attachments/assets/dd3b4b8d-ec74-429b-a629-2c1b1f3d6aac" 
              alt="NO_ONX Logo" 
              className="w-40 h-40 object-contain mx-auto"
            />
          </a>
        </div>
      </FadeIn>

      <FadeIn show={isVisible} delay={500}>
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <BadgeLink 
            href="https://github.com/DevStatesSmp/NO_ONX/releases/tag/beta-v0.3.1"
            icon={<Shield className="w-4 h-4" />}
            text="NO_ONX v0.3.1 Beta"
            color="bg-gradient-to-r from-orange-500 to-amber-600"
          />
          <BadgeLink 
            href="https://t.me/+-hUpHRhvj9wyYmE1"
            icon={<ExternalLink className="w-4 h-4" />}
            text="Telegram: Bug report and feedback"
            color="bg-gradient-to-r from-blue-500 to-cyan-600"
          />
          <BadgeLink 
            href="https://github.com/DevStatesSmp/NO_ONX/blob/main/CHANGELOG.md"
            icon={<Github className="w-4 h-4" />}
            text="Changelog"
            color="bg-gradient-to-r from-red-500 to-rose-600"
          />
          <BadgeLink 
            href="https://github.com/DevStatesSmp/NO_ONX/blob/main/LICENSE"
            icon={<Github className="w-4 h-4" />}
            text="License"
            color="bg-gradient-to-r from-purple-500 to-violet-600"
          />
          <BadgeLink 
            href="https://github.com/DevStatesSmp/NO_ONX/wiki"
            icon={<Github className="w-4 h-4" />}
            text="NO_ONX Wiki"
            color="bg-gradient-to-r from-yellow-500 to-amber-600"
          />
        </div>
      </FadeIn>
    </section>
  );
};

interface BadgeLinkProps {
  href: string;
  icon: React.ReactNode;
  text: string;
  color: string;
}

const BadgeLink: React.FC<BadgeLinkProps> = ({ href, icon, text, color }) => {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      className={`inline-flex items-center px-4 py-2 rounded-full ${color} text-white text-sm font-medium transition-all duration-300 hover:shadow-lg hover:scale-105`}
    >
      <span className="mr-2">{icon}</span>
      <span>{text}</span>
    </a>
  );
};