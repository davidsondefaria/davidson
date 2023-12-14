"use client";
import { useSectionInView } from "@/hooks";
import React from "react";

const Projects = () => {
  const { ref } = useSectionInView("Projects");
  return (
    <section
      id="projects"
      ref={ref}
      className="flex h-[1024px] items-center justify-center border"
    >
      Projects
    </section>
  );
};

export default Projects;
