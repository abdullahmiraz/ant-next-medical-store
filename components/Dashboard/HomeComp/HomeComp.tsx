"use client";

import { Carousel, Layout } from "antd";
import OfferCard from "../OfferCard/OfferCard";
import ItemCard from "../ItemCard/ItemCard";
import ItemCarousel from "../ItemCarousel/ItemCarousel";
import CarouselComp from "../CarouselComp/CarouselComp";

const HomeComp = () => {
  return (
    <Layout>
      <CarouselComp />
      <OfferCard />
      <ItemCarousel />
    </Layout>
  );
};
export default HomeComp;
