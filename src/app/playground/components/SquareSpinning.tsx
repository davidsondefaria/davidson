"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const _SquareSpinning = () => {
  const [isVisible, setIsVisible] = useState(true);
  return (
    <div className="flex h-[250px] w-[250px] flex-col items-center justify-center gap-4 border">
      <motion.button
        onClick={() => setIsVisible(!isVisible)}
        className="example-button"
        layout
      >
        Show/Hide
      </motion.button>
      <AnimatePresence mode="popLayout">
        {isVisible && (
          <motion.div
            initial={{
              rotate: "0deg",
              scale: 0,
              y: 0,
            }}
            animate={{
              rotate: "180deg",
              scale: 1,
              y: [0, 150, -150, -150, 0],
            }}
            exit={{
              rotate: "0deg",
              scale: 0,
              y: 0,
            }}
            transition={{
              duration: 1,
              ease: "backInOut",
              times: [0, 0.25, 0.5, 0.85, 1],
            }}
            style={{
              width: 150,
              height: 150,
              background: "black",
            }}
          ></motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const SquareSpinning = {
  component: <_SquareSpinning />,
  reference: "https://www.youtube.com/watch?v=znbCa4Rr054",
};

export default SquareSpinning;
