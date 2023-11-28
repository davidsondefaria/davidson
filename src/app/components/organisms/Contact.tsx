"use client";
import { useSectionInView } from "@/hooks";
import React from "react";

const Contact = () => {
  const { ref } = useSectionInView("Contact");
  return (
    <section
      id="contact"
      ref={ref}
      className="border h-[1024px] flex justify-center items-center"
    >
      Contact
    </section>
  );
};

export default Contact;
