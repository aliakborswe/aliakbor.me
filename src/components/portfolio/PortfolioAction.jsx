"use client";
import React, { useState } from "react";
import Button from "../common/button/Button";
import "./portfolio.css";

const PortfolioAction = () => {
  let showMoreTimeOut;
  let moreTimeOut;
  const [title, setTitle] = useState("More");
  const handleMouseOver = () => {
    clearTimeout(moreTimeOut);
    showMoreTimeOut = setTimeout(() => {
      setTitle("Show More");
    }, 1000);
  };
  const handleOnMouseOut = () => {
    clearTimeout(showMoreTimeOut);
    moreTimeOut = setTimeout(() => {
      setTitle("More");
    }, 2000);
  };
  const handleClick = (e) => {
    e.preventDefault();
    clearTimeout();
    setTitle("Showing More...");
    setTimeout(() => {}, 1000);
  };
  return (
    <div style={{ "textAlign": "center"}}>
      <Button
        target='__blank'
        link='https://github.com/mdaliakbor'
        onMouseOver={handleMouseOver}
        onMouseOut={handleOnMouseOut}
        onClick={handleClick}
        title={title}
        mt='15px'
        borderColor='#15FC08'
        color='#E5DCE9'
      />
    </div>
  );
};

export default PortfolioAction;
