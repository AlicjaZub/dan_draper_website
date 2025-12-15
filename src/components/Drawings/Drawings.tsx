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
      <div className="grid grid-cols-1 sm:grid-cols-2 w-full gap-6">
        {drawings.map((project: DrawingType) => {
          return <Project key={project.id} {...project} />;
        })}
      </div>
    </section>
  );
};

export default Drawings;
