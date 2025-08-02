'use client';
import React from 'react';
import Hero from '@/components/homepage/Hero';
// import Introduction from '@/components/homepage/Introduction';
import Preview from '@/components/homepage/Preview';
import FeaturesGrid from '@/components/homepage/FeaturesGrid';
import Testimonials from '@/components/homepage/Testimonials';
import NavBar from '@/components/layout/NavBar';
import CTA from '@/components/homepage/CTA';
import Footer from '@/components/layout/Footer';
import Stats from '@/components/homepage/Stats';
import { ModelSupport } from '@/components/homepage/ModelSupport';

export default function StorieAiHomepage() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      {/* Navigation */}
      <NavBar />

      <main className="flex-1">
        {/* Hero Section */}
        <Hero />

        {/* Main Feature Section */}
        {/* <Introduction /> */}

        {/* Tab Section */}
        {/* <section className="py-16 px-6">
  <div className="max-w-6xl mx-auto text-center">
    <h2 className="text-4xl md:text-5xl font-bold mb-6">
      Cmd+Shift+D...Document
    </h2>
    <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
      A single keystroke, limitless documentation power, complete flow.
      The full power of StorieAI is exclusive to VS Code with seamless
      integration into your existing workflow.
    </p>

    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
      <div className="bg-gray-50 rounded-xl p-8">
        <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mb-4 mx-auto">
          <Wand2 className="w-6 h-6 text-white" />
        </div>
        <h3 className="text-xl font-bold mb-3">Auto-Documentation</h3>
        <p className="text-gray-600">
          Intelligent documentation generation that understands your code
          structure and creates comprehensive guides automatically.
        </p>
      </div>
      <div className="bg-gray-50 rounded-xl p-8">
        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mb-4 mx-auto">
          <Eye className="w-6 h-6 text-white" />
        </div>
        <h3 className="text-xl font-bold mb-3">Live Preview</h3>
        <p className="text-gray-600">
          See your documentation come to life with real-time previews and
          interactive elements that make complex concepts clear.
        </p>
      </div>
    </div>
  </div>
</section> */}

        {/* Preview Section */}
        {/* <Preview /> */}

        {/* LLM models support*/}
        <ModelSupport />

        {/* Features Grid */}
        {/* <FeaturesGrid /> */}

        {/* Stats Section */}
        {/* <Stats /> */}

        {/* Testimonials Section */}
        <Testimonials />

        {/* CTA Section */}
        <CTA />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
