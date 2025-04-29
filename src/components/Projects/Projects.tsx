import React, { useEffect, useState } from "react";
import { Filter } from "@/components/Filter";
import { motion, AnimatePresence } from "framer-motion";
import { Project } from "@/components/Project";

const Projects = ({ projects }: any) => {
  const [allProjects, setAllProjects] = useState<any>([]);
  const [filtered, setFiltered] = useState<any>([]);
  const [activeGenre, setActiveGenre] = useState("all");

  useEffect(() => {
    setAllProjects(projects);
    setFiltered(projects);
  }, [projects]);

  return (
    <section id="projects" className="p-4 w-full">
      <h1 className="text-xl text-center mb-4">Projects</h1>
      <Filter
        activeGenre={activeGenre}
        setActiveGenre={setActiveGenre}
        all={allProjects}
        setFiltered={setFiltered}
      />
      <motion.div layout className="flex w-full all">
        <AnimatePresence>
          {filtered.map((project: any) => {
            return <Project key={project.id} project={project} />;
          })}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};

export default Projects;
