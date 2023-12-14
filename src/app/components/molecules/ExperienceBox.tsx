"use client";
import React from "react";
import { FaTerminal, FaBook } from "react-icons/fa";
import ArrowBoxIcon from "../atoms/ArrowBoxIcon";
import { cn } from "@/lib/utils";

interface IExperienceBox {
  children?: React.ReactNode;
  position?: "left" | "right";
  arrow?: React.ReactNode;
  className?: string;
}

const arrowPosition = {
  right: "left-0 -translate-x-3/4",
  left: "-scale-x-100 right-0 translate-x-3/4",
};

const ExperienceBox = ({
  children,
  position = "right",
  arrow = <ArrowBoxIcon />,
  className,
}: IExperienceBox) => {
  return (
    <div
      className={cn(
        `relative flex h-fit w-full flex-col gap-2
          rounded-[10px] bg-secondary-50 p-[10px]
        `,
        className,
      )}
    >
      <div
        className={cn("absolute text-primary-base", arrowPosition[position])}
      >
        {arrow}
      </div>
      {children}
    </div>
  );
};

export default ExperienceBox;
