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

/**
 *
 * https://codesandbox.io/p/sandbox/framer-motion-accordion-qx958?file=%2Fsrc%2FExample.tsx%3A27%2C51
 * */
