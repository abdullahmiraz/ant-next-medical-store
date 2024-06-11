"use client";

import { Carousel, Layout } from "antd";
import CarouselComp from "../CarouselComp/CarouselComp";
import OfferCard from "../OfferCard/OfferCard";
import ItemCard from "../ItemCard/ItemCard";

const HomePage = () => {
  return (
    <Layout>
      <CarouselComp />
      <OfferCard />
      <ItemCard />
    </Layout>
  );
};
export default HomePage;
