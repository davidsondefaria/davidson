"use client";
import React from "react";
import { useParams } from "next/navigation";
import ScrollBackground from "../components/ScrollBackground";
import ScrollText from "../components/ScrollText";

type TKey = "scroll-background" | "scroll-text";

const components = {
  "scroll-background": ScrollBackground,
  "scroll-text": ScrollText,
};

const PlaygroundComponent = () => {
  const { slug } = useParams();
  const key: TKey = slug as TKey;
  return (
    <>
      <a href="/playground" className="fixed left-0 top-0 p-2">
        Go back to Playground
      </a>
      {Object.keys(components).includes(key) ? (
        <>
          <div className="grid place-content-center">
            {components[key].component}
          </div>
          <footer className=" bottom-0 left-1/2 mt-20 -translate-y-1/2 text-center">
            <a href={components[key].reference} target="_blank">
              Reference
            </a>
          </footer>
        </>
      ) : (
        <div className="grid h-screen place-content-center">
          404: Component not found
        </div>
      )}
    </>
  );
};

export default PlaygroundComponent;
