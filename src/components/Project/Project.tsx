"use client";
import React from "react";
import { motion } from "framer-motion";
import { ProjectType } from "../Projects/Projects";
import { DrawingType } from "../Drawings/Drawings";

const Project = (project: ProjectType | DrawingType) => {
  return (
    <motion.div layout className="container">
      <img
        src={`/${project.image}.jpg`}
        width="200"
        height="200"
        alt={project.image}
      />
    </motion.div>
  );
};

export default Project;
