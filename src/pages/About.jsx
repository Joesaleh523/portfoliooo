import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      className="relative min-h-screen px-6 py-28 overflow-hidden
      bg-gradient-to-br from-black via-gray-900 to-blue-950 text-white"
    >
      {/* Glow */}
      <div
        className="absolute top-1/2 left-1/2 w-[600px] h-[600px]
        -translate-x-1/2 -translate-y-1/2 rounded-full
        bg-blue-600/20 blur-[140px]"
      />

      <div className="relative max-w-5xl mx-auto">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold mb-10"
        >
          About{" "}
          <span className="bg-gradient-to-r from-blue-400 to-cyan-300 
            bg-clip-text text-transparent">
            Me
          </span>
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-gray-300 leading-relaxed mb-16 max-w-3xl"
        >
          Front-End React Developer with a strong focus on clean code,
          responsive design, and performance. Experienced in building
          modern web applications using React, Tailwind CSS, and REST APIs.
          Passionate about learning and continuous improvement.
        </motion.p>

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="grid md:grid-cols-3 gap-8"
        >
          {/* Card */}
          {[
            {
              title: "Soft Skills",
              items: [
                "Problem Solving",
                "Time Management",
                "Teamwork",
                "Communication",
                "Adaptability",
              ],
            },
            {
              title: "Professional Skills",
              items: [
                "Clean Code Principles",
                "Responsive Design",
                "UI / UX Fundamentals",
                "Version Control (Git)",
                "Project Organization",
              ],
            },
            {
              title: "Technical Skills",
              items: [
                "HTML5 & CSS3",
                "JavaScript (ES6+)",
                "React.js & Hooks",
                "Tailwind CSS",
                "REST APIs & Axios",
                "Git & GitHub",
              ],
            },
          ].map((skill, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="
                rounded-3xl p-8
                bg-white/5 backdrop-blur
                border border-white/10
                shadow-lg
              "
            >
              <h3 className="text-xl font-semibold mb-6 text-white">
                {skill.title}
              </h3>
              <ul className="space-y-3 text-gray-300 list-disc ml-5">
                {skill.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
