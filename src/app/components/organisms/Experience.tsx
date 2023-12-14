"use client";
import React from "react";
import { FaTerminal, FaBook } from "react-icons/fa";
import { useSectionInView } from "@/hooks";
import { experienceData } from "@/lib/constants";
import ExperienceBox from "../molecules/ExperienceBox";
import { Title } from "../atoms/Title";
import { Subtitle } from "../atoms/Subtitle";
import Description from "../molecules/Description";

const icons = {
  professional: <FaTerminal className={"h-6 w-6 rounded-full border p-1"} />,
  education: <FaBook className={""} />,
};

type IconKeys = keyof typeof icons;

const Experience = () => {
  const { ref } = useSectionInView("Experience");
  const item = experienceData[0];
  return (
    <section id="experience" ref={ref} className="grid h-[1024px] grid-cols-2">
      <div>
        <div className="h-[200px]"></div>
        <ExperienceBox className="" position="left">
          <Title>{item.title}</Title>
          <Subtitle info={item.location}>{item.company}</Subtitle>
          {item.descriptions.map((description, index) => (
            <React.Fragment key={`description-${index}`}>
              <Description
                item={description.item}
                subitem={description.subitem}
              />
            </React.Fragment>
          ))}
        </ExperienceBox>
      </div>
      <ExperienceBox className="">
        <Title>{item.title}</Title>
        <Subtitle>{item.company}</Subtitle>
      </ExperienceBox>
    </section>
  );
};

export default Experience;

/**
 *
 * https://codesandbox.io/p/sandbox/framer-motion-accordion-qx958?file=%2Fsrc%2FExample.tsx%3A27%2C51
 * */
