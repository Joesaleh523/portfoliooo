import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Github, Linkedin, Mail, ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <section
      className="
        relative min-h-screen
        flex flex-col justify-center items-center text-center
        px-4 sm:px-6
        pt-20
        overflow-hidden
        bg-gradient-to-br from-black via-gray-900 to-blue-950
      "
    >
      {/* Background glow */}
      <div
        className="absolute top-1/2 left-1/2 w-[420px] h-[420px] sm:w-[500px] sm:h-[500px]
        -translate-x-1/2 -translate-y-1/2 rounded-full
        bg-blue-600/20 blur-[120px] pointer-events-none"
      />

      {/* Profile Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="relative mb-6"
      >
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 blur-md opacity-70" />
        <img
          src="/images/Screenshot202512-28032143.png"
          alt="Yousef Saleh"
          className="relative w-36 h-36 sm:w-40 sm:h-40 md:w-48 md:h-48
          rounded-full object-cover border-4 border-black shadow-2xl"
        />
      </motion.div>

      {/* Name */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4"
      >
        Yousef{" "}
        <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
          Saleh
        </span>
      </motion.h1>

      {/* Job title */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-base sm:text-lg md:text-2xl text-gray-300 mb-5"
      >
        Front-End React Developer
      </motion.p>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="max-w-xl text-gray-400 mb-10 leading-relaxed text-sm sm:text-base"
      >
        I build modern, responsive and high-performance web interfaces
        using React, Tailwind CSS and clean UI principles.
      </motion.p>

      {/* Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="flex flex-col sm:flex-row gap-4 justify-center w-full max-w-md"
      >
        <Link
          to="/projects"
          className="flex items-center justify-center gap-2 px-8 py-3 rounded-xl
          bg-gradient-to-r from-blue-600 to-cyan-500 text-white
          hover:scale-105 transition font-medium shadow-lg"
        >
          View Projects <ArrowRight size={18} />
        </Link>

        <Link
          to="/contact"
          className="px-8 py-3 rounded-xl border border-white/20
          text-white hover:bg-white/10 hover:scale-105 transition font-medium"
        >
          Contact Me
        </Link>
      </motion.div>

      {/* Social links */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9 }}
        className="flex gap-4 mt-12"
      >
        <a
          href="https://github.com/Joesaleh523"
          target="_blank"
          rel="noreferrer"
          className="w-11 h-11 flex items-center justify-center rounded-full
          bg-white/5 text-gray-300 hover:text-white hover:bg-blue-600/30 transition"
        >
          <Github size={20} />
        </a>

        <a
          href="https://www.linkedin.com/in/yousef-saleh-082a99352/"
          target="_blank"
          rel="noreferrer"
          className="w-11 h-11 flex items-center justify-center rounded-full
          bg-white/5 text-gray-300 hover:text-white hover:bg-blue-600/30 transition"
        >
          <Linkedin size={20} />
        </a>

        <a
          href="mailto:Yousefsalehtwfiq202121623@gmail.com"
          className="w-11 h-11 flex items-center justify-center rounded-full
          bg-white/5 text-gray-300 hover:text-white hover:bg-blue-600/30 transition"
        >
          <Mail size={20} />
        </a>
      </motion.div>
    </section>
  );
}
