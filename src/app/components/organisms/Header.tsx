"use client";
import React from "react";
import { MotionConfig, motion } from "framer-motion";
import NavBar from "../molecules/NavBar";
import { cn } from "@/lib/utils";
import { useActiveSectionContext } from "@/context";
import useMeasure from "react-use-measure";

const headerClasses = (section: string) =>
  section === "Home"
    ? `fixed top-[52px] w-[530px] p-[10px]`
    : "fixed top-0 left-1/2 -translate-x-1/2 mt-1 w-full max-w-[864px]";

const Header = () => {
  const { activeSection } = useActiveSectionContext();
  const [headerRef, { width: headerWidth }] = useMeasure();

  return (
    <MotionConfig transition={{ duration: 0.5 }}>
      <div
        ref={headerRef}
        className={cn("z-50 bg-background-base", headerClasses(activeSection))}
      >
        {activeSection === "Home" && (
          <div className={"overflow-hidden px-[10px]"}>
            <h1 className="text-8xl font-bold">Hello, I&apos;m</h1>
            <h1 className="text-8xl font-bold">Davidson</h1>
            <p className="text-2xl">
              I create dynamic web solutions to deliver seamless digital
              experiences.
            </p>
          </div>
        )}
        <motion.div animate={{ width: headerWidth - 20 }} className="relative">
          <div className={activeSection === "Home" ? "" : "px-4"}>
            <NavBar activeSection={activeSection} />
          </div>
        </motion.div>
      </div>
    </MotionConfig>
  );
};

export default Header;
