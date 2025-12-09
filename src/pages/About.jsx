import React from 'react';

export default function About() {
  return (
    <section className="py-24 px-6 max-w-4xl mx-auto">
      <h2 className="text-3xl font-semibold mb-6">About Me</h2>
      <p className="text-gray-300 mb-4">
        I'm a Front-End Developer focused on building accessible, performant and responsive web apps using React and TailwindCSS.
      </p>
      <h3 className="font-semibold mt-6">Skills</h3>
      <ul className="text-gray-300 list-disc ml-5">
        <li>HTML5 & CSS3</li>
        <li>JavaScript (ES6+)</li>
        <li>React, Hooks, Context API</li>
        <li>TailwindCSS & Responsive Design</li>
        <li>REST APIs, Axios</li>
        <li>Git & GitHub</li>
      </ul>
    </section>
  );
}
