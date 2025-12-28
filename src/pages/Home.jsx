import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Github, Linkedin, Mail, ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 overflow-hidden
      bg-gradient-to-br from-black via-gray-900 to-blue-950">

      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 w-[500px] h-[500px] 
        -translate-x-1/2 -translate-y-1/2 rounded-full 
        bg-blue-600/20 blur-[120px]" />

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
          className="relative w-40 h-40 md:w-48 md:h-48 rounded-full object-cover
            border-4 border-black shadow-2xl"
        />
      </motion.div>

      {/* Name */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-5xl md:text-6xl font-extrabold mb-4 text-white"
      >
        Yousef{" "}
        <span className="bg-gradient-to-r from-blue-400 to-cyan-300 
          bg-clip-text text-transparent">
          Saleh
        </span>
      </motion.h1>

      {/* Job title */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-lg md:text-2xl text-gray-300 mb-6"
      >
        Front-End React Developer
      </motion.p>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="max-w-xl text-gray-400 mb-10 leading-relaxed"
      >
        I build modern, responsive and high-performance web interfaces
        using React, Tailwind CSS and clean UI principles.
      </motion.p>

      {/* Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="flex flex-wrap gap-4 justify-center"
      >
        <Link
          to="/projects"
          className="flex items-center gap-2 px-8 py-3 rounded-xl
            bg-gradient-to-r from-blue-600 to-cyan-500 text-white
            hover:scale-105 transition font-medium shadow-lg"
        >
          View Projects <ArrowRight size={18} />
        </Link>

        <Link
          to="/contact"
          className="px-8 py-3 rounded-xl border border-white/20
            text-white hover:bg-white/10 hover:scale-105
            transition font-medium"
        >
          Contact Me
        </Link>
      </motion.div>

      {/* Social links */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9 }}
        className="flex gap-5 mt-12"
      >
        {[ 
          {
            icon: <Github size={22} />,
            link: "https://github.com/Joesaleh523",
          },
          {
            icon: <Linkedin size={22} />,
            link: "https://www.linkedin.com/in/yousef-saleh-082a99352/",
          },
          {
            icon: <Mail size={22} />,
            link: "mailto:Yousefsalehtwfiq202121623@gmail.com",
          },
        ].map((item, i) => (
          <motion.a
            key={i}
            href={item.link}
            target={item.link.startsWith("http") ? "_blank" : undefined}
            rel="noreferrer"
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.95 }}
            className="w-12 h-12 flex items-center justify-center
              rounded-full bg-white/5 text-gray-300
              hover:text-white hover:bg-blue-600/30 transition"
          >
            {item.icon}
          </motion.a>
        ))}
      </motion.div>
    </section>
  );
}
