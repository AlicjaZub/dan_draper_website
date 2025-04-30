"use client";
import { getProjects } from "@/lib/data";
import { useEffect, useState } from "react";
import { Home } from "@/components/Home";
import { Projects } from "@/components/Projects";
import { Drawings } from "@/components/Drawings";
import { Experience } from "@/components/Experience";
import { Contact } from "@/components/Contact";
import { CV } from "@/components/CV";
import { Skills } from "@/components/Skills";

export default function Page() {
  const [allProjects, setAllProjects] = useState<any>([]);

  useEffect(() => {
    const projects = getProjects();
    setAllProjects(projects);
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center">
      <Home />
      <Projects projects={allProjects} />
      <Drawings />
      <Experience />
      <Skills />
      <Contact />
      <CV />
    </main>
  );
}
