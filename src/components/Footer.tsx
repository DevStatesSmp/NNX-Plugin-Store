import React from 'react';
import { Github, MessageCircle, BookOpen, Code, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-12 border-t border-gray-800">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold mb-2">NNX Plugin Store</h3>
            <p className="text-gray-400">Extending NO_ONX with powerful plugins</p>
          </div>
          
          <div className="flex gap-4">
            <FooterLink href="https://github.com/DevStatesSmp/NO_ONX" icon={<Github className="w-5 h-5" />} />
            <FooterLink href="https://t.me/+-hUpHRhvj9wyYmE1" icon={<MessageCircle className="w-5 h-5" />} />
            <FooterLink href="https://github.com/DevStatesSmp/NO_ONX/wiki" icon={<BookOpen className="w-5 h-5" />} />
            <FooterLink href="https://github.com/DevStatesSmp/NO_ONX/blob/main/CHANGELOG.md" icon={<Code className="w-5 h-5" />} />
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 mt-8 text-center text-gray-400">
          <div className="mb-4">
            <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2">
              <li><a href="#" className="hover:text-blue-400 transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">About</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">GitHub</a></li>
            </ul>
          </div>
          
          <p className="flex items-center justify-center gap-1">
            Made with <Heart className="w-4 h-4 text-red-500" /> for the NO_ONX community
          </p>
          <p className="mt-2">
            © {new Date().getFullYear()} NNX Plugin Store. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

interface FooterLinkProps {
  href: string;
  icon: React.ReactNode;
}

const FooterLink: React.FC<FooterLinkProps> = ({ href, icon }) => {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      className="p-3 bg-gray-800 rounded-full text-gray-400 transition-all duration-300 hover:bg-gray-700 hover:text-white hover:scale-110"
    >
      {icon}
    </a>
  );
};