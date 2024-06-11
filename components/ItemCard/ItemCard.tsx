import React from "react";
import { Button, Carousel, Card } from "antd";
import Image from "next/image";
import { styled } from "styled-components";

const { Meta } = Card;

const contentStyle: React.CSSProperties = {
  display: "flex",
  backgroundColor: "red",
};

const cardStyle: React.CSSProperties = {
  width: 300,
  // height: 400,
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

const StyledCard = styled(Card)`
  .ant-card-body {
    padding: 0;
  }
`;
const ItemCard: React.FC = () => (
  <Carousel arrows infinite autoplay>
    <div style={contentStyle}>
      <div style={cardStyle}>
        <StyledCard>
          <div style={imageStyle}>
            <Image
              alt="example"
              src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div>
            <h1>Medicine Name _ Power</h1>
            <p>Main Type</p>
            <h2>Price</h2>
          </div>
          <Button className="my-2 w-full" type="primary">
            Add to Bag
          </Button>
        </StyledCard>
      </div>
      <div style={cardStyle}>
        <StyledCard>
          <div style={imageStyle}>
            <Image
              alt="example"
              src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div>
            <h1>Medicine Name _ Power</h1>
            <p>Main Type</p>
            <h2>Price</h2>
          </div>
          <Button className="my-2 w-full" type="primary">
            Add to Bag
          </Button>
        </StyledCard>
      </div>
      <div style={cardStyle}>
        <StyledCard>
          <div style={imageStyle}>
            <Image
              alt="example"
              src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div>
            <h1>Medicine Name _ Power</h1>
            <p>Main Type</p>
            <h2>Price</h2>
          </div>
          <Button className="my-2 w-full" type="primary">
            Add to Bag
          </Button>
        </StyledCard>
      </div>
      <div style={cardStyle}>
        <StyledCard>
          <div style={imageStyle}>
            <Image
              alt="example"
              src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div>
            <h1>Medicine Name _ Power</h1>
            <p>Main Type</p>
            <h2>Price</h2>
          </div>
          <Button className="my-2 w-full" type="primary">
            Add to Bag
          </Button>
        </StyledCard>
      </div>
      <div style={cardStyle}>
        <StyledCard>
          <div style={imageStyle}>
            <Image
              alt="example"
              src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div>
            <h1>Medicine Name _ Power</h1>
            <p>Main Type</p>
            <h2>Price</h2>
          </div>
          <Button className="my-2 w-full" type="primary">
            Add to Bag
          </Button>
        </StyledCard>
      </div>
    </div>
  </Carousel>
);

export default ItemCard;
