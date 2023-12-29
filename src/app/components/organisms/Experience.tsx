"use client";
import React from "react";
import { FaTerminal, FaBook } from "react-icons/fa";
import { useSectionInView } from "@/hooks";
import { experienceData } from "@/lib/constants";
import ExperienceBox from "../molecules/ExperienceBox";
import { Title } from "../atoms/Title";
import { Subtitle } from "../atoms/Subtitle";
import ExperienceDescription from "../molecules/ExperienceDescription";
import ExperienceContainer from "../molecules/ExperienceContainer";
import TimelineIcons from "../atoms/TimelineIcons";
import ExperienceTime from "../molecules/ExperienceTime";

const icons = {
  professional: <FaTerminal className={"h-full w-full"} />,
  education: <FaBook className={"h-full w-full"} />,
};

type IconKeys = keyof typeof icons;

const Experience = () => {
  const { ref } = useSectionInView("Experience");
  return (
    <section
      id="experience"
      ref={ref}
      className="mt-5 flex h-[1024px] flex-col gap-16"
    >
      {experienceData
        .filter((item) => item.type !== "courses")
        .map((item, index) => (
          <React.Fragment key={`experience-${index}`}>
            <ExperienceContainer boxRight={index % 2 === 0}>
              <ExperienceTime
                start={item.dates.start}
                end={item.dates.end}
                position={index % 2 === 0 ? "right" : "left"}
              />
              <TimelineIcons className="h-[60px]">
                {icons[item.type as IconKeys]}
              </TimelineIcons>
              <ExperienceBox
                className="w-1/2"
                position={index % 2 === 0 ? "right" : "left"}
              >
                <Title>{item.title}</Title>
                <Subtitle info={item.location}>{item.company}</Subtitle>
                {item.descriptions.map((description, index) => (
                  <React.Fragment key={`description-${index}`}>
                    <ExperienceDescription
                      item={description.item}
                      subitem={description.subitem}
                    />
                  </React.Fragment>
                ))}
              </ExperienceBox>
            </ExperienceContainer>
          </React.Fragment>
        ))}
    </section>
  );
};

export default Experience;

/**
 *
 * https://codesandbox.io/p/sandbox/framer-motion-accordion-qx958?file=%2Fsrc%2FExample.tsx%3A27%2C51
 * */
