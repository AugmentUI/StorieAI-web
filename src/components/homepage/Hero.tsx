'use client';
import { Bot, Download } from 'lucide-react';
import { Button } from '../ui/moving-border';
import { useRef } from 'react';
import ParallaxImages from './ParallaxImages';

export default function Hero() {
  const ref = useRef(null);

  return (
    <section className="relative py-16 px-6 overflow-hidden" ref={ref}>
      {/* Animated blobs */}
      <div className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] bg-[hsl(var(--primary)/0.3)] opacity-30 rounded-full filter blur-3xl mix-blend-multiply animate-blob z-0" />
      <div className="absolute top-0 right-[-120px] w-[400px] h-[400px] bg-[hsl(var(--secondary)/0.3)] opacity-30 rounded-full filter blur-3xl mix-blend-multiply animate-blob z-0 animation-delay-[3s]" />
      <div className="absolute bottom-[-120px] left-[30%] w-[400px] h-[400px] bg-[hsl(var(--accent)/0.3)] opacity-30 rounded-full filter blur-3xl mix-blend-multiply animate-blob z-0 animation-delay-[6s]" />

      {/* Hero content */}
      <div className="relative max-w-4xl mx-auto text-center z-10">
        <Button
          duration={4000}
          className="relative inline-flex items-center space-x-2 bg-card rounded-full px-4 py-2 mb-8 overflow-hidden isolate"
        >
          <Bot className="w-4 h-4 text-purple-600 relative z-10" />
          <span className="text-sm text-gray-700 relative z-10">
            The first AI-native documentation generator for VS Code
          </span>
        </Button>

        <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
          Built to Keep You
          <br />
          <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            in Flow State
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
          The first AI documentation assistant, and then some. StorieAI is where
          the work of developers and AI truly flow together, creating
          documentation that feels like literal magic.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="bg-primary hover:brightness-110 text-primary-foreground px-8 py-4 rounded-xl text-lg font-semibold transition-all flex items-center space-x-2">
            <Download className="w-5 h-5" />
            <span>Install from VS Code for MacOS</span>
          </button>
        </div>
        <div className="mt-24">
          <ParallaxImages />
        </div>
      </div>
    </section>
  );
}
