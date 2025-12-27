import React from "react";

export default function About() {
  return (
    <section className="py-28 px-6 max-w-5xl mx-auto text-white">
      <h2 className="text-4xl font-bold mb-8">About Me</h2>

      <p className="text-gray-300 leading-relaxed mb-12">
       Front-End React Developer with a strong focus on clean code, responsive design,
and performance. Experienced in building modern web applications using React,
Tailwind CSS, and REST APIs. Passionate about learning and continuous improvement.

      </p>

      {/* Skills */}
      <h3 className="text-2xl font-semibold mb-8">Skills</h3>

      <div className="grid md:grid-cols-3 gap-8 text-gray-300">

        {/* Soft Skills */}
        <div>
          <h4 className="text-xl font-semibold mb-4 text-white">
            Soft Skills
          </h4>
          <ul className="space-y-2 list-disc ml-5">
            <li>Problem Solving</li>
            <li>Time Management</li>
            <li>Teamwork</li>
            <li>Communication</li>
            <li>Adaptability</li>
          </ul>
        </div>

        {/* Professional Skills */}
        <div>
          <h4 className="text-xl font-semibold mb-4 text-white">
            Professional Skills
          </h4>
          <ul className="space-y-2 list-disc ml-5">
            <li>Clean Code Principles</li>
            <li>Responsive Design</li>
            <li>UI / UX Fundamentals</li>
            <li>Version Control (Git)</li>
            <li>Project Organization</li>
          </ul>
        </div>

        {/* Technical Skills */}
        <div>
          <h4 className="text-xl font-semibold mb-4 text-white">
            Technical Skills
          </h4>
          <ul className="space-y-2 list-disc ml-5">
            <li>HTML5 & CSS3</li>
            <li>JavaScript (ES6+)</li>
            <li>React.js, Hooks, Context API</li>
            <li>Tailwind CSS</li>
            <li>REST APIs, Axios</li>
            <li>Git & GitHub</li>
          </ul>
        </div>

      </div>
    </section>
  );
}
