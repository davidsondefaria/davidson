"use client";
import { useSectionInView } from "@/app/hooks";
import React from "react";

const Projects = () => {
  const { ref } = useSectionInView("Projects");
  return (
    <section
      id="projects"
      ref={ref}
      className="border h-[1024px] flex justify-center items-center"
    >
      Projects
    </section>
  );
};

export default Projects;
