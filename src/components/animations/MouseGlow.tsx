"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function MouseGlow() {
  const [position, setPosition] = useState({
    x: -500,
    y: -500,
  });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", move);

    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <motion.div
      animate={{
        x: position.x - 250,
        y: position.y - 250,
      }}
      transition={{
        type: "spring",
        damping: 25,
        stiffness: 150,
      }}
      className="fixed pointer-events-none z-0 w-[500px] h-[500px] rounded-full bg-violet-500/10 blur-[160px]"
    />
  );
}