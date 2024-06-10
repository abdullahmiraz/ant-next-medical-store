import React from "react";
import { Card } from "antd";
import Image from "next/image";
import styled from "styled-components";

const StyledCard = styled(Card)`
  .ant-card-body {
    padding: 0; // Remove padding from the card body
  }
`;

const OfferCard: React.FC = () => {
  const rowStyle: React.CSSProperties = {
    display: "flex",
    justifyContent: "space-between",
    gap: "16px",
    flexWrap: "wrap",
  };

  const colStyle: React.CSSProperties = {
    flex: "1",
    minWidth: "250px", // Minimum width for each card column
    padding: "0",
  };

  return (
    <div style={rowStyle}>
      <div style={colStyle}>
        <StyledCard>
          <Image
            src="https://www.lazzpharma.com/Content/ImageData/Gallery/2fd05571-5f83-422b-935b-43c13649adf4/Category-Slider.webp"
            width={400}
            alt="img"
            objectFit="cover"
            height={200}
          />
        </StyledCard>
      </div>
      <div style={colStyle}>
        <StyledCard title="Card title" bordered={false}>
          Card content
        </StyledCard>
      </div>
      <div style={colStyle}>
        <StyledCard title="Card title" bordered={false}>
          Card content
        </StyledCard>
      </div>
    </div>
  );
};

export default OfferCard;
