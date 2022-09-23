import React from "react";
import Company from "./company/Company";
import FlexBoard from "./flexBoard/FlexBoard";
import Projects from "./projects/Projects";
import Social from "./social/Social";
import Sucess from "./sucess/Sucess";

const MainHome = () => {
  return (
    <div>
      <FlexBoard />
      <Company />
      <Sucess />
      <Projects />
      <Social />
    </div>
  );
};

export default MainHome;
