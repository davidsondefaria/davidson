"use client";
import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Project from "./Project";
import { useSectionInView } from "@/hooks";
import { projectsData } from "@/lib/constants";
import Button from "../atoms/Button";
import { useActiveSectionContext } from "@/context";

const cardVariants = {
  initial: { y: 50, opacity: 0 },
  animate: { y: 0, opacity: 1 },
};

const Projects = () => {
  const [filter, setFilter] = useState("All");
  const { ref: sectionRef } = useSectionInView("Projects", 0.75);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const { activeSection } = useActiveSectionContext();

  const filteredProjects = projectsData
    .filter(({ type }) => filter === "All" || filter === type)
    .toReversed();
  const filterTypes = new Set([
    "All",
    ...projectsData.map((project: any) => project.type),
  ]);

  const handleFilter = (newFilter: string) => {
    setFilter(newFilter);
  };

  return (
    <motion.section
      animate={activeSection === "Projects" ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.3 }}
      id="projects"
      ref={sectionRef}
      className="py-8"
    >
      <div className="flex flex-row items-center justify-center gap-2 py-6">
        {Array.from(filterTypes).map((type: string) => (
          <React.Fragment key={`filter-${type.toLowerCase()}`}>
            <Button
              variant="outline"
              onClick={() => {
                handleFilter(type);
              }}
              className={
                type === filter ? "border-2" : "border-none border-primary-700"
              }
            >
              {type}
            </Button>
          </React.Fragment>
        ))}
      </div>
      <ul ref={ref} className="grid w-full gap-4 md:grid-cols-2 md:gap-8">
        {filteredProjects.map((project, index) => (
          <motion.li
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
            key={`project-${index}`}
          >
            <Project {...project} />
          </motion.li>
        ))}
      </ul>
    </motion.section>
  );
};

export default Projects;
