import React from "react";
import { getDrawings } from "@/lib/data";
import { Project } from "@/components/Project";

const drawings: DrawingType[] = getDrawings();

export type DrawingType = {
  id: number;
  image: string;
  title: string;
};

const Drawings = () => {
  return (
    <section id="drawings" className="w-full">
      <h1 className="text-xl text-center mt-4 mb-10">DRAWINGS</h1>
      <div className="all">
        {drawings.map((project: DrawingType) => {
          return <Project key={project.id} {...project} />;
        })}
      </div>
    </section>
  );
};

export default Drawings;
