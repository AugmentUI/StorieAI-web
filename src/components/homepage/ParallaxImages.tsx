"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Coverage from "@/assets/parallax/coverage.png";
import Setup from "@/assets/parallax/setup.png";
import AIProvider from "@/assets/parallax/aiprovider.png";
import { useRef } from "react";

export default function ParallaxImages() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // const yMain = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
  // const yTopLeft = useTransform(scrollYProgress, [0, 1], ['0%', '0%']);
  // const yTopRight = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  // const yBottomRight = useTransform(scrollYProgress, [0, 1], ['0%', '35%']);

  const yMain = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const yTopLeft = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const yTopRight = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const yBottomRight = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);

  return (
    <div
      ref={ref}
      className="relative flex items-center justify-center h-[1200px]"
    >
      <motion.div style={{ y: yMain }} className="z-10">
        <Image
          src="https://placehold.co/1200x1000/000000/FFFFFF/png"
          alt="Middle"
          width={1200}
          height={1000}
          className="rounded-xl shadow-lg"
        />
      </motion.div>

      <motion.div
        style={{ y: yTopLeft }}
        className="absolute top-36 -left-80 z-20"
      >
        <Image
          src={Coverage}
          alt="Top Left"
          width={400}
          height={400}
          className="rounded-xl shadow-lg"
        />
      </motion.div>

      <motion.div
        style={{ y: yBottomRight }}
        className="absolute bottom-[-60px] right-[-200px] z-20"
      >
        <Image
          src={Setup}
          alt="Bottom Right"
          width={400}
          height={400}
          className="rounded-xl shadow-lg"
        />
      </motion.div>

      <motion.div
        style={{ y: yTopRight }}
        className="absolute right-[-300px] z-20 top-10"
      >
        <Image
          src={AIProvider}
          alt="Top Right"
          width={400}
          height={400}
          className="rounded-xl shadow-lg"
        />
      </motion.div>
    </div>
  );
}
