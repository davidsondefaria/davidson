import React from "react";
import { motion, MotionConfig } from "framer-motion";
import { cn } from "@/lib/utils";

interface IIconButton {
  link: string;
  icon: React.ReactNode;
  className?: string;
}

const IconButton = ({ link, icon, className }: IIconButton) => {
  return (
    <MotionConfig transition={{ duration: 0.1 }}>
      <motion.a
        whileHover={{ scale: 1.3 }}
        href={link}
        target="_blank"
        className={cn(
          "flex aspect-square h-full items-center gap-1 text-3xl",
          className,
        )}
      >
        {icon}
      </motion.a>
    </MotionConfig>
  );
};

export default IconButton;
