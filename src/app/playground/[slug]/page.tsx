"use client";
import React from "react";
import { useParams } from "next/navigation";
import ShowSquare from "../components/ShowSquare";

type TKey = "show-square";

const components = {
  "show-square": <ShowSquare />,
};

const PlaygroundComponent = () => {
  const { slug } = useParams();
  const key: TKey = slug as TKey;
  return (
    <>
      <a href="/playground" className="fixed top-0 left-0 p-2">
        Go back to Playground
      </a>
      <div className="grid place-content-center">{components[key]}</div>
    </>
  );
};

export default PlaygroundComponent;
