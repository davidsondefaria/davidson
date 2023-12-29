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
        `bg-transparent aspect-square min-h-[40px]
        rounded-full border-[3px] border-primary-base
        bg-opacity-80 p-3 text-primary-base`,
        className,
      )}
    >
      {children}
    </div>
  );
};

export default TimelineIcons;
