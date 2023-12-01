"use client";
import React from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { useSectionInView } from "@/hooks";
import SocialButtons from "../molecules/SocialButtons";
import { aboutText, tagSkills } from "@/lib/constants";
import ExpTag, { ExpTagType } from "../molecules/ExpTag";

const Home = () => {
  const { ref } = useSectionInView("Home");
  return (
    <section
      id="home"
      ref={ref}
      className="h-[1024px] pt-[40px] pb-[36px] flex justify-center items-center"
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
    </section>
  );
};

export default Home;
