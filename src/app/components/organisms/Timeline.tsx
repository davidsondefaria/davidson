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
      <TimelineIcons className="left-1/2 h-[60px] -translate-x-1/2">
        <FaTerminal className={"h-full w-full"} />
      </TimelineIcons>
    </>
  );
};

export default Timeline;
