'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';

export default function ParallaxImages() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const yMain = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
  const yTopLeft = useTransform(scrollYProgress, [0, 1], ['0%', '0%']);
  const yTopRight = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const yBottomRight = useTransform(scrollYProgress, [0, 1], ['0%', '35%']);

  return (
    <div
      ref={ref}
      className="relative flex items-center justify-center h-[1000px]"
    >
      <motion.div style={{ y: yMain }} className="z-10">
        <Image
          src="https://placehold.co/1200x1000/000000/FFFFFF/png"
          alt="Middle"
          width={1200}
          height={1000}
          className="rounded-xl shadow-2xl"
        />
      </motion.div>

      <motion.div
        style={{ y: yTopLeft }}
        className="absolute -top-20 -left-48 z-20"
      >
        <Image
          src="https://placehold.co/400x400/000000/FFFFFF/png"
          alt="Top Left"
          width={400}
          height={400}
          className="rounded-xl shadow-primary"
        />
      </motion.div>

      <motion.div
        style={{ y: yBottomRight }}
        className="absolute bottom-[-60px] right-[-40px] z-20"
      >
        <Image
          src="https://placehold.co/400x400/000000/FFFFFF/png"
          alt="Bottom Right"
          width={400}
          height={400}
          className="rounded-xl shadow-primary"
        />
      </motion.div>

      <motion.div
        style={{ y: yTopRight }}
        className="absolute -top-28 right-[-300px] z-20"
      >
        <Image
          src="https://placehold.co/400x400/000000/FFFFFF/png"
          alt="Top Right"
          width={400}
          height={400}
          className="rounded-xl shadow-primary"
        />
      </motion.div>
    </div>
  );
}
