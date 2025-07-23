'use client';

import {
  Check,
  Globe,
  MousePointer,
  Terminal,
  FileText,
  Sparkles,
} from 'lucide-react';
import React from 'react';

const positionClasses = [
  'top-[-60px] left-[-60px]',
  'top-[-40px] right-[-40px]',
  'bottom-[-60px] left-[-60px]',
  'bottom-[-40px] right-[-40px]',
  'top-[50%] left-[-60px] -translate-y-1/2',
  'top-[30%] right-[-60px] -translate-y-1/2',
];

const features = [
  {
    icon: <Check className="w-6 h-6 text-white" />,
    title: 'Code Analysis',
    description:
      'StorieAI automatically analyzes your codebase structure and generates comprehensive documentation that stays up-to-date with your changes.',
    blobColor: 'bg-purple-400',
    delay: '0s',
    position: positionClasses[0],
  },
  {
    icon: <Globe className="w-6 h-6 text-white" />,
    title: 'Multi-Language Support',
    description:
      'Works seamlessly with JavaScript, TypeScript, Python, Java, C#, Go, Rust, and more. One tool for all your documentation needs.',
    blobColor: 'bg-blue-400',
    delay: '3s',
    position: positionClasses[1],
  },
  {
    icon: <MousePointer className="w-6 h-6 text-white" />,
    title: 'Smart Suggestions',
    description:
      'AI predicts what documentation sections you need next and suggests improvements to make your docs more comprehensive.',
    blobColor: 'bg-pink-400',
    delay: '6s',
    position: positionClasses[2],
  },
  {
    icon: <Terminal className="w-6 h-6 text-white" />,
    title: 'Command Integration',
    description:
      'Press Cmd+Shift+D anywhere in your code to generate documentation for specific functions, classes, or entire modules.',
    blobColor: 'bg-indigo-400',
    delay: '2s',
    position: positionClasses[3],
  },
  {
    icon: <FileText className="w-6 h-6 text-white" />,
    title: 'Multiple Formats',
    description:
      'Export your documentation as Markdown, HTML, PDF, or directly publish to GitHub Wiki, Notion, or Confluence.',
    blobColor: 'bg-rose-400',
    delay: '4s',
    position: positionClasses[4],
  },
  {
    icon: <Sparkles className="w-6 h-6 text-white" />,
    title: 'Template Library',
    description:
      'Choose from pre-built templates for API docs, README files, technical specs, and more. Customize to match your style.',
    blobColor: 'bg-yellow-300',
    delay: '5s',
    position: positionClasses[5],
  },
];

const FeaturesGrid = () => {
  return (
    <section className="relative px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
          <p className="text-xs font-medium tracking-widest text-gray-500 uppercase">
            Features
          </p>
        </div>

        <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-14">
          Not just the best AI documentation tool,
          <br />
          but the best documentation tool — period
        </h2>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative p-6 overflow-hidden border shadow-xl isolate rounded-2xl border-white/10 backdrop-blur-xl bg-white/5"
            >
              {/* Per-tile animated blob */}
              <div
                className={`absolute pointer-events-none ${feature.position} w-[180px] h-[180px] ${feature.blobColor} opacity-20 rounded-full blur-2xl animate-blob z-0`}
                style={{ animationDelay: feature.delay }}
              />

              {/* Tile content */}
              <div className="relative z-10">
                <div className="flex items-center justify-center w-10 h-10 mb-4 rounded-lg bg-gradient-to-tr from-purple-500 to-blue-500">
                  {feature.icon}
                </div>
                <h3 className="mb-3 text-xl font-bold">{feature.title}</h3>
                <p className="leading-relaxed text-gray-600">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesGrid;
