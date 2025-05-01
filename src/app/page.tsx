"use client";
import { Home } from "@/components/Home";
import { Projects } from "@/components/Projects";
import { Drawings } from "@/components/Drawings";
import { Experience } from "@/components/Experience";
import { Contact } from "@/components/Contact";
import { CV } from "@/components/CV";
import { Skills } from "@/components/Skills";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Home />
      <Projects />
      <Drawings />
      <Experience />
      <Skills />
      <Contact />
      <CV />
    </main>
  );
}
