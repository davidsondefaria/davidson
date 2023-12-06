import React from "react";
import { useActiveSectionContext } from "@/context";
import VerticalLine from "../atoms/VerticalLine";
import TimelineIcons from "../atoms/TimelineIcons";
import { FaTerminal } from "react-icons/fa";

const Timeline = () => {
  const { activeSection } = useActiveSectionContext();
  return (
    <>
      <VerticalLine activeSection={activeSection} />
      <TimelineIcons className="h-[60px] left-1/2 -translate-x-1/2">
        <FaTerminal className={"w-full h-full"} />
      </TimelineIcons>
    </>
  );
};

export default Timeline;
