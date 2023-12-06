import React, { useEffect } from "react";
import { motion, useAnimationControls } from "framer-motion";

interface IVerticalLine {
  children?: React.ReactNode;
  activeSection?: string;
}

const VerticalLine = ({ children, activeSection }: IVerticalLine) => {
  const controls = useAnimationControls();
  useEffect(() => {
    if (activeSection === "Experience") {
      controls.start({
        height: "100%",
        top: 0,
        opacity: 1,
        transition: { duration: 1 },
      });
    }
  }, [activeSection]);

  return (
    <div className="h-screen w-0">
      <motion.div
        initial={{ height: 0, top: 0, opacity: 0 }}
        animate={controls}
        className="border-[2px] border-primary-base"
      >
        {children}
      </motion.div>
    </div>
  );
};

export default VerticalLine;
