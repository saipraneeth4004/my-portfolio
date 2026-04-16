import React from "react";
import { motion } from "framer-motion";
import profileImg from "../assets/profile.png";

const About = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row items-center gap-16"
        >
          {/* Profile Image Container */}
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary to-secondary rounded-2xl blur-xl opacity-30 group-hover:opacity-60 transition duration-1000"></div>
              <div className="relative glass-card inline-block p-2 rounded-2xl">
                <img
                  src={profileImg}
                  alt="SAIPRANEETH BACHAMPALLY"
                  className="w-80 h-96 object-cover rounded-xl grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 border-t-4 border-r-4 border-accent rounded-tr-3xl"></div>
              <div className="absolute -bottom-4 -left-4 w-20 h-20 border-b-4 border-l-4 border-primary rounded-bl-3xl"></div>
            </div>
          </div>

          {/* About Content */}
          <div className="w-full md:w-1/2">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
              <p>
                Hello! I'm <span className="text-white font-semibold">SAIPRANEETH BACHAMPALLY</span>, a 3rd-year 
                B.Tech student at <span className="text-secondary">KL University</span> with a <span className="text-accent">9.5 CGPA</span>.
              </p>
              <p>
                I have a strong foundation in <span className="text-white">Data Structures & Algorithms</span>, 
                <span className="text-accent">Full-Stack Development</span>, and 
                <span className="text-secondary">Applied AI</span>. I love building scalable MERN 
                applications and AI-powered solutions using Python, LangChain, and LLMs.
              </p>
              <p>
                My focus is on solving complex real-world problems and building intelligent systems. 
                With experience in leadership and tech club projects, I strive for excellence in 
                every codebase I contribute to.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div>
                <h4 className="text-white font-bold text-2xl">5</h4>
                <p className="text-gray-500">Major Projects</p>
              </div>
              <div>
                <h4 className="text-white font-bold text-2xl">50+</h4>
                <p className="text-gray-500">Mini Projects</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
