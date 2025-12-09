import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home(){
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center px-6">
      <motion.h1 initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:0.6}} className="text-5xl font-bold mb-4">Yousef Saleh</motion.h1>
      <motion.p initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.4,duration:0.6}} className="text-xl text-gray-300 max-w-xl mb-6">
        Front-End React Developer — I build modern, responsive and fast web interfaces using React & Tailwind.
      </motion.p>
      <div className="flex gap-4 mt-6">
        <Link to="/projects" className="px-6 py-3 bg-blue-600 rounded-2xl hover:bg-blue-700 transition">View Projects</Link>
        <Link to="/contact" className="px-6 py-3 border border-gray-500 rounded-2xl hover:bg-gray-800 transition">Contact</Link>
      </div>
      <div className="flex gap-6 mt-8 text-xl">
        <a href="https://github.com/Joesaleh523" target="_blank" rel="noreferrer"><Github size={28}/></a>
        <a href="https://linkedin.com/in/yousef-saleh" target="_blank" rel="noreferrer"><Linkedin size={28}/></a>
        <a href="mailto:Yousefsalehtwfiq202121623@gmail.com"><Mail size={28}/></a>
      </div>
    </section>
  );
}
