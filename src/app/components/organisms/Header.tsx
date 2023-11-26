import React from "react";
import NavButton from "../atoms/NavButton";

const Header = () => {
  return (
    <div className="absolute top-[50px]">
      <div className="flex">
        <NavButton redirect="" title="About" active={true} />
        <NavButton redirect="" title="About" active={false} />
        <NavButton redirect="" title="About" active={false} />
      </div>
    </div>
  );
};

export default Header;
