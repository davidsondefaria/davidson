"use client";
import { useSectionInView } from "@/hooks";
import React from "react";

const Contact = () => {
  const { ref } = useSectionInView("Contact");
  return (
    <section
      id="contact"
      ref={ref}
      className="flex h-[1024px] items-center justify-center border"
    >
      Contact
    </section>
  );
};

export default Contact;
