import React from "react";
import { motion } from "framer-motion";
import { experienceData } from "../data/portfolioData";
import { Briefcase } from "lucide-react";

const Experience = () => {
  return (
    <section id="experience" className="py-24 bg-[#05001a]">
      <div className="container mx-auto px-6">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent mb-4">
            Experience
          </h2>
          <p className="text-gray-400 text-lg">My professional journey and leadership roles</p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-8">
          {experienceData.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="glass-card p-8 rounded-3xl relative overflow-hidden group border-l-4 border-l-primary"
            >
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
                <div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-primary transition-colors flex items-center gap-3">
                    <Briefcase size={24} className="text-primary" />
                    {exp.role}
                  </h3>
                  <p className="text-accent font-medium mt-1">{exp.company}</p>
                </div>
                <span className="px-4 py-1 bg-white/5 border border-white/10 rounded-full text-gray-400 text-sm">
                  {exp.duration}
                </span>
              </div>
              
              <ul className="space-y-3">
                {exp.description.map((item, i) => (
                  <li key={i} className="flex gap-3 text-gray-300">
                    <span className="text-primary font-bold mt-1">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
