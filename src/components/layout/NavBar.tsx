import { Download } from "lucide-react";

import React from "react";
import { ThemeToggle } from "../shared/ThemeToggle";
import StorieAILogo from "../shared/StorieAILogo";

const NavBar = () => {
  return (
    <nav className="flex items-center justify-between p-6 border-b sticky top-0 z-50 backdrop-blur-sm bg-background/80 border-border supports-[backdrop-filter]:bg-background/60 transition-colors sticky top-0 z-50 backdrop-blur-lg shadow-sm dark:shadow-md">
      <div className="flex items-center space-x-3">
        <StorieAILogo />
      </div>
      {/* <div className="hidden md:flex items-center space-x-8">
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
      </div> */}
      {/* <button className="bg-black hover:bg-gray-800 text-white px-6 py-2 rounded-lg transition-colors flex items-center space-x-2">
    <Download className="w-4 h-4" />
    <span>Install Extension</span>
  </button> */}

      <div className="flex justify-between gap-4">
        <button className="relative bg-primary hover:brightness-110 text-primary-foreground px-6 py-2 rounded-full overflow-hidden isolate transition-colors flex items-center space-x-2">
          {/* Glowing animated border sweep */}
          <div className="absolute inset-0 rounded-full pointer-events-none border-spin-mask">
            <div className="absolute left-1/2 top-1/2 w-full animate-spin-sweep rounded-full border-conic"></div>
          </div>

          {/* Button content */}
          <Download className="w-4 h-4 relative z-10" />
          <a
            href="https://marketplace.visualstudio.com/items?itemName=StorieAI.storieai"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="relative z-10">Install Extension</span>
          </a>
        </button>
        <div className="flex items-center space-x-4">
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
