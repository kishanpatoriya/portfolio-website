import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Mouse absolute positions
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth trailing spring physics
  const springConfig = { damping: 20, stiffness: 220, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e) => {
      const target = e.target.closest("a, button, input, textarea, select, [role='button']");
      setIsHovered(!!target);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [isVisible, mouseX, mouseY]);

  if (!isVisible) return null;

  return (
    <>
      {/* 1. Sharp Solid Center Dot (Instant follow, clearly visible) */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[99999] hidden md:block rounded-full bg-blue-400 shadow-[0_0_10px_#3b82f6]"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width: isHovered ? 6 : 8,
          height: isHovered ? 6 : 8,
          backgroundColor: isHovered ? "#60a5fa" : "#3b82f6",
        }}
        transition={{ duration: 0.15 }}
      />

      {/* 2. Outer Neon Glow Ring (Smooth trailing with visible border & soft fill) */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[99998] hidden md:block rounded-full border-2 border-blue-500 bg-blue-500/15 shadow-[0_0_20px_rgba(59,130,246,0.35)] backdrop-blur-[0.5px]"
        style={{
          x: smoothX,
          y: smoothY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width: isHovered ? 56 : 32,
          height: isHovered ? 56 : 32,
          borderColor: isHovered ? "#93c5fd" : "#3b82f6",
          backgroundColor: isHovered ? "rgba(59, 130, 246, 0.25)" : "rgba(59, 130, 246, 0.10)",
          scale: isHovered ? 1.15 : 1,
        }}
        transition={{
          type: "spring",
          damping: 22,
          stiffness: 260,
        }}
      />
    </>
  );
}