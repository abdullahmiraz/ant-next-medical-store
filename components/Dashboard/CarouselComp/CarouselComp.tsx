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
          src={"https://via.placeholder.com/300x200?text=Carousel Medicine"}
          alt="1"
          height={400}
          width={800}
          objectFit="cover"
        />
      </div>
    </div>
    <div>
      <div style={contentStyle}>
        <Image
          src={"https://via.placeholder.com/300x200?text=Carousel Medicine"}
          alt="1"
          height={400}
          width={800}
          objectFit="cover"
        />
      </div>
    </div>
  </Carousel>
);

export default CarouselComp;
