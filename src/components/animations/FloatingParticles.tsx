"use client";

import { motion } from "framer-motion";

const particles = Array.from({ length: 20 });

export default function FloatingParticles() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
      {particles.map((_, index) => {
        const size = Math.random() * 5 + 2;

        return (
          <motion.div
            key={index}
            className="absolute rounded-full bg-white/40"
            style={{
              width: size,
              height: size,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              opacity: [0.2, 1, 0.2],
              scale: [1, 1.8, 1],
            }}
            transition={{
              duration: Math.random() * 8 + 6,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        );
      })}
    </div>
  );
}