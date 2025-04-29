"use client";
import React from "react";
import { motion } from "framer-motion";

const Project = ({ project }: any) => {
  return (
    <motion.div layout className="container">
      <img src={`/${project.image}`} width="200" height="200" alt="logo" />
    </motion.div>
  );
};

export default Project;
