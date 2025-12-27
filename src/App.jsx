import React, { useEffect, useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Projects from './pages/Projects.jsx';
import Contact from './pages/Contact.jsx';

export default function App(){
  const [dark,setDark] = useState(()=>{
    const saved = localStorage.getItem('theme');
    return saved ? saved==='dark': window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(()=>{
    document.documentElement.classList.toggle('dark',dark);
    localStorage.setItem('theme',dark?'dark':'light');
  },[dark]);

  return (
    <div className="min-h-screen text-white dark:text-black font-sans">
      <header className="fixed top-4 left-0 right-0 z-40">
        <nav className="max-w-6xl mx-auto px-6 flex justify-between items-center">
          <Link to="/" className="text-lg font-bold">Yousef Saleh</Link>
          <div className="flex items-center gap-4">
            <Link to="/projects" className="hidden md:inline-block">Projects</Link>
            <Link to="/about" className="hidden md:inline-block">About</Link>
            <Link to="/contact" className="hidden md:inline-block">Contact</Link>
          </div>
        </nav>
      </header>

      <main className="pt-24">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/projects" element={<Projects/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
      </main>

      <footer className="mt-16 pb-10 text-center text-gray-400">
        © {new Date().getFullYear()} Yousef Saleh — Front-End Developer
      </footer>
    </div>
  );
}
