import React from 'react';
import StorieAILogo from '../shared/StorieAILogo';

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border bg-card">
      <div className="max-w-6xl px-6 mx-auto">
        <div className="flex flex-col items-center justify-between md:flex-row">
          <div className="flex items-center mb-4 space-x-3 md:mb-0">
            <StorieAILogo />
          </div>
          <div className="flex mb-4 space-x-8 text-muted-foreground md:mb-0">
            <a href="#" className="transition-colors hover:text-black">
              Privacy
            </a>
            <a href="#" className="transition-colors hover:text-black">
              Terms
            </a>
            <a
              href="https://github.com/AugmentUI/StorieAI/issues"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-black"
            >
              Support
            </a>
            <a
              href="https://marketplace.visualstudio.com/items?itemName=StorieAI.storieai"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-black"
            >
              Docs
            </a>
          </div>
          <div className="text-muted-foreground">
            © 2025 AugmentUI. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
