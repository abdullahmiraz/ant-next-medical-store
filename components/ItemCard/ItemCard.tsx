import React from "react";
import { Button, Typography } from "antd";
import styled from "styled-components";
import Image from "next/image";

const { Title, Text } = Typography;

// Styled components for custom styling
const CustomCard = styled.div`
  width: 300px;
  border: 1px solid #e8e8e8;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: max-content; /* Set a fixed height for consistency */
`;

const ImageContainer = styled.div`
  height: 40%; /* Set a fixed height for the image */
  overflow: hidden;
`;

const ItemDetails = styled.div`
  padding: 12px;
  flex-grow: 1; /* Allow the item details to grow to fill space */
`;

const CustomButton = styled(Button)`
  width: 100%;
  border-radius: 0 0 5px 5px;
`;

const ItemCard = ({ item }) => (
  <CustomCard>
    <ImageContainer>
      <Image src={item.image} alt={item.name} width={300} height={200} />{" "}
      {/* Ensure height matches the container */}
    </ImageContainer>
    <ItemDetails>
      <Title level={5}>{item.name}</Title>
      <Text strong>Category:</Text> <Text>{item.category}</Text> <br />
      <Text strong>Type:</Text> <Text>{item.type}</Text> <br />
      <Text strong>Price:</Text> <Text>{item.price}</Text>
    </ItemDetails>
    <CustomButton>Add to Bag</CustomButton>
  </CustomCard>
);

export default ItemCard;
