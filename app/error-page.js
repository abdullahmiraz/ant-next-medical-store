// pages/error-page.js

import React from "react";
import Error from "next/error";

const CustomErrorPage = ({ statusCode }) => {
  return <Error statusCode={statusCode} />;
};

CustomErrorPage.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default CustomErrorPage;
