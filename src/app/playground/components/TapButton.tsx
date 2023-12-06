"use client";
import React from "react";
import { motion, MotionConfig } from "framer-motion";
import "./components.css";

const TapButton = () => {
  return (
    <div className="w-[250px] h-[250px] border flex flex-col items-center justify-center gap-4">
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

export default TapButton;
