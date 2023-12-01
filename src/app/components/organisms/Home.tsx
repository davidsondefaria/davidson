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
  const { ref } = useSectionInView("Home", 0.5);
  const { activeSection } = useActiveSectionContext();
  return (
    <motion.section
      animate={activeSection === "Home" ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.3 }}
      id="home"
      ref={ref}
      className="h-screen pt-[40px] pb-[36px] flex justify-center items-center"
    >
      <div className="mb-[36px] h-full w-full flex items-end justify-center">
        <SocialButtons />
      </div>
      <div className="mb-[36px] h-full w-full flex flex-col justify-between">
        <div className="px-2 py-3 rich-text">
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
