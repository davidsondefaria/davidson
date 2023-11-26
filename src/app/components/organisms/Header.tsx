"use client";
import React from "react";
import { motion, useScroll } from "framer-motion";
import NavBar from "../molecules/NavBar";
import { cn } from "@/lib/utils";
import { useActiveSectionContext } from "@/context";

const headerClasses = (section: string) =>
  section === "Home"
    ? `fixed top-[52px] w-[440px]`
    : "fixed top-0 mt-1 w-full max-w-[864px]";

const headerVariants = {
  home: { x: 0 },
  expanded: { x: 0 },
};

const navBgVariants = {
  home: { y: 0, scale: 0 },
  expanded: { y: 0, scale: 1 },
};

const Header = () => {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  const t = useScroll();

  console.log(t.scrollY, t.scrollYProgress);

  return (
    <motion.div
      variants={headerVariants}
      animate={activeSection === "Home" ? "home" : "expanded"}
      transition={{ layout: { duration: 1 } }}
      layout
      className={cn("z-50", headerClasses(activeSection))}
    >
      {activeSection === "Home" && false && (
        <motion.div
          layout="position"
          className={activeSection === "Home" ? `border` : "none"}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <h1 className="text-8xl font-bold ">Hello, I'm</h1>
          <h1 className="text-8xl font-bold">Davidson</h1>
          <p className="text-2xl">
            I create dynamic web solutions to deliver seamless digital
            experiences.
          </p>
        </motion.div>
      )}
      <motion.div layout="position" className={"relative"}>
        <motion.div
          variants={navBgVariants}
          animate={activeSection === "Home" ? "home" : "expanded"}
          transition={{ layout: { duration: 1 } }}
          layout
          className={
            activeSection === "Home"
              ? "absolute w-0 h-0  bg-background-100 rounded-full"
              : "absolute w-full h-full bg-background-100 rounded-full"
          }
        ></motion.div>
        <div className={activeSection === "Home" ? "" : "px-4"}>
          <NavBar activeSection={activeSection} />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Header;
