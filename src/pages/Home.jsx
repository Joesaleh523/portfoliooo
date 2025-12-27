import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Github, Linkedin, Mail, ArrowRight } from "lucide-react";

export default function Home() {
  return (
<section className="min-h-screen flex flex-col justify-center items-center text-center px-6 bg-gradient-to-b from-black to-gray-900">


      {/* Name */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="text-5xl md:text-6xl font-extrabold mb-4 text-white"
      >
        Yousef{" "}
        <span className="text-blue-500 drop-shadow-lg">
          Saleh
        </span>
      </motion.h1>

      {/* Job title */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.25, duration: 0.6 }}
        className="text-xl md:text-2xl text-gray-300 mb-4"
      >
        Front-End React Developer
      </motion.p>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.45, duration: 0.6 }}
        className="max-w-xl text-gray-400 mb-10 leading-relaxed"
      >
        I build modern, responsive and high-performance web interfaces using
        React, Tailwind CSS and clean UI principles.
      </motion.p>

      {/* Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.65, duration: 0.6 }}
        className="flex gap-4"
      >
        <Link
          to="/projects"
          className="flex items-center gap-2 px-7 py-3
          bg-blue-600 text-white rounded-2xl
          hover:bg-blue-700 hover:scale-105
          transition-all duration-200"
        >
          View Projects <ArrowRight size={18} />
        </Link>

        <Link
          to="/contact"
          className="px-7 py-3 rounded-2xl border border-gray-500
          text-white hover:bg-white/10 hover:scale-105
          transition-all duration-200"
        >
          Contact Me
        </Link>
      </motion.div>

      {/* Social links */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9 }}
        className="flex gap-6 mt-12 text-gray-400"
      >
        <a
          href="https://github.com/Joesaleh523"
          target="_blank"
          rel="noreferrer"
          className="hover:text-white hover:scale-110 transition"
        >
          <Github size={28} />
        </a>

        <a
          href="https://www.linkedin.com/in/yousef-saleh-082a99352/"
          target="_blank"
          rel="noreferrer"
          className="hover:text-white hover:scale-110 transition"
        >
          <Linkedin size={28} />
        </a>

        <a
          href="mailto:Yousefsalehtwfiq202121623@gmail.com"
          className="hover:text-white hover:scale-110 transition"
        >
          <Mail size={28} />
        </a>
      </motion.div>
    </section>
  );
}
