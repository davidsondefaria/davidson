"use client";
import React from "react";
import NavButton from "../atoms/NavButton";
import { navButtons } from "@/lib/constants";

const NavBar = () => {
  return (
    <nav className="flex w-full justify-between">
      {navButtons.map((button) => (
        <NavButton {...button} active={true} key={`nav-${button.title}`} />
      ))}
    </nav>
  );
};

export default NavBar;
