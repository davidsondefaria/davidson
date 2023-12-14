import React from "react";

interface ISubtitle {
  children?: string;
  info?: string;
}

export const Subtitle = ({ children, info }: ISubtitle) => {
  return (
    <div className="flex justify-between">
      <h3 className="text-lg font-bold">{children}</h3>
      {info && <p className="text-sm opacity-90 items-center">{info}</p>}
    </div>
  );
};
