import React from "react";
import "./container.css";
const Container = ({ padding, children }) => {
  return <div style={{ padding }}>{children}</div>;
};

export default Container;
