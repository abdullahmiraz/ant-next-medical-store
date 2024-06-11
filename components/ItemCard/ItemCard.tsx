import React from "react";
import { Button, Carousel, Card } from "antd";
import Image from "next/image";

const { Meta } = Card;

const contentStyle: React.CSSProperties = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexWrap: "wrap",
  gap: "16px",
  padding: "16px",
};

const cardStyle: React.CSSProperties = {
  width: 300,
  height: 400,
  margin: "2rem",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
};

const imageStyle: React.CSSProperties = {
  position: "relative",
  width: "100%",
  height: "200px",
  overflow: "hidden",
};

const ItemCard: React.FC = () => (
  <Carousel arrows infinite autoplay>
    <div style={contentStyle}>
      <Card style={cardStyle}>
        <div style={imageStyle}>
          <Image
            alt="example"
            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <Button type="primary" style={{ marginTop: "16px" }}>
          Add to Bag
        </Button>
      </Card>
      <Card style={cardStyle}>
        <div style={imageStyle}>
          <Image
            alt="example"
            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <Button type="primary" style={{ marginTop: "16px" }}>
          Add to Bag
        </Button>
      </Card>
      <Card style={cardStyle}>
        <div style={imageStyle}>
          <Image
            alt="example"
            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <Button type="primary" style={{ marginTop: "16px" }}>
          Add to Bag
        </Button>
      </Card>
      <Card style={cardStyle}>
        <div style={imageStyle}>
          <Image
            alt="example"
            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <Button type="primary" style={{ marginTop: "16px" }}>
          Add to Bag
        </Button>
      </Card>
      <Card style={cardStyle}>
        <div style={imageStyle}>
          <Image
            alt="example"
            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <Button type="primary" style={{ marginTop: "16px" }}>
          Add to Bag
        </Button>
      </Card>
    </div>
  </Carousel>
);

export default ItemCard;
