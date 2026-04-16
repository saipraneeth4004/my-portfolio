import React from "react";
import { motion } from "framer-motion";
import { skillsData } from "../data/portfolioData";
import { Code, Layout, Server, Database, Settings } from "lucide-react";

const iconMap = {
  Programming: <Code className="text-primary" />,
  Frontend: <Layout className="text-accent" />,
  Backend: <Server className="text-secondary" />,
  Database: <Database className="text-purple-400" />,
  Tools: <Settings className="text-gray-400" />,
};

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-[#05001a]">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent mb-4">
            My Skillset
          </h2>
          <p className="text-gray-400 text-lg">Technologies I work with to bring ideas to life</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsData.map((category, idx) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -5 }}
              className="glass-card p-8 rounded-2xl relative overflow-hidden group"
            >
              {/* Background Glow */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary/10 blur-3xl group-hover:bg-primary/20 transition-all"></div>
              
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-white/5 rounded-xl">
                  {iconMap[category.category] || <Code />}
                </div>
                <h3 className="text-2xl font-bold text-white">{category.category}</h3>
              </div>

              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-gray-300 text-sm hover:border-accent hover:text-accent transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
              
              {/* Progress-like decorative bar */}
              <div className="mt-8 h-1 w-full bg-white/5 rounded-full overflow-hidden">
                <motion.div 
                   initial={{ width: 0 }}
                   whileInView={{ width: "100%" }}
                   transition={{ duration: 1.5, delay: 0.5 }}
                   className="h-full bg-gradient-to-r from-primary to-accent"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
