'use client';

import { Bedrock, OpenAI, Anthropic } from '@lobehub/icons';
import React from 'react';

export const ModelSupport = () => {
  return (
    <section className="relative px-6 pt-2 pb-16">
      <div className="mx-auto max-w-7xl">
        {/* Animated blobs */}
        {/* <div className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] bg-[hsl(var(--primary)/0.3)] opacity-30 rounded-full filter blur-3xl mix-blend-multiply animate-blob z-0" />
        <div className="absolute top-0 right-[-120px] w-[400px] h-[400px] bg-[hsl(var(--secondary)/0.3)] opacity-30 rounded-full filter blur-3xl mix-blend-multiply animate-blob z-0 animation-delay-[3s]" />
        <div className="absolute bottom-[-120px] left-[30%] w-[400px] h-[400px] bg-[hsl(var(--accent)/0.3)] opacity-30 rounded-full filter blur-3xl mix-blend-multiply animate-blob z-0 animation-delay-[6s]" /> */}
        <div className="flex flex-col items-center justify-center w-full px-5 mx-auto gap-14 md:gap-12">
          <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl mb-14 text-right">
            First-class support for every major model provider
          </h2>
          {/* <p className="text-sm text-center text-muted-foreground md:text-base"></p> */}

          <div className="flex flex-wrap items-center justify-center gap-10 lg:gap-20">
            {/* OpenAI */}
            <OpenAI size={80} className="opacity-90" />

            {/* Claude (Anthropic) */}
            <Anthropic size={80} className="opacity-90" />

            {/* Amazon Bedrock */}
            <Bedrock size={80} className="opacity-90" />
          </div>
        </div>
      </div>
    </section>
  );
};
