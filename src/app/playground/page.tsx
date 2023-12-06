"use client";
import React from "react";
import SquareSpinning from "./components/SquareSpinning";
import TapButton from "./components/TapButton";
import FlipSquare from "./components/FlipSquare";

const components = [
  SquareSpinning.component,
  TapButton.component,
  FlipSquare.component,
  <div
    key="scroll-background"
    className="w-[250px] h-[250px] border flex flex-col items-center justify-center gap-4"
  >
    <a href="/playground/scroll-background">See scroll background</a>
  </div>,
  <div
    key="scroll-text"
    className="w-[250px] h-[250px] border flex flex-col items-center justify-center gap-4"
  >
    <a href="/playground/scroll-text">See scroll text</a>
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
