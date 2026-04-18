import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";

const ProjectCard = ({ project, onClick }) => {
  return (
    <motion.div
      layoutId={`project-${project.id}`}
      initial="initial"
      whileHover="hover"
      className="group relative cursor-pointer"
      onClick={() => onClick(project)}
    >
      <div className="relative overflow-hidden rounded-2xl glass-card aspect-video">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
          <motion.div
            variants={{
              initial: { opacity: 0, x: -10, y: 10 },
              hover: { opacity: 1, x: 0, y: 0 }
            }}
            transition={{ duration: 0.3 }}
            className="absolute top-6 right-6 p-2 bg-primary rounded-full shadow-lg shadow-primary/40"
          >
            <ArrowUpRight size={20} className="text-white" />
          </motion.div>
          
          <div className="flex flex-wrap gap-2 mb-4">
             {project.tech.slice(0, 5).map(t => (
               <span key={t} className="text-[10px] px-2 py-1 bg-primary/20 border border-primary/30 rounded-md text-white font-medium uppercase tracking-wider">
                 {t}
               </span>
             ))}
          </div>
          <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
          <p className="text-gray-300 text-sm line-clamp-2">{project.description}</p>
        </div>
      </div>
      
      {/* Decorative Glow */}
      <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-20 blur-lg transition duration-500 -z-10 rounded-2xl"></div>
    </motion.div>
  );
};

export default ProjectCard;
