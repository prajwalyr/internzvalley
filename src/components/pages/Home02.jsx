import React from "react";
import {
  Banner,
  Counter,
  Process,
  CourseGridPopular,
  Features,
  About,
} from "../layouts/home02/index";
import HeaderTwo from "../../common/header/HeaderTwo";
import FooterTwo from "../../common/footer/FooterTwo";
import AboutComp from "../layouts/about/About01";
import Cta from "../layouts/home01/Cta";
import FooterOne from "../../common/footer/FooterOne";
import Review from "../layouts/home01/Review";
import CourseCat01 from "../layouts/home01/CourseCat";

const HomeTwo = () => {
  return (
    <div className="home-page-2">
      <HeaderTwo />
      <Banner />
      <Counter />
      {/* <Features /> */}
      <About />
      <CourseCat01 />

      <CourseGridPopular />
      {/* <Cta /> */}
      <AboutComp />
      {/* <Process /> */}
      <Review />

      <Cta />
      <FooterOne />
    </div>
  );
};

export default HomeTwo;
