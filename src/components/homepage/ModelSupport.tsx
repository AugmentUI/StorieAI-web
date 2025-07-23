'use client';

import { Bedrock, OpenAI, Anthropic } from '@lobehub/icons';
import React from 'react';

export const ModelSupport = () => {
  return (
    <div className="relative py-20 text-black md:py-28">
      {/* Animated blobs */}
      <div className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] bg-purple-300 opacity-30 rounded-full filter blur-3xl mix-blend-multiply animate-blob z-0" />
      <div className="absolute top-0 right-[-120px] w-[400px] h-[400px] bg-blue-300 opacity-30 rounded-full filter blur-3xl mix-blend-multiply animate-blob z-0 animation-delay-[3s]" />
      <div className="absolute bottom-[-120px] left-[30%] w-[400px] h-[400px] bg-pink-300 opacity-30 rounded-full filter blur-3xl mix-blend-multiply animate-blob z-0 animation-delay-[6s]" />
      <div className="flex flex-col items-center justify-center w-full px-5 mx-auto gap-14 md:gap-12">
        <p className="text-sm text-center text-gray-600 md:text-base">
          First-class support for every major model provider
        </p>

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
  );
};
