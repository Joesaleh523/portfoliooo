import React from "react";
import { Github, ExternalLink } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "E-Commerce final project ",
      desc: "",
      tech: [],
      image:"/public/images/Screenshot20251-26-021235.png",
      live: "https://e-commerce-final-project-jsrt.vercel.app/Login",
      repo: "https://github.com/Joesaleh523/e-commerce-final-project",
    },
    
    {
      title: "daniels project ",
      desc: "",
      tech: [],
      image: "/public/images/Screenshot2025-12-26022837.png",
      live: "https://joesaleh523.github.io/daniels-exam1",
      repo: "https://github.com/Joesaleh523/daniels-exam1",
    },
    {
      title: "smart login system ",
      desc: "",
      tech: [],
      image: "/public/images/Screenshot20251-26023155.png",
      live: "https://joesaleh523.github.io/smart-login-system-task-9/",
      repo: "https://github.com/Joesaleh523/smart-login-system-task-9",
    },
  ];

  return (
    <section className="py-24 px-6 max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold mb-12 text-center text-gray-900 dark:text-white">
        My Projects
      </h2>

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-12">
  {projects.map((p, i) => (
    <article
      key={i}
      className="
        rounded-3xl overflow-hidden
        border border-gray-200
        bg-white
        shadow-lg
        hover:-translate-y-2 hover:shadow-2xl
        transition-all duration-300
      " 
    >
      {/* Image */}
      <a
        href={p.live}
        target="_blank"
        rel="noreferrer"
        className="group relative block"
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
          <span className="flex items-center gap-2 text-white text-xl font-semibold">
            View Project <ExternalLink size={20} />
          </span>
        </div>
      </a>

      {/* Content */}
      <div className="p-8">
        <h3 className="text-2xl font-bold mb-3 text-gray-900">
          {p.title}
        </h3>

        {p.desc && (
          <p className="text-gray-600 mb-5">
            {p.desc}
          </p>
        )}

        {/* Tech */}
        {p.tech.length > 0 && (
          <div className="flex flex-wrap gap-3 mb-6">
            {p.tech.map((t) => (
              <span
                key={t}
                className="text-sm px-4 py-1.5 rounded-full bg-gray-100 text-gray-700"
              >
                {t}
              </span>
            ))}
          </div>
        )}

        {/* Repo */}
        <a
          href={p.repo}
          target="_blank"
          rel="noreferrer"
          className="
            inline-flex items-center gap-2
            px-5 py-2.5 rounded-xl
            border border-gray-300
            text-gray-700
            hover:bg-gray-100
            transition
          "
        >
          <Github size={18} /> Repo
        </a>
      </div>
    </article>
  ))}
</div>

    </section>
  );
}
