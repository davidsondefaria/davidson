"use client";
import { useSectionInView } from "@/app/hooks";
import React from "react";

const Contact = () => {
  const { ref } = useSectionInView("Contact");
  return (
    <section
      id="Contact"
      ref={ref}
      className="border h-[1024px] flex justify-center items-center"
    >
      Contact
    </section>
  );
};

export default Contact;
