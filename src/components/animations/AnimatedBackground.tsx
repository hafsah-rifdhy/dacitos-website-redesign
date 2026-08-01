"use client";

import { motion } from "framer-motion";

export default function AnimatedBackground() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {/* Grid */}

      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: `
          linear-gradient(rgba(255,255,255,.12) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,.12) 1px, transparent 1px)
        `,
          backgroundSize: "70px 70px",
        }}
      />

      {/* Aurora */}

      <motion.div
        animate={{
          x: [0, 150, -120, 0],
          y: [0, -120, 80, 0],
          scale: [1, 1.25, 0.9, 1],
        }}
        transition={{
          repeat: Infinity,
          duration: 20,
          ease: "easeInOut",
        }}
        className="absolute -left-40 top-10 h-[650px] w-[650px] rounded-full bg-violet-600/20 blur-[180px]"
      />

      <motion.div
        animate={{
          x: [0, -150, 100, 0],
          y: [0, 100, -80, 0],
          scale: [1, 0.85, 1.2, 1],
        }}
        transition={{
          repeat: Infinity,
          duration: 24,
          ease: "easeInOut",
        }}
        className="absolute right-0 bottom-0 h-[650px] w-[650px] rounded-full bg-cyan-500/15 blur-[180px]"
      />

      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          repeat: Infinity,
          duration: 80,
          ease: "linear",
        }}
        className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-fuchsia-500/10 blur-[170px]"
      />
    </div>
  );
}