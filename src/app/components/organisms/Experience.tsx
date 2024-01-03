"use client";
import React from "react";
import { motion } from "framer-motion";
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
import useMeasure from "react-use-measure";
import { cn } from "@/lib/utils";
import { useActiveSectionContext } from "@/context";

const icons = {
  professional: <FaTerminal className={"h-full w-full"} />,
  education: <FaBook className={"h-full w-full"} />,
};

type IconKeys = keyof typeof icons;

const Experience = () => {
  const { ref } = useSectionInView("Experience", 0.75);
  const { activeSection } = useActiveSectionContext();
  const [containerRef, { height }] = useMeasure();
  return (
    <motion.section
      animate={activeSection === "Experience" ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.3 }}
      id="experience"
      ref={ref}
      className="py-8"
    >
      <div ref={containerRef}>
        <div
          style={{ height: height }}
          className={cn(
            "absolute left-1/2 -z-10 -translate-x-1/2 border-[2px] border-primary-base",
          )}
        />
        <div className="flex flex-col gap-16 py-8">
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
                  <div>
                    <TimelineIcons className="h-[60px] bg-none backdrop-blur-[6px]">
                      {icons[item.type as IconKeys]}
                    </TimelineIcons>
                  </div>
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
        </div>
      </div>
    </motion.section>
  );
};

export default Experience;

/**
 *
 * https://codesandbox.io/p/sandbox/framer-motion-accordion-qx958?file=%2Fsrc%2FExample.tsx%3A27%2C51
 * */
