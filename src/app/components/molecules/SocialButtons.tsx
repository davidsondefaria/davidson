import React from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import IconButton from "../atoms/IconButton";
import { LINKEDIN_URL, GITHUB_URL } from "@/lib/constants";
import Button from "../atoms/Button";

const SocialButtons = () => {
  return (
    <div className="flex w-full justify-evenly">
      <div className="flex min-w-[120px] gap-2">
        <IconButton
          link={LINKEDIN_URL}
          icon={
            <div className="flex h-[48px] w-[48px] items-center justify-center rounded-full bg-primary-base text-primary-50">
              <FaLinkedinIn />
            </div>
          }
          className=""
        />
        <IconButton
          link={GITHUB_URL}
          icon={<FaGithub className={"h-[48px] w-[48px] text-primary-base"} />}
          className=""
        />
      </div>
      <Button
        variant="outline"
        onClick={() => {
          console.log("clicked");
        }}
      >
        Download CV
      </Button>
      <Button
        onClick={() => {
          console.log("clicked");
        }}
      >
        Contact
      </Button>
    </div>
  );
};

export default SocialButtons;
