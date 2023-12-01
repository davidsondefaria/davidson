import React, { useState } from "react";
import { motion } from "framer-motion";
import useMeasure from "react-use-measure";
import { FaStar as FaRegStar } from "react-icons/fa";
import { cn } from "@/lib/utils";

export type ExpTagType = "hard" | "soft";

interface IExpTag {
  title: string;
  type?: ExpTagType;
  experienceTime?: number;
  expertise?: number;
  className?: string;
}

const ExpTag = ({
  title,
  type,
  experienceTime,
  expertise,
  className,
}: IExpTag) => {
  const [isHovered, setIsHovered] = useState(false);
  const [ref, measures] = useMeasure();
  console.log(measures);
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
          `text-2xl text-text-50 bg-primary-base rounded-2xl w-fit
        my-[4px] mx-[4px] py-[10px] px-[10px] 
        hover:ml-0 hover:mr-[8px] hover:mt-0 hover:mb-[8px] hover:rounded-br-none
        hover:shadow-rbaccent hover:transition ease-in-out
        `,
          className
        )}
      >
        <h1 ref={ref}>{title}</h1>
        <motion.div
          transition={{ duration: 0.1, ease: "linear" }}
          animate={
            isHovered
              ? {
                  opacity: 1,
                  right: 0,
                  top: measures.height,
                  marginTop: 9,
                  height: "auto",
                  width: "auto",
                }
              : {
                  opacity: 0,
                  width: 0,
                  height: 0,
                  right: 0,
                  top: measures.height,
                }
          }
          className={cn(
            `absolute overflow-hidden z-50
              text-2xl text-text-50 bg-primary-base rounded-2xl w-fit
              ml-0 mr-[8px] mt-0 mb-[8px] pt-[10px] pb-[10px] px-[10px] 
              shadow-rbaccent rounded-tr-none
            `,
            className
          )}
        >
          <div className="text-base flex flex-col w-full -gap-4 items-center">
            {type === "hard" && <span>{experienceTime} years</span>}
            <div className="flex gap-0">
              <FaRegStar />
              <FaRegStar />
              <FaRegStar />
              <FaRegStar />
              <FaRegStar />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
export default ExpTag;
