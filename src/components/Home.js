import React from "react";
import Partner from "./Partner";
import Section2 from "./Section2";
import Trusted from "./Trusted";
import Banner from "./Banner";
import Features from "./Features";
import Feature_card from "./Feature_card";
function Home() {
  return (
    <div>
      <Banner />
      <Feature_card />
      <Features />
      <Section2 />
      <Trusted />
      <Partner />
    </div>
  );
}

export default Home;
