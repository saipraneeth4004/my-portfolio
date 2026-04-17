import React from "react";
import { Github, Linkedin, Twitter, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-white/5 bg-[#030014]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Saipraneeth.B
          </div>
          
          <div className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Saipraneeth B. All rights reserved.
          </div>

          <div className="flex gap-6">
             <a href="https://github.com/saipraneeth4004" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors"><Github size={20} /></a>
             <a href="https://www.linkedin.com/in/saipraneeth-bachampally/" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors"><Linkedin size={20} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
