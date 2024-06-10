"use client";

import { Carousel, Layout } from "antd";
import CarouselComp from "../CarouselComp/CarouselComp";
import OfferCard from "../OfferCard/OfferCard";

const HomePage = () => {
  return (
    <Layout>
      <CarouselComp />
      <OfferCard />
    </Layout>
  );
};
export default HomePage;
