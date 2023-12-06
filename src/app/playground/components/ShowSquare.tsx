"use client";
import React, { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";

const ShowSquare = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  useEffect(() => {
    console.log("Is in view -> ", isInView);
  }, [isInView]);

  return (
    <>
      <div className="h-[150vh] aspect-square" />
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

export default ShowSquare;
