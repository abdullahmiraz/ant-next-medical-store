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
  overflow: hidden;
  margin: 1rem;
`;

const ImageContainer = styled.div`
  height: 50%;
  overflow: hidden;
`;

const ItemDetails = styled.div`
  padding: 12px;
`;

const CustomButton = styled(Button)`
  width: 100%;
  border-radius: 0 0 5px 5px;
`;

const ItemCard = ({ item }) => (
  <CustomCard>
    <ImageContainer>
      <Image src={item.image} alt={item.name} width={300} height={200} />
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
