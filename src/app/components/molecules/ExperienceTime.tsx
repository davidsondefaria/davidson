import { cn } from "@/lib/utils";
import React from "react";

interface IExperienceTime {
  start: string;
  end?: string;
  className?: string;
  children?: React.ReactNode;
  position?: string;
}

const ExperienceTime = ({
  start,
  end,
  className = "",
  position = "right",
  children,
}: IExperienceTime) => {
  return (
    <div className="relative w-1/2">
      <div
        className={cn(
          "absolute flex h-[60px] flex-col justify-center",
          position === "right" ? "right-0" : "left-0",
          className,
        )}
      >
        <span>{start}</span>
        <span>{end}</span>
      </div>
      {children}
    </div>
  );
};

export default ExperienceTime;
