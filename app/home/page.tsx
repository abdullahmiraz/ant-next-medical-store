import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import FooterComp from "../../components/FooterComp/FooterComp";
import HomeComp from "../../components/HomeComp/HomeComp";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <HomeComp />
      <FooterComp />
    </div>
  );
};

export default HomePage;
