import { Download } from 'lucide-react';
import React from 'react';

const CTA = () => {
  return (
    <section className="py-20 px-6 bg-black text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Ready to transform your
          <br />
          documentation workflow?
        </h2>
        <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
          Join thousands of developers who&apos;ve already discovered the power
          of AI-assisted documentation. Install StorieAI and experience the
          future of code documentation.
        </p>
        <button className="bg-white hover:bg-gray-100 text-black px-12 py-4 rounded-xl text-xl font-semibold transition-all flex items-center space-x-2 mx-auto">
          <Download className="w-6 h-6" />
          <span>Install StorieAI Extension</span>
        </button>
        <p className="text-gray-400 mt-4">
          Free for individual developers • Pro plans for teams
        </p>
      </div>
    </section>
  );
};

export default CTA;
