import React from "react";
import { Carousel } from "antd";
import Image from "next/image";

const contentStyle: React.CSSProperties = {
  height: "60vh",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

const CarouselComp: React.FC = () => (
  <Carousel arrows autoplay className="my-6">
    <div>
      <div style={contentStyle}>
        <Image
          src={
            "https://www.lazzpharma.com/Content/ImageData/Banner/Orginal/6155262a-31d1-4546-8d86-352a0036762f/banner.webp"
          }
          alt="1"
          layout="fill"
        />
      </div>
    </div>
    <div>
      <div style={contentStyle}>
        <Image
          src={
            "https://www.lazzpharma.com/Content/ImageData/Banner/Orginal/6155262a-31d1-4546-8d86-352a0036762f/banner.webp"
          }
          alt="1"
          layout="fill"
          objectFit="contain"
        />
      </div>
    </div>
  </Carousel>
);

export default CarouselComp;
