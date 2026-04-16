import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projectsData } from "../data/portfolioData";
import ProjectCard from "./ProjectCard";
import { X, Github, ExternalLink } from "lucide-react";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">
            Selected Work
          </h2>
          <p className="text-gray-400 text-lg">A showcase of my recent coding endeavors</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projectsData.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onClick={setSelectedProject}
            />
          ))}
        </div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
            />
            
            <motion.div
              layoutId={`project-${selectedProject.id}`}
              className="relative w-full max-w-4xl glass-card rounded-3xl overflow-hidden z-10"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors z-20"
              >
                <X size={24} />
              </button>

              <div className="flex flex-col md:flex-row">
                <div className="w-full md:w-1/2">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover aspect-video md:aspect-auto md:h-[500px]"
                  />
                </div>
                
                <div className="w-full md:w-1/2 p-8 md:p-12 overflow-y-auto max-h-[500px]">
                  <h3 className="text-3xl font-bold text-white mb-4">{selectedProject.title}</h3>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {selectedProject.tech.map(t => (
                      <span key={t} className="text-xs px-3 py-1 bg-primary/20 border border-primary/40 rounded-full text-accent font-medium uppercase tracking-wider">
                        {t}
                      </span>
                    ))}
                  </div>
                  
                  <p className="text-gray-300 text-lg leading-relaxed mb-8">
                    {selectedProject.description}
                    <br /><br />
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
                  </p>

                  <div className="flex gap-4">
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 py-3 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-all font-bold"
                    >
                      <Github size={20} /> Code
                    </a>
                    <a
                      href={selectedProject.live}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 py-3 bg-primary rounded-xl hover:bg-primary/80 transition-all font-bold shadow-[0_0_15px_rgba(112,0,255,0.4)]"
                    >
                      <ExternalLink size={20} /> Preview
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
