"use client";

import { motion } from "framer-motion";

interface ScrollRevealProps {
  children: React.ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  className?: string;
  width?: "fit-content" | "100%";
}

export function ScrollReveal({
  children,
  delay = 0,
  direction = "up",
  className = "",
  width = "100%",
}: ScrollRevealProps) {
  const directionOffset = {
    up: { y: 60, x: 0 },
    down: { y: -60, x: 0 },
    left: { x: 60, y: 0 },
    right: { x: -60, y: 0 },
  };

  return (
    <div style={{ width }} className={className}>
      <motion.div
        initial={{
          opacity: 0,
          ...directionOffset[direction],
        }}
        whileInView={{
          opacity: 1,
          x: 0,
          y: 0,
        }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{
          duration: 0.8,
          delay: delay,
          ease: [0.16, 1, 0.3, 1], // custom snap easing
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}
