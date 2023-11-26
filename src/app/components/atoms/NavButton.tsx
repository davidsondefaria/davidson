import { INavButton } from "@/types";
import React from "react";

const NavButton = ({ title, redirect, active = false }: INavButton) => {
  return (
    <a
      href={redirect}
      className={`hover:opacity-100 ${
        active ? "underline underline-offset-2 opacity-80" : "opacity-50"
      }`}
    >
      {title}
    </a>
  );
};

export default NavButton;
