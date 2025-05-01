import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex justify-between px-10 py-8 navbar">
      <Link href="/">DANIEL DRAPER</Link>
      <nav>
        <ul className="flex items-center gap-6">
          <li className="navAnimation">
            <a href="#home">HOME</a>
          </li>
          <span className="dot"></span>
          <li className="navAnimation">
            <a href="#projects">PROJECTS</a>
          </li>
          <span className="dot"></span>
          <li className="navAnimation">
            <a href="#drawings">DRAWINGS</a>
          </li>
          <span className="dot"></span>
          <li className="navAnimation">
            <a href="#experience">EXPERIENCE/SKILLS</a>
          </li>
          <span className="dot"></span>
          <li className="navAnimation">
            <a href="#contact">CONTACT</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
