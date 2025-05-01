import React from "react";
import { getDrawings } from "@/lib/data";
import { Project } from "@/components/Project";

const drawings: DrawingType[] = getDrawings();

export type DrawingType = {
  id: number;
  image: string;
};

const Drawings = () => {
  return (
    <section id="drawings" className="w-full p-4">
      <h2>drawings Section</h2>
      <div className="all">
        {drawings.map((project: DrawingType) => {
          return <Project key={project.id} {...project} />;
        })}
      </div>
    </section>
  );
};

export default Drawings;
