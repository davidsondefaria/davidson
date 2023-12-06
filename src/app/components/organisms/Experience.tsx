"use client";
import { useSectionInView } from "@/hooks";
import React from "react";
import Timeline from "./Timeline";

const Experience = () => {
  const { ref } = useSectionInView("Experience");
  return (
    <section
      id="experience"
      ref={ref}
      className="border h-[1024px] flex justify-center items-center"
    >
      <div className="w-full"> Esquerda </div>
      <Timeline />
      <div className="w-full"> Direita </div>
    </section>
  );
};

export default Experience;

/**
 *
 * https://codesandbox.io/p/sandbox/framer-motion-accordion-qx958?file=%2Fsrc%2FExample.tsx%3A27%2C51
 * */
