import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { headerData } from "../data/portfolioData";
import { ChevronRight, ArrowDown } from "lucide-react";

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % headerData.roles.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary opacity-20 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary opacity-20 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
      </div>

      <div className="container mx-auto px-6 z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-xl md:text-2xl text-accent font-medium mb-4 tracking-widest uppercase">
            {headerData.tagline}
          </h2>
          
          <h1 className="text-5xl md:text-8xl font-bold mb-6 tracking-tight">
            I am a <br />
            <span className="relative inline-block mt-2 min-h-[1.2em]">
              <AnimatePresence mode="wait">
                <motion.span
                  key={headerData.roles[roleIndex]}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent"
                >
                  {headerData.roles[roleIndex]}
                </motion.span>
              </AnimatePresence>
            </span>
          </h1>

          <p className="text-3xl md:text-4xl text-gray-300 font-semibold mb-12">
            {headerData.name}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-primary rounded-full font-bold text-lg flex items-center gap-2 group transition-all hover:shadow-[0_0_20px_rgba(112,0,255,0.6)]"
            >
              View Projects <ChevronRight className="group-hover:translate-x-1 transition-transform" />
            </motion.a>
            
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-transparent border-2 border-secondary rounded-full font-bold text-lg hover:bg-secondary/10 transition-all hover:shadow-[0_0_20px_rgba(255,0,217,0.4)]"
            >
              Contact Me
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-500"
      >
        <ArrowDown size={32} />
      </motion.div>
    </section>
  );
};

export default Hero;
