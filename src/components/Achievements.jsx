import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { achievementsData } from "../data/portfolioData";
import { X, Award, ExternalLink } from "lucide-react";

const Achievements = () => {
  const [selectedAchievement, setSelectedAchievement] = useState(null);

  return (
    <section id="achievements" className="py-24 bg-[#030014] relative overflow-hidden">
      {/* Background Decorative Circles */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-secondary/5 blur-[150px] rounded-full -translate-x-1/2"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6"
        >
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
              Achievements
            </h2>
            <p className="text-gray-400 text-lg">Milestones, certifications, and coding progress</p>
          </div>
          <div className="hidden md:block">
            <div className="flex items-center gap-2 px-4 py-2 glass-card rounded-full text-sm text-gray-300">
               <Award size={16} className="text-secondary" />
               Validated Expertise
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievementsData.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ scale: 1.02 }}
              onClick={() => setSelectedAchievement(item)}
              className="glass-card p-4 rounded-3xl cursor-pointer group"
            >
              <div className="relative overflow-hidden rounded-2xl mb-6 aspect-[4/3]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                  <span className="text-white font-medium flex items-center gap-2">View Certificate <ExternalLink size={16}/></span>
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-2 px-2">{item.title}</h3>
              <p className="text-gray-500 text-sm line-clamp-2 px-2 pb-2">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal / Lightbox */}
      <AnimatePresence>
        {selectedAchievement && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedAchievement(null)}
              className="absolute inset-0 bg-black/90 backdrop-blur-xl"
            />
            
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-5xl glass-card rounded-3xl overflow-hidden z-10 p-4"
            >
              <button
                onClick={() => setSelectedAchievement(null)}
                className="absolute top-8 right-8 p-3 bg-black/50 hover:bg-black/70 rounded-full text-white transition-all z-20"
              >
                <X size={24} />
              </button>

              <div className="flex flex-col lg:flex-row gap-8">
                <div className="w-full lg:w-2/3">
                  <img
                    src={selectedAchievement.image}
                    alt={selectedAchievement.title}
                    className="w-full rounded-2xl object-contain bg-black/20 max-h-[70vh]"
                  />
                </div>
                <div className="w-full lg:w-1/3 flex flex-col justify-center">
                  <h3 className="text-3xl font-bold text-white mb-6 underline decoration-secondary decoration-4 underline-offset-8">
                    {selectedAchievement.title}
                  </h3>
                  <p className="text-gray-300 text-lg leading-relaxed mb-10">
                    {selectedAchievement.description}
                  </p>
                  
                  {selectedAchievement.link && (
                    <a
                      href={selectedAchievement.link}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-secondary text-white rounded-2xl font-bold hover:bg-secondary/80 transition-all hover:shadow-[0_0_30px_rgba(255,0,217,0.3)]"
                    >
                      Verify Credential <ExternalLink size={20} />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Achievements;
