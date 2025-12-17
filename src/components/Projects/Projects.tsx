"use client";
import React, { useEffect, useState } from "react";
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
  const [allProjects, setAllProjects] = useState<ProjectType[]>([]);
  const [filtered, setFiltered] = useState<ProjectType[]>([]);
  const [activeGenre, setActiveGenre] = useState("all");

  useEffect(() => {
    const projects = getProjects() as ProjectType[];
    setAllProjects(projects);
    setFiltered(projects);
  }, []);

  return (
    <section id="projects" className="py-4 md:py-8 w-full px-2 md:px-16">
      <Filter
        activeGenre={activeGenre}
        setActiveGenre={setActiveGenre}
        all={allProjects}
        setFiltered={setFiltered}
      />
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
