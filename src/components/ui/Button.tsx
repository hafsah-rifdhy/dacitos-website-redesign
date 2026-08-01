"use client";

import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

interface ButtonProps {
  text: string;
}

export default function Button({ text }: ButtonProps) {
  return (
    <motion.button
      whileHover={{
        scale: 1.05,
      }}
      whileTap={{
        scale: 0.96,
      }}
      className="group relative overflow-hidden rounded-full bg-gradient-to-r from-violet-600 via-fuchsia-600 to-cyan-500 px-7 py-4 font-semibold text-white shadow-[0_0_40px_rgba(139,92,246,.45)]"
    >
      <span className="relative z-10 flex items-center gap-2">
        {text}

        <ArrowRight
          size={18}
          className="transition-transform duration-300 group-hover:translate-x-1"
        />
      </span>

      <span className="absolute inset-0 bg-white/10 opacity-0 transition group-hover:opacity-100" />
    </motion.button>
  );
}