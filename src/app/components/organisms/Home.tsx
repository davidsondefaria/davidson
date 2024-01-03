"use client";
import React from "react";
import { motion } from "framer-motion";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { useSectionInView } from "@/hooks";
import { useActiveSectionContext } from "@/context";
import { aboutText, tagSkills } from "@/lib/constants";
import SocialButtons from "../molecules/SocialButtons";
import ExpTag, { ExpTagType } from "../molecules/ExpTag";

const Home = () => {
  const { ref } = useSectionInView("Home", 0.75);
  const { activeSection } = useActiveSectionContext();
  return (
    <motion.section
      animate={activeSection === "Home" ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.3 }}
      id="home"
      ref={ref}
      className="flex h-screen items-center justify-center pb-[36px] pt-[40px]"
    >
      <div className="mb-[36px] flex h-full w-full items-end justify-center">
        <SocialButtons />
      </div>
      <div className="mb-[36px] mt-[56px] flex h-full w-full flex-col justify-between">
        <div className="rich-text px-2 py-3">
          {documentToReactComponents(aboutText, {
            renderMark: { strike: (text) => <s>{text}</s> },
          })}
        </div>
        <div className="flex flex-wrap justify-between">
          {tagSkills
            .sort((a, b) => b.experienceTime - a.experienceTime)
            .map((tag, index) => (
              <ExpTag
                key={`exp-tag-${index}`}
                title={tag.tag}
                type={tag.type as ExpTagType}
                experienceTime={tag.experienceTime}
                expertise={tag.expertise}
              />
            ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Home;
