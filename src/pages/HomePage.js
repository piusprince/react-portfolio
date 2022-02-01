import React from "react";
import Header from "../components/Header";

import Work from "../components/Work";
import Servicess from "../components/Servicess";
import Testimonial from "../components/Testimonial";

import { projects } from "../components/Work/projects";
import profile from "../images/profile1.webp";
import headerSVG from "../images/HeaderSVG.svg";
import Technologies from "../components/Technologies";

const HomePage = () => {
  return (
    <>
      <Header headerSVG={headerSVG} />
      <Work project={projects} />
      <Servicess />
      <Technologies />
      <Testimonial profile={profile} />
    </>
  );
};

export default HomePage;
