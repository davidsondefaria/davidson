"use client";
import React from "react";
import { usePathname, useSelectedLayoutSegment } from "next/navigation";
import NavBar from "../molecules/NavBar";
import { useActiveSectionContext } from "@/app/context";

const Header = () => {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();
  console.log(activeSection);

  return (
    <div className="absolute top-[1024px]">
      <div className="w-[440px] border">
        <NavBar />
      </div>
    </div>
  );
};

export default Header;
