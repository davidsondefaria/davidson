"use client";
import React from "react";
import SquareSpinning from "./components/SquareSpinning";
import TapButton from "./components/TapButton";
import FlipSquare from "./components/FlipSquare";

const components = [
  <SquareSpinning key={"square-spinning"} />,
  <TapButton key={"gesture"} />,
  <FlipSquare key="flip-square" />,
  <div
    key="show-square"
    className="w-[250px] h-[250px] border flex flex-col items-center justify-center gap-4"
  >
    <a href="/playground/show-square">See Show Square</a>
  </div>,
];

const page = () => {
  return (
    <div className="flex flex-col p-4 items-center justify-center gap-4">
      <h1 className="text-4xl">Playground</h1>
      <p className="text-2xl">Testing animations and features</p>
      <div className="gap-4 columns-1 sm:columns-2 xl:columns-3">
        {components.map((children, idx) => (
          <div
            className="inline-block w-full mb-[10px] sm:mb-[15px];"
            key={`card-${idx}`}
          >
            {children}
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
