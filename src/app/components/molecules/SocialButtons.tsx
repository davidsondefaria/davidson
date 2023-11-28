import React from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import IconButton from "../atoms/IconButton";
import { LINKEDIN_URL, GITHUB_URL } from "@/lib/constants";
import Button from "../atoms/Button";

const SocialButtons = () => {
  return (
    <div className="mb-[36px] flex w-full justify-evenly">
      <div className="flex gap-2 min-w-[120px]">
        <IconButton
          link={LINKEDIN_URL}
          icon={
            <div className="rounded-full text-primary-50 bg-primary-base h-full w-full flex justify-center items-center">
              <FaLinkedinIn />
            </div>
          }
          className=""
        />
        <IconButton
          link={GITHUB_URL}
          icon={<FaGithub className={"w-full h-full text-primary-base"} />}
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
