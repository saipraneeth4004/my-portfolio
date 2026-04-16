import React from "react";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, MessageSquare, Send, Code } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Decorative Glows */}
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-accent/5 blur-[120px] rounded-full translate-x-1/2 translate-y-1/2"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent mb-4">
              Get In Touch
            </h2>
            <p className="text-gray-400 text-lg">Let's collaborate on something amazing</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h3 className="text-3xl font-bold text-white mb-6">Let's Talk</h3>
              <p className="text-gray-400 text-lg">
                I'm currently looking for new opportunities and collaborations. 
                Whether you have a question or just want to say hi, I'll try my best 
                to get back to you!
              </p>

              <div className="space-y-6">
                <a href="mailto:saipraneeth@example.com" className="flex items-center gap-6 group">
                  <div className="p-4 glass-card rounded-2xl group-hover:bg-primary/20 transition-all text-primary">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold">Email</h4>
                    <p className="text-gray-500">saipraneeth@example.com</p>
                  </div>
                </a>
                
                <div className="flex items-center gap-6 group">
                  <div className="p-4 glass-card rounded-2xl group-hover:bg-accent/20 transition-all text-accent">
                    <MessageSquare size={24} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold">Socials</h4>
                    <div className="flex gap-4 mt-2">
                       <a href="https://github.com/saipraneeth4004" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors"><Github size={20}/></a>
                       <a href="https://www.linkedin.com/in/saipraneeth-bachampally/" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors"><Linkedin size={20}/></a>
                       <a href="https://leetcode.com/u/saipraneeth31549/" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors" title="LeetCode"><Code size={20}/></a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-card p-10 rounded-3xl"
            >
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="space-y-2">
                  <label className="text-gray-400 text-sm ml-1">Name</label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-primary transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-gray-400 text-sm ml-1">Email</label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-secondary transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-gray-400 text-sm ml-1">Message</label>
                  <textarea
                    rows="4"
                    placeholder="Describe your project..."
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-accent transition-all resize-none"
                  ></textarea>
                </div>
                
                <button
                  className="w-full py-4 bg-gradient-to-r from-primary to-secondary rounded-xl text-white font-bold text-lg flex items-center justify-center gap-3 hover:shadow-[0_0_20px_rgba(112,0,255,0.4)] transition-all"
                >
                  Send Message <Send size={20} />
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
