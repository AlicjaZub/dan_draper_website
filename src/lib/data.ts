import projects from './projects.json'
import drawings from "./drawings.json"

export const getProjects = () => {
	return projects
}

export const getProject = (id: number) => {
	return projects.filter(project => project.id === id)
}

export const getDrawings = () => {
	return drawings;
}