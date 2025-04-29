import React from "react";
import { Project } from "@/components/Project";
import { getDrawings } from "@/lib/data";

const drawings = getDrawings();

const Drawings = () => {
  return (
    <section id="drawings" className="w-full p-4">
      <h2>drawings Section</h2>
      <div className="all">
        {drawings.map((project: any) => {
          console.log(project)
          return <Project key={project.id} project={project} />;
        })}
      </div>
    </section>
  );
};

export default Drawings;
