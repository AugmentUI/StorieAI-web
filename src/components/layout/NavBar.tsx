import { Download, FileText } from 'lucide-react';
import React from 'react';

const NavBar = () => {
  return (
    <nav className="flex items-center justify-between p-6 border-b border-gray-100 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="flex items-center space-x-3">
        <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
          <FileText className="w-5 h-5 text-white" />
        </div>
        <span className="text-xl font-bold">StorieAI</span>
      </div>
      <div className="hidden md:flex items-center space-x-8">
        <a
          href="#"
          className="text-gray-600 hover:text-black transition-colors"
        >
          Product
        </a>
        <a
          href="#"
          className="text-gray-600 hover:text-black transition-colors"
        >
          Features
        </a>
        <a
          href="#"
          className="text-gray-600 hover:text-black transition-colors"
        >
          Pricing
        </a>
        <a
          href="#"
          className="text-gray-600 hover:text-black transition-colors"
        >
          Docs
        </a>
      </div>
      {/* <button className="bg-black hover:bg-gray-800 text-white px-6 py-2 rounded-lg transition-colors flex items-center space-x-2">
    <Download className="w-4 h-4" />
    <span>Install Extension</span>
  </button> */}

      <button className="relative bg-black hover:bg-gray-800 text-white px-6 py-2 rounded-full overflow-hidden isolate transition-colors flex items-center space-x-2">
        {/* Glowing animated border sweep */}
        <div className="absolute inset-0 rounded-full pointer-events-none border-spin-mask">
          <div className="absolute left-1/2 top-1/2 w-full animate-spin-sweep rounded-full border-conic"></div>
        </div>

        {/* Button content */}
        <Download className="w-4 h-4 relative z-10" />
        <span className="relative z-10">Install Extension</span>
      </button>
    </nav>
  );
};

export default NavBar;
