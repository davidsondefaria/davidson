"use client";
import { useSectionInView } from "@/app/hooks";
import React from "react";

const Home = () => {
  const { ref } = useSectionInView("Home");
  return (
    <section
      id="Home"
      ref={ref}
      className="border h-[1024px] flex justify-center items-center"
    >
      Home
    </section>
  );
};

export default Home;
