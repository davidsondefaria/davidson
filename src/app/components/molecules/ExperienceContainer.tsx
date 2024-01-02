import { cn } from "@/lib/utils";
import React from "react";

interface IExperienceContainer {
  children?: React.ReactNode;
  boxRight?: boolean;
}

const ExperienceContainer = ({ children, boxRight }: IExperienceContainer) => {
  // console.log(boxRight);
  return (
    <div
      className={cn("flex gap-4", boxRight ? "flex-row" : "flex-row-reverse")}
    >
      {children}
    </div>
  );
};

export default ExperienceContainer;
