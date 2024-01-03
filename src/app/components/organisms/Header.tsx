"use client";
import React, { useEffect, useState } from "react";
import {
  AnimatePresence,
  MotionConfig,
  motion,
  useScroll,
} from "framer-motion";
import NavBar from "../molecules/NavBar";
import { cn } from "@/lib/utils";
import { useActiveSectionContext } from "@/context";
import useMeasure from "react-use-measure";

const headerClasses = (showName: boolean) =>
  showName
    ? `absolute top-[52px] w-[530px] p-[10px]`
    : `fixed top-0 left-1/2 -translate-x-1/2 mt-1 w-full 
        max-w-[864px] rounded-full backdrop-blur-3xl`;

const Header = () => {
  const [showName, setShowName] = useState(true);
  const { activeSection } = useActiveSectionContext();
  const [headerRef, { width: headerWidth }] = useMeasure();

  useEffect(() => {
    const changeHeader = () => setShowName(window.scrollY === 0);
    window.addEventListener("scroll", changeHeader);
    return () => window.removeEventListener("scroll", changeHeader);
  }, []);

  return (
    <MotionConfig transition={{ duration: 0.5 }}>
      <div ref={headerRef} className={cn("z-50", headerClasses(showName))}>
        {showName && (
          <div className={"overflow-hidden px-[10px]"}>
            <h1 className="text-6xl font-bold">Hello, I&apos;m</h1>
            <h1 className="text-6xl font-bold">Davidson</h1>
            <p className="text-2xl">
              I create dynamic web solutions to deliver seamless digital
              experiences.
            </p>
          </div>
        )}
        <motion.div animate={{ width: headerWidth - 20 }} className="relative">
          <div className={showName ? "" : "px-4"}>
            <NavBar activeSection={activeSection} />
          </div>
        </motion.div>
      </div>
    </MotionConfig>
  );
};

export default Header;
