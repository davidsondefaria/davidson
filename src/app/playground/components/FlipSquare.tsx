import React from "react";
import { motion, useAnimationControls } from "framer-motion";

const _FlipSquare = () => {
  const controls = useAnimationControls();

  const handleClick = () => {
    controls.start("flip");
  };

  return (
    <div className="w-[250px] h-[250px] border flex flex-col items-center justify-center gap-4">
      <button onClick={handleClick} className="example-button">
        Flip it!
      </button>
      <motion.div
        style={{
          width: 150,
          height: 150,
          background: "black",
        }}
        variants={{
          initial: {
            rotate: "0deg",
          },
          flip: {
            rotate: ["360deg", "0deg"],
          },
        }}
        initial="initial"
        animate={controls}
      ></motion.div>
    </div>
  );
};

const FlipSquare = {
  component: <_FlipSquare />,
  reference: "https://www.youtube.com/watch?v=znbCa4Rr054",
};

export default FlipSquare;

//https://www.youtube.com/watch?v=znbCa4Rr054
