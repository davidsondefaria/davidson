"use client";
import React from "react";
import NavBar from "../molecules/NavBar";
import { useActiveSectionContext } from "@/context";

const headerClasses = (section: string) =>
  section === "Home"
    ? `absolute top-[40px] w-[440px]`
    : "fixed top-0 left-1/2 -translate-x-2/4 px-4 mt-1 w-full max-w-[864px] bg-background-100 rounded-full";

const Header = () => {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();
  console.log(activeSection);

  return (
    <div className={headerClasses(activeSection)}>
      {activeSection === "Home" && (
        <div className="border">
          <h1 className="text-8xl font-bold">Hello, I'm</h1>
          <h1 className="text-8xl font-bold">Davidson</h1>
          <p className="text-2xl">
            I create dynamic web solutions to deliver seamless digital
            experiences.
          </p>
        </div>
      )}
      <NavBar activeSection={activeSection} />
    </div>
  );
};

export default Header;
