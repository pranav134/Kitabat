import React from "react";
import Hero from "../components/Hero";
import kitabat from "../images/kit.jpg";
import CartSection from "../components/CartPage";

export default function CartPage() {
  return (
    <>
      <Hero img={kitabat} />
      <CartSection />
    </>
  );
}
