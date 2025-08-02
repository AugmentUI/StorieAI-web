'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import Coverage from '@/assets/parallax/coverage.png';
import Setup from '@/assets/parallax/setup.png';
import AIProvider from '@/assets/parallax/aiprovider.png';
import { useRef } from 'react';

export default function ParallaxImages() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const yMain = useTransform(scrollYProgress, [0, 1], ['-20%', '20%']);
  const yTopLeft = useTransform(scrollYProgress, [0, 1], ['-40%', '40%']);
  const yTopRight = useTransform(scrollYProgress, [0, 1], ['-30%', '30%']);
  const yBottomRight = useTransform(scrollYProgress, [0, 1], ['-50%', '50%']);

  const scaleMain = useTransform(scrollYProgress, [0, 1], [1, 1.05]);
  const scaleTopLeft = useTransform(scrollYProgress, [0, 1], [1.05, 1]);
  const scaleBottomRight = useTransform(scrollYProgress, [0, 1], [0.95, 1.1]);

  return (
    <div
      ref={ref}
      className="relative flex items-center justify-center h-[1200px]"
    >
      <motion.div style={{ y: yMain, scale: scaleMain }} className="z-10">
        <video
          autoPlay
          loop
          muted
          playsInline
          width={1200}
          height={1000}
          className="rounded-xl shadow-2xl transition-all duration-500"
          poster="/StorieAI-demo.png" // optional still image fallback
        >
          {/* <source src="/storieai-demo.webm" type="video/webm" /> */}
          <source src="/StorieAI-demo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </motion.div>

      <motion.div
        style={{ y: yTopLeft, scale: scaleTopLeft }}
        className="absolute top-36 -left-80 z-20"
      >
        <Image
          src={Coverage}
          alt="Storybook coverage visualization – StorieAI demo"
          width={400}
          height={400}
          className="rounded-xl shadow-2xl opacity-95 transition-all duration-500"
        />
      </motion.div>

      <motion.div
        style={{ y: yBottomRight, scale: scaleBottomRight }}
        className="absolute bottom-[-10px] right-[-300px] z-20"
      >
        <Image
          src={Setup}
          alt="Developer setup flow automated by StorieAI"
          width={400}
          height={400}
          className="rounded-xl shadow-2xl opacity-95 transition-all duration-500"
        />
      </motion.div>

      <motion.div
        style={{ y: yTopRight }}
        className="absolute right-[-300px] z-20 top-10"
      >
        <Image
          src={AIProvider}
          alt="AI code understanding and story generation – StorieAI"
          width={400}
          height={400}
          className="rounded-xl shadow-2xl opacity-95 transition-all duration-500"
        />
      </motion.div>
    </div>
  );
}
