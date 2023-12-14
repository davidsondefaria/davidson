"use client";
import React from "react";
import { motion, MotionConfig } from "framer-motion";
import "./components.css";

const _TapButton = () => {
  return (
    <div className="flex h-[250px] w-[250px] flex-col items-center justify-center gap-4 border">
      <MotionConfig
        transition={{
          duration: 0.125,
          ease: "easeInOut",
        }}
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95, rotate: "2.5deg" }}
          className="example-button"
        >
          Click me!
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.15 }}
          whileTap={{ scale: 0.85, rotate: "-2.5deg" }}
          style={{ backgroundColor: "red" }}
          className="example-button"
        >
          Click me!
        </motion.button>
      </MotionConfig>
    </div>
  );
};

const TapButton = {
  component: <_TapButton />,
  reference: "https://www.youtube.com/watch?v=znbCa4Rr054",
};

export default TapButton;
