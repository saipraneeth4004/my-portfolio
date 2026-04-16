import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      
      const target = e.target;
      setIsPointer(window.getComputedStyle(target).cursor === "pointer");
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="hidden lg:block">
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border-2 border-primary pointer-events-none z-[999]"
        animate={{
          x: position.x - 16,
          y: position.y - 16,
          scale: isPointer ? 1.5 : 1,
          backgroundColor: isPointer ? "rgba(112, 0, 255, 0.2)" : "rgba(112, 0, 255, 0)",
        }}
        transition={{ type: "spring", damping: 25, stiffness: 250, mass: 0.5 }}
      />
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-secondary pointer-events-none z-[999]"
        animate={{
          x: position.x - 4,
          y: position.y - 4,
        }}
        transition={{ type: "spring", damping: 35, stiffness: 450, mass: 0.2 }}
      />
    </div>
  );
};

export default CustomCursor;
