import React from "react";
import Info from "../components/AboutPage/Info";
import Hero from "../components/Hero";
import kitabat from "../images/kit.jpg";
export default function AboutPage() {
  return (
    <>
      <Hero img={kitabat} />
      <Info />
    </>
  );
}
