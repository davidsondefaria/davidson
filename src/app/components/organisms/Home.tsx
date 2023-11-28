"use client";
import { useSectionInView } from "@/hooks";
import React from "react";
import SocialButtons from "../molecules/SocialButtons";

const Home = () => {
  const { ref } = useSectionInView("Home");
  return (
    <section
      id="home"
      ref={ref}
      className="h-[1024px] border pt-[40px] pb-[36px] flex justify-center items-center"
    >
      <div className="border h-full w-full border-accent-500 flex items-end justify-center">
        <SocialButtons />
      </div>
      <div className="border h-full w-full border-accent-200">Botões</div>
    </section>
  );
};

export default Home;
