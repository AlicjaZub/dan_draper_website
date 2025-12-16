"use client";
import React, { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-black/80 backdrop-blur">
      <div className="flex flex-wrap items-center justify-between px-4 py-4 md:px-10 md:py-8">
        {/* Logo */}
        <Link href="/" className="text-white text-sm md:text-base font-medium">
          DANIEL DRAPER
        </Link>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white text-2xl"
          aria-label="Toggle menu"
        >
          ☰
        </button>

        <nav className="hidden md:block">
          <ul className="flex items-center gap-6 text-white text-sm">
            <li className="navAnimation">
              <a href="#home">HOME</a>
            </li>
            <span className="dot" />
            <li className="navAnimation">
              <a href="#projects">PROJECTS</a>
            </li>
            <span className="dot" />
            <li className="navAnimation">
              <a href="#drawings">DRAWINGS</a>
            </li>
            <span className="dot" />
            <li className="navAnimation">
              <a href="#experience">EXPERIENCE / SKILLS</a>
            </li>
            <span className="dot" />
            <li className="navAnimation">
              <a href="#contact">CONTACT</a>
            </li>
          </ul>
        </nav>
      </div>

      {/* Mobile Menu */}
      {open && (
        <nav className="md:hidden bg-black text-white">
          <ul className="flex flex-col items-center gap-6 py-6 text-lg">
            <li onClick={() => setOpen(false)}>
              <a href="#home">HOME</a>
            </li>
            <li onClick={() => setOpen(false)}>
              <a href="#projects">PROJECTS</a>
            </li>
            <li onClick={() => setOpen(false)}>
              <a href="#drawings">DRAWINGS</a>
            </li>
            <li onClick={() => setOpen(false)}>
              <a href="#experience">EXPERIENCE / SKILLS</a>
            </li>
            <li onClick={() => setOpen(false)}>
              <a href="#contact">CONTACT</a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
