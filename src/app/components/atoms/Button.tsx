import React from "react";
import { motion, MotionConfig } from "framer-motion";
import { cn } from "@/lib/utils";

type ButtonsVariants = "default" | "outline";

interface IButton {
  onClick(): void;
  children?: React.ReactNode;
  variant?: ButtonsVariants;
  className?: string;
}

const buttonClasses = {
  default: `text-text-50 rounded-full bg-primary-base`,
  outline: "text-primary-base rounded-full border-4 border-primary-base",
};

const Button = ({
  children,
  onClick,
  variant = "default",
  className,
}: IButton) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        `text-2xl
        my-[4px] mx-[4px] py-[6px] px-[12px] 
        hover:ml-0 hover:mr-[8px] hover:mt-0 hover:mb-[8px]
        hover:shadow-rbaccent hover:transition ease-in-out
        `,
        buttonClasses[variant],
        className
      )}
    >
      {children}
    </button>
  );
};

export default Button;
