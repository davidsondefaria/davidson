"use client";
import React from "react";
import SquareSpinning from "./components/SquareSpinning";
import TapButton from "./components/TapButton";
import FlipSquare from "./components/FlipSquare";

interface INewPage {
  slug: string;
  name: string;
}

const NewPage = ({ slug, name }: INewPage) => {
  return (
    <div
      key="scroll-background"
      className="flex h-[250px] w-[250px] flex-col items-center justify-center gap-4 border"
    >
      <a href={`/playground/${slug}`}>See {name}</a>
    </div>
  );
};

const components = [
  SquareSpinning.component,
  TapButton.component,
  FlipSquare.component,
  <NewPage
    key="scroll-background"
    slug="scroll-background"
    name="scroll background"
  />,
  <NewPage key="scroll-text" slug="scroll-text" name="scroll text" />,
];

const page = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 p-4">
      <h1 className="text-4xl">Playground</h1>
      <p className="text-2xl">Testing animations and features</p>
      <div className="columns-1 gap-4 sm:columns-2 xl:columns-3">
        {components.map((children, idx) => (
          <div
            className="sm:mb-[15px]; mb-[10px] inline-block w-full"
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
