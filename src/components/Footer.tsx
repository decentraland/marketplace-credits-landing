import React from 'react';

const Footer = () => {
  return (
    <footer className="relative z-10 bg-black/50 backdrop-blur-sm border-t border-white/10 py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-white/70">
          <a 
            href="https://decentraland.org/privacy/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-white transition-colors underline underline-offset-4"
          >
            Privacy Policy
          </a>
          <span className="hidden sm:block">•</span>
          <a 
            href="https://decentraland.org/terms/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-white transition-colors underline underline-offset-4"
          >
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;