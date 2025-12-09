import React from 'react';

export default function Projects() {
  const projects = [
    { title: 'E-Commerce UI', desc: 'Responsive e-commerce UI with React & Tailwind', tech: ['React','Tailwind'], live: '#', repo: '#' },
    { title: 'Dashboard App', desc: 'Admin dashboard with charts and filters', tech: ['React','Recharts'], live: '#', repo: '#' },
    { title: 'Notes App', desc: 'Notes app with CRUD and search', tech: ['React','Tailwind'], live: '#', repo: '#' }
  ];

  return (
    <section className="py-24 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-semibold mb-8">Projects</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((p,i) => (
          <article key={i} className="p-6 bg-gray-900 rounded-2xl shadow-lg">
            <div className="h-40 bg-gray-800 rounded-lg mb-4 flex items-center justify-center text-gray-400">Project screenshot</div>
            <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
            <p className="text-gray-300 mb-3">{p.desc}</p>
            <div className="flex gap-2 flex-wrap mb-4">
              {p.tech.map(t => <span key={t} className="text-sm px-2 py-1 border border-gray-700 rounded">{t}</span>)}
            </div>
            <div className="flex gap-3">
              <a href={p.live} className="px-3 py-2 bg-blue-600 rounded hover:bg-blue-700 transition">Live</a>
              <a href={p.repo} className="px-3 py-2 border border-gray-700 rounded hover:bg-gray-800 transition">Repo</a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
