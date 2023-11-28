"use client";
import { useSectionInView } from "@/hooks";
import React from "react";

const Experience = () => {
  const { ref } = useSectionInView("Experience");
  return (
    <section
      id="experience"
      ref={ref}
      className="border h-[1024px] flex justify-center items-center"
    >
      Experience
    </section>
  );
};

export default Experience;
