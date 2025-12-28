import React, { useEffect, useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Projects from "./pages/Projects.jsx";
import Contact from "./pages/Contact.jsx";
import { Menu, X } from "lucide-react";

export default function App() {
  const [open, setOpen] = useState(false);

  const [dark, setDark] = useState(() => {
    const saved = localStorage.getItem("theme");
    return saved
      ? saved === "dark"
      : window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Header */}
     <header className="fixed top-0 left-0 right-0 z-[100] bg-black/90 backdrop-blur">
        <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link to="/" className="text-lg font-bold">
            Yousef Saleh
          </Link>

          {/* Desktop */}
          <div className="hidden md:flex gap-6 text-sm">
            <Link to="/projects" className="hover:text-blue-400">
              Projects
            </Link>
            <Link to="/about" className="hover:text-blue-400">
              About
            </Link>
            <Link to="/contact" className="hover:text-blue-400">
              Contact
            </Link>
          </div>

          {/* Mobile Button */}
          <button
            className="md:hidden"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </nav>
      </header>

      {/* ✅ Mobile Menu (ده كان ناقص) */}
      {open && (
        <div
          className="
            fixed top-16 left-0 right-0
            z-[200]
            md:hidden
            bg-black/95 backdrop-blur
            border-t border-white/10
          "
        >
          <div className="flex flex-col text-center py-8 space-y-6 text-lg">
            <Link
              to="/projects"
              onClick={() => setOpen(false)}
              className="hover:text-blue-400"
            >
              Projects
            </Link>

            <Link
              to="/about"
              onClick={() => setOpen(false)}
              className="hover:text-blue-400"
            >
              About
            </Link>

            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="hover:text-blue-400"
            >
              Contact
            </Link>
          </div>
        </div>
      )}

      {/* Pages */}
      <main className="pt-16">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </div>
  );
}
