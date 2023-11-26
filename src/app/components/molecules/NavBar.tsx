"use client";
import React from "react";
import { motion } from "framer-motion";
import NavButton from "../atoms/NavButton";
import { navButtons } from "@/lib/constants";
import { INavBar } from "@/types";

const NavBar = ({ activeSection = "Home" }: INavBar) => {
  return (
    <motion.nav layout="position" className="flex w-full justify-between">
      {navButtons.map((button) => (
        <NavButton
          {...button}
          active={activeSection === button.title}
          key={`nav-${button.title}`}
        />
      ))}
    </motion.nav>
  );
};

export default NavBar;
