import React, { useState } from "react";
import { motion } from "framer-motion";
import useMeasure from "react-use-measure";
import { FaStar, FaRegStar } from "react-icons/fa";
import { cn } from "@/lib/utils";

export type ExpTagType = "hard" | "soft";

interface IExpTag {
  title: string;
  type: ExpTagType;
  experienceTime: number;
  expertise: number;
  className?: string;
}

const expertiseStars = (expertise: number) => {
  const starsFull: React.ReactNode[] = Array(expertise).fill(<FaStar />);
  const starsEmpty: React.ReactNode[] = Array(5 - expertise).fill(
    <FaRegStar />,
  );
  return [...starsFull, ...starsEmpty];
};

const ExpTag = ({
  title,
  type = "soft",
  experienceTime = 0,
  expertise = 0,
  className,
}: IExpTag) => {
  const [isHovered, setIsHovered] = useState(false);
  const [ref, measures] = useMeasure();
  return (
    <div className="relative w-fit">
      <div
        onMouseEnter={() => {
          setIsHovered(true);
        }}
        onMouseLeave={() => {
          setIsHovered(false);
        }}
        className={cn(
          `mx-[4px] my-[4px] w-fit rounded-2xl bg-primary-base
        px-[10px] py-[10px] text-xl text-text-50 
        ease-in-out hover:mb-[8px] hover:ml-0 hover:mr-[8px] hover:mt-0
        hover:rounded-br-none hover:shadow-rbaccent hover:transition
        `,
          className,
        )}
      >
        <h1 ref={ref}>{title}</h1>
        <motion.div
          transition={{ duration: 0, ease: "linear" }}
          animate={
            isHovered
              ? {
                  opacity: 1,
                  right: 0,
                  top: measures.height,
                  marginTop: 9,
                  height: "auto",
                  width: "auto",
                  boxShadow: "4px 4px 4px 0px var(--accent-200)",
                }
              : {
                  opacity: 0,
                  width: 0,
                  height: 0,
                  right: 0,
                  marginTop: 9,
                  top: measures.height,
                  boxShadow: "none",
                }
          }
          className={cn(
            `absolute z-50 mb-[8px]
              ml-0 mr-[8px] mt-0 w-fit overflow-hidden
              rounded-2xl rounded-tr-none bg-primary-base px-[10px] pb-[10px] pt-[10px] text-xl 
              text-text-50
            `,
            className,
          )}
        >
          <div className="-gap-4 flex w-full flex-col items-center text-base">
            {type === "hard" && (
              <span>
                {experienceTime} {experienceTime === 1 ? "year" : "years"}
              </span>
            )}
            <div className="flex gap-0">
              {expertiseStars(expertise).map((star, index) => (
                <React.Fragment key={`start-${index}`}>{star}</React.Fragment>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
export default ExpTag;
