import React from "react";
import Hero from "../components/Home/Hero/Hero";
import Specials from "../components/Home/Specials/Specials";

import "./Home.css";
export default function Home() {
  return (
    <div className='home-wrapper'>
      <Hero />
      <Specials />
    </div>
  );
}
