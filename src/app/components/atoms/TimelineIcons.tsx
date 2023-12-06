import { cn } from "@/lib/utils";
import React from "react";

interface ITimelineIcons {
  children: React.ReactNode;
  className?: string;
}

const TimelineIcons = ({ children, className }: ITimelineIcons) => {
  return (
    <div
      className={cn(
        className,
        `min-h-[40px] p-3 aspect-square
        text-primary-base bg-transparent bg-opacity-80
        rounded-full border-[3px] border-primary-base`
      )}
    >
      {children}
    </div>
  );
};

export default TimelineIcons;
