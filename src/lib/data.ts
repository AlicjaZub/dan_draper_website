import projects from "./projects.json";
import drawings from "./drawings.json";

export const getProjects = () => {
  return projects;
};

export const getProject = (id: number) => {
  return projects.filter((project) => project.id === id)[0];
};

export const getDrawings = () => {
  return drawings;
};

export const getDrawing = (id: number) => {
  return drawings.filter((drawing) => drawing.id === id)[0];
};

