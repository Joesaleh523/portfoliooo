import React from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "E-Commerce Final Project",
      image: "/images/Screenshot20251-26-021235.png",
      live: "https://e-commerce-final-project-jsrt.vercel.app/Login",
      repo: "https://github.com/Joesaleh523/e-commerce-final-project",
      tech: ["React", "Tailwind", "API"],
    },
    {
      title: "Daniels Project",
      image: "/images/Screenshot2025-12-26022837.png",
      live: "https://joesaleh523.github.io/daniels-exam1",
      repo: "https://github.com/Joesaleh523/daniels-exam1",
      tech: ["HTML", "CSS", "JS"],
    },
    {
      title: "Smart Login System",
      image: "/images/Screenshot20251-26023155.png",
      live: "https://joesaleh523.github.io/smart-login-system-task-9/",
      repo: "https://github.com/Joesaleh523/smart-login-system-task-9",
      tech: ["JavaScript", "Auth"],
    },
  ];

  return (
    <section
      className="relative min-h-screen px-6 py-24 overflow-hidden
      bg-gradient-to-br from-black via-gray-900 to-blue-950"
    >
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px]
        -translate-x-1/2 -translate-y-1/2 rounded-full
        bg-blue-600/20 blur-[140px]" />

      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative text-4xl md:text-5xl font-extrabold
        text-center mb-16 text-white"
      >
        My{" "}
        <span className="bg-gradient-to-r from-blue-400 to-cyan-300 
          bg-clip-text text-transparent">
          Projects
        </span>
      </motion.h2>

      {/* Grid */}
      <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 xl:grid-cols-3 gap-10">
        {projects.map((p, i) => (
          <motion.article
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="
              group rounded-3xl overflow-hidden
              bg-white/5 backdrop-blur
              border border-white/10
              hover:-translate-y-2 hover:shadow-2xl
              transition-all duration-300
            "
          >
            {/* Image */}
            <a
              href={p.live}
              target="_blank"
              rel="noreferrer"
              className="relative block"
            >
              <img
                src={p.image}
                alt={p.title}
                className="h-60 w-full object-cover"
              />

              <div
                className="
                  absolute inset-0 bg-black/60
                  flex items-center justify-center
                  opacity-0 group-hover:opacity-100
                  transition
                "
              >
                <span className="flex items-center gap-2 text-white text-lg font-semibold">
                  Live Demo <ExternalLink size={20} />
                </span>
              </div>
            </a>

            {/* Content */}
            <div className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-white">
                {p.title}
              </h3>

              {/* Tech */}
              <div className="flex flex-wrap gap-2 mb-6">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="text-sm px-3 py-1 rounded-full
                    bg-white/10 text-gray-300"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex gap-3">
                <a
                  href={p.repo}
                  target="_blank"
                  rel="noreferrer"
                  className="
                    flex items-center gap-2 px-5 py-2.5 rounded-xl
                    border border-white/20 text-gray-300
                    hover:bg-white/10 hover:text-white
                    transition
                  "
                >
                  <Github size={18} /> Repo
                </a>

                <a
                  href={p.live}
                  target="_blank"
                  rel="noreferrer"
                  className="
                    flex items-center gap-2 px-5 py-2.5 rounded-xl
                    bg-gradient-to-r from-blue-600 to-cyan-500
                    text-white hover:scale-105 transition
                  "
                >
                  Live
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
