"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { ProjectType } from "../Projects/Projects";
import { DrawingType } from "../Drawings/Drawings";
import { ProjectCard } from "../ProjectCard";

const Project = (project: ProjectType | DrawingType) => {
  const [showPopup, setShowPopup] = useState(false);
  return (
    <div>
      <motion.div
        layout
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.3 }}
        className="container"
        onClick={() => setShowPopup(true)}
      >
        <div className="overlay">
          <h3 className="title">{project.title}</h3>
        </div>
        <img
          className="project-image"
          loading="lazy"
          src={`/${project.image}.jpg`}
          width="200"
          height="200"
          alt={project.image}
        />
      </motion.div>
      {showPopup && (
        <ProjectCard
          isOpen={showPopup}
          onClose={() => setShowPopup(false)}
          id={project.id}
        />
      )}
    </div>
  );
};

export default Project;
