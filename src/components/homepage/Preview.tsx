import React from 'react';

const Preview = () => {
  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          StorieAI Previews.
          <br />
          <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            See it. Shape it. Share it.
          </span>
        </h2>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          See your documentation live in VS Code, click on any section, and let
          StorieAI reshape it instantly—exactly how you want
        </p>
        <p className="text-lg text-gray-500 mb-12">
          From draft to documentation - without ever leaving your editor
        </p>

        <div className="bg-white rounded-2xl p-12 shadow-xl border border-gray-200">
          <div className="text-center text-gray-400 text-lg">
            [Interactive Documentation Preview Demo]
          </div>
        </div>
      </div>
    </section>
  );
};

export default Preview;
