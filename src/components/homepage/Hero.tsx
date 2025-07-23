'use client';
import { Bot, Download, Play } from 'lucide-react';
import { Button } from '../ui/moving-border';

export default function Hero() {
  return (
    <section className="relative pt-20 pb-16 px-6 overflow-hidden">
      {/* Animated blobs */}
      <div className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] bg-purple-300 opacity-30 rounded-full filter blur-3xl mix-blend-multiply animate-blob z-0" />
      <div className="absolute top-0 right-[-120px] w-[400px] h-[400px] bg-blue-300 opacity-30 rounded-full filter blur-3xl mix-blend-multiply animate-blob z-0 animation-delay-[3s]" />
      <div className="absolute bottom-[-120px] left-[30%] w-[400px] h-[400px] bg-pink-300 opacity-30 rounded-full filter blur-3xl mix-blend-multiply animate-blob z-0 animation-delay-[6s]" />

      {/* Hero content */}
      <div className="relative max-w-4xl mx-auto text-center z-10">
        {/* <div className="inline-flex items-center space-x-2 bg-gray-50 border border-gray-200 rounded-full px-4 py-2 mb-8">
          <Bot className="w-4 h-4 text-purple-600" />
          <span className="text-sm text-gray-700">
            The first AI-native documentation generator for VS Code
          </span>
        </div> */}

        {/* <div className="relative inline-flex items-center space-x-2 bg-gray-50 rounded-full px-4 py-2 mb-8 overflow-hidden isolate">
          <div className="absolute inset-0 rounded-full pointer-events-none glow-ring-mask">
            <div className="absolute left-1/2 top-1/2 w-[220%] h-[220%] animate-spin-sweep rounded-full glow-ring-gradient"></div>
          </div>

          <Bot className="w-4 h-4 text-purple-600 relative z-10" />
          <span className="text-sm text-gray-700 relative z-10">
            The first AI-native documentation generator for VS Code
          </span>
        </div> */}

        <Button
          duration={4000}
          className="relative inline-flex items-center space-x-2 bg-gray-50 rounded-full px-4 py-2 mb-8 overflow-hidden isolate"
        >
          <Bot className="w-4 h-4 text-purple-600 relative z-10" />
          <span className="text-sm text-gray-700 relative z-10">
            The first AI-native documentation generator for VS Code
          </span>
        </Button>

        <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
          Built to Keep You
          <br />
          <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            in Flow State
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
          The first AI documentation assistant, and then some. StorieAI is where
          the work of developers and AI truly flow together, creating
          documentation that feels like literal magic.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="bg-black hover:bg-gray-800 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all flex items-center space-x-2">
            <Download className="w-5 h-5" />
            <span>Install from VS Code for MacOS</span>
          </button>
          {/* <button className="border border-gray-300 hover:border-gray-400 text-black px-8 py-4 rounded-xl text-lg font-semibold transition-all flex items-center space-x-2">
            <Play className="w-5 h-5" />
            <span>Watch Demo</span>
          </button> */}
        </div>
      </div>
    </section>
  );
}
