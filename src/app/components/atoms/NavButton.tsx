"use client";
import React from "react";
import Link from "next/link";
import type { INavButton } from "@/types";

const NavButton = ({ title, redirect, active = false }: INavButton) => {
  return (
    <Link
      href={redirect}
      className={`p-[10px] text-2xl hover:opacity-100 ${
        active ? "underline underline-offset-2 opacity-80" : "opacity-50"
      }`}
    >
      {title}
    </Link>
  );
};

export default NavButton;
