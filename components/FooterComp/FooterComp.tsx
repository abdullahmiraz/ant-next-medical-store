import React from "react";
import { Footer } from "antd/es/layout/layout";

const FooterComp = () => {
  return (
    <Footer
      style={{
        textAlign: "center",
        background: "transparent",
      }}
    >
      ATI Limited ©{new Date().getFullYear()}
    </Footer>
  );
};

export default FooterComp;
