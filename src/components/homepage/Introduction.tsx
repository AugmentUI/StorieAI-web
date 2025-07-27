import { Brain } from 'lucide-react';
import React from 'react';

const Introduction = () => {
  return (
    <section className="py-16 px-6 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Introducing the evolution of
            <br />
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Documentation
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            StorieAI combines deep codebase understanding, advanced AI models,
            and real-time awareness of your development workflow into a
            powerful, seamless documentation experience.
          </p>
        </div>

        <div className="bg-background rounded-2xl p-8 shadow-lg border border-border mb-12">
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-10 h-10 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center">
              <Brain className="w-5 h-5 text-white" />
            </div>
            <h3 className="text-2xl font-bold">Full contextual awareness</h3>
          </div>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Deep contextual awareness allows you to run StorieAI on production
            codebases and still get relevant, accurate documentation that
            understands your project&apos;s unique architecture and patterns.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
