import { Download } from "lucide-react";
import React from "react";

const CTA = () => {
  return (
    <section className="py-20 px-6 bg-primary text-primary-foreground">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Ready to transform your
          <br />
          storybook workflow?
        </h2>
        <p className="text-xl text-primary-foreground mb-12 max-w-3xl mx-auto">
          Generate clean stories from your components, track coverage, and run
          Storybook—AI-powered, right inside VS Code. Install StorieAI and keep
          your team in flow.
        </p>
        <button className="bg-background text-foreground px-12 py-4 rounded-xl text-xl font-semibold transition-all flex items-center space-x-2 mx-auto">
          <Download className="w-6 h-6" />
          <a
            href="https://marketplace.visualstudio.com/items?itemName=StorieAI.storieai"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>Install StorieAI Extension</span>
          </a>
        </button>
        <p className="mt-4 text-accent">
          Free for individual developers, team and enterprise.
        </p>
      </div>
    </section>
  );
};

export default CTA;
