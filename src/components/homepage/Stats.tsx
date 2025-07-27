import React from 'react';

const Stats = () => {
  return (
    <section className="py-16 px-6 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">The StorieAI Extension</h2>
          <p className="text-xl text-muted-foreground">
            The AI engine behind the world&apos;s leading development teams.
          </p>
          <p className="text-lg text-muted-foreground">
            Backed by data. Proven in production.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-600 mb-2">500K+</div>
            <div className="text-muted-foreground font-medium mb-2">
              Lines of documentation generated daily
            </div>
            <div className="text-sm text-muted-foreground">
              Between auto-docs, smart suggestions, and AI capabilities,
              StorieAI generates accurate, production-ready documentation.
            </div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">50K+</div>
            <div className="text-muted-foreground font-medium mb-2">
              Active VS Code users
            </div>
            <div className="text-sm text-muted-foreground">
              Join developers around the world who use StorieAI to supercharge
              their documentation workflow.
            </div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-green-600 mb-2">85%</div>
            <div className="text-muted-foreground font-medium mb-2">
              Time saved on documentation
            </div>
            <div className="text-sm text-muted-foreground">
              Our AI removes the vast time spent on manual documentation so you
              can focus on building great software.
            </div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-orange-600 mb-2">200+</div>
            <div className="text-muted-foreground font-medium mb-2">
              Enterprise teams using StorieAI
            </div>
            <div className="text-sm text-muted-foreground">
              StorieAI powers documentation workflows for mission-critical
              systems at leading companies.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
