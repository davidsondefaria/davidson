"use client";
import React, { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";

const _ScrollBackground = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  useEffect(() => {
    console.log("Is in view -> ", isInView);
  }, [isInView]);

  return (
    <>
      <div className="h-[150vh] aspect-square grid place-content-center">
        Scroll to see the animation
      </div>
      <motion.div
        className="h-screen w-full bg-background-300"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />
      <div
        ref={ref}
        className={cn(
          `h-screen w-full transition-background duration-1000`,
          isInView ? "bg-secondary-50" : "bg-secondary-950"
        )}
      />
    </>
  );
};

const ScrollBackground = {
  component: <_ScrollBackground />,
  reference: "https://www.youtube.com/watch?v=znbCa4Rr054",
};

export default ScrollBackground;
