import Image from "next/image";
import Link from "next/link";
import React from "react";
import { projectsData } from "@/lib/constants";
import { FaEye, FaGithub } from "react-icons/fa";

type ProjectProps = (typeof projectsData)[number];

const Project = ({
  type,
  title,
  description,
  tags,
  gitUrl,
  previewUrl,
  imageUrl,
}: ProjectProps) => {
  return (
    <div className="group mb-3 w-full last:mb-0 sm:mb-8">
      <div
        className={`
        border-black/5 
        hover:b relative flex
        overflow-hidden rounded-lg border
        bg-background-200
        transition
        md:h-[20rem] md:group-even:pl-8
      `}
      >
        <div
          className={`
          relative
          flex h-full flex-col px-5 pb-7 pt-4
          sm:max-w-[50%] sm:pl-4 sm:pt-6
          sm:group-even:ml-[18rem]
          `}
        >
          <div
            className={`
            overlay absolute left-0 top-0
            hidden h-full w-full items-center
            justify-center bg-[#181818] bg-opacity-0 transition-all
            duration-500 group-hover:flex 
            group-hover:bg-opacity-80
            `}
          >
            {gitUrl && (
              <Link
                target="_blank"
                href={gitUrl}
                className="hover:border-white group/link relative mr-2 h-14 w-14 rounded-full border-2 border-[#ADB7BE]"
              >
                <FaGithub className="group-hover/link:text-white absolute left-1/2 top-1/2 h-10 w-10 -translate-x-1/2 -translate-y-1/2 transform  cursor-pointer text-[#ADB7BE]" />
              </Link>
            )}
            {previewUrl && (
              <Link
                target="_blank"
                href={previewUrl}
                className="hover:border-white group/link relative h-14 w-14 rounded-full border-2 border-[#ADB7BE]"
              >
                <FaEye className="group-hover/link:text-white absolute left-1/2 top-1/2 h-10 w-10 -translate-x-1/2 -translate-y-1/2 transform  cursor-pointer text-[#ADB7BE]" />
              </Link>
            )}
          </div>
          <h3 className="text-2xl font-semibold">{title}</h3>
          <p className={`break-word mt-2 leading-relaxed text-text-700`}>
            {description}
          </p>
          <ul className="mt-4 flex flex-wrap gap-2 sm:mt-auto">
            {tags.map((tag, index) => (
              <li
                className="rounded-full bg-primary-base px-3 py-1 text-[0.7rem] uppercase tracking-wider text-text-50"
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div
            className={`
            overlay absolute left-1/2 top-0
            hidden h-full w-full items-center
            justify-center bg-[#181818] bg-opacity-0 transition-all
            duration-500 group-hover:flex 
            group-hover:bg-opacity-80
            `}
          />
          <Image
            src={imageUrl}
            alt={title}
            quality={95}
            width={500}
            height={500}
            className="absolute left-1/2 top-8 hidden w-[28.25rem] rounded-t-lg shadow-2xl transition
      group-even:-left-40 
      group-even:right-[initial]
      group-hover:-translate-x-3
      group-hover:translate-y-3
      group-hover:-rotate-2

      group-hover:scale-[1.04]
      group-even:group-hover:translate-x-3
      group-even:group-hover:translate-y-3

      group-even:group-hover:rotate-2 sm:block"
          />
        </div>
      </div>
    </div>
  );
};

export default Project;
