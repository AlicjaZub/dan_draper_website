"use client";
import React, { useState } from "react";
import { Filter } from "@/components/Filter";
import { motion, AnimatePresence } from "framer-motion";
import { Project } from "@/components/Project";
import { getProjects } from "@/lib/data";

export type ProjectType = {
  id: number;
  title: string;
  image: string;
  role: string;
  secondary_role: string;
  name: string;
  collaborator_title: string;
  collaborator_name: string;
  company: string;
  notes: string;
  video: string;
  type: string;
  image1: string;
  image2: string;
  image3: string;
  image4: string;
  image5: string;
  kind: "project";
};

const Projects = () => {
  const allProjects = getProjects() as ProjectType[];
  const [activeGenre, setActiveGenre] = useState("all");

  const filtered =
    activeGenre === "all"
      ? allProjects
      : allProjects.filter((project) => project.type.includes(activeGenre));

  return (
    <section id="projects" className="py-4 md:py-8 w-full px-2 md:px-16">
      <Filter activeGenre={activeGenre} setActiveGenre={setActiveGenre} />
      <motion.div
        layout
        className="grid grid-cols-1 sm:grid-cols-2 w-full gap-6"
      >
        <AnimatePresence>
          {filtered.map((project: ProjectType) => {
            return <Project key={project.id} {...project} />;
          })}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};

export default Projects;
