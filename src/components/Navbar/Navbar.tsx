import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex justify-between px-10 py-8 navbar">
      <Link href="/">DANIEL DRAPER</Link>
      <nav>
        <ul className="flex items-center gap-8">
          <li className="navAnimation">
            <a href="#home">Home</a>
          </li>
          <span className="dot"></span>
          <li className="navAnimation">
            <a href="#projects">Projects</a>
          </li>
          <span className="dot"></span>
          <li className="navAnimation">
            <a href="#drawings">Drawings</a>
          </li>
          <span className="dot"></span>
          <li className="navAnimation">
            <a href="#experience">Experience/Skills</a>
          </li>
          <span className="dot"></span>
          <li className="navAnimation">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
