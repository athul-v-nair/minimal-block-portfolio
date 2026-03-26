"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useCursor } from "@/contexts/CursorContext";

export function CustomCursor() {
  const { size, color } = useCursor();
  const [isMounted, setIsMounted] = useState(false);
  
  // High performance motion values
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth springs for latency-free feeling
  const springX = useSpring(mouseX, { stiffness: 1000, damping: 100 });
  const springY = useSpring(mouseY, { stiffness: 1000, damping: 100 });

  useEffect(() => {
    setIsMounted(true);
    
    function handleMouseMove(event: MouseEvent) {
      // Offset by size/2 to center the cursor
      mouseX.set(event.clientX - size / 2);
      mouseY.set(event.clientY - size / 2);
    }

    if (window.innerWidth >= 1024) {
      window.addEventListener("mousemove", handleMouseMove);
      return () => window.removeEventListener("mousemove", handleMouseMove);
    }
  }, [mouseX, mouseY, size]);

  if (!isMounted) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 hidden lg:block pointer-events-none z-[9999] rounded-full mix-blend-exclusion"
      style={{
        width: size,
        height: size,
        x: mouseX,
        y: mouseY,
        backgroundColor: color === "white" ? "#ffffff" : color
      }}
      initial={{ scale: 0.1, opacity: 0 }}
      animate={{ 
        scale: 1, 
        opacity: 1, 
        width: size, 
        height: size
      }}
      transition={{
        scale: { duration: 0.3, type: "spring" },
        opacity: { duration: 0.3, type: "spring" },
        width: { type: "spring", stiffness: 1000, damping: 100 },
        height: { type: "spring", stiffness: 1000, damping: 100 }
      }}
    />
  );
}
