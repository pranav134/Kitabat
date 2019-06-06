import React from "react";
import Hero from "../components/Hero";
import kitabat from "../images/kit.jpg";
import Contact from "../components/ContactPage/Contact";
export default function ContactPage() {
  return (
    <>
      <Hero img={kitabat} />
      <Contact />
    </>
  );
}
