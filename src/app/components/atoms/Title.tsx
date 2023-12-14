import React from "react";

interface ITitle {
  children?: string;
}

export const Title = ({ children }: ITitle) => {
  return <h2 className="text-2xl font-bold">{children}</h2>;
};
