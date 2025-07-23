import { FileText } from 'lucide-react';
import React from 'react';

const Footer = () => {
  return (
    <footer className="py-12 border-t border-gray-200 bg-gray-50">
      <div className="max-w-6xl px-6 mx-auto">
        <div className="flex flex-col items-center justify-between md:flex-row">
          <div className="flex items-center mb-4 space-x-3 md:mb-0">
            <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600">
              <FileText className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold">StorieAI</span>
          </div>
          <div className="flex mb-4 space-x-8 text-gray-600 md:mb-0">
            <a href="#" className="transition-colors hover:text-black">
              Privacy
            </a>
            <a href="#" className="transition-colors hover:text-black">
              Terms
            </a>
            <a href="#" className="transition-colors hover:text-black">
              Support
            </a>
            <a href="#" className="transition-colors hover:text-black">
              Docs
            </a>
          </div>
          <div className="text-gray-500">
            © 2025 StorieAI. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
