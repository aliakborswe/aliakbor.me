"use client";
import React from "react";
import Link from "next/link";
import "./button.css";

const Button = ({
  title,
  link,
  target,
  clickEvent,
  onMouseOver,
  onMouseOut,
  color,
  bgColor,
  borderColor,
  mt,
  mb,
  ml,
  mr,
}) => {
  const handleClick = (e) => {
    e.preventDefault();
    const hash = e.target.hash;
    const el = document.querySelector(hash);
    const offsetTop = el.offsetTop;
    window.scrollTo({
      top: offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <Link
        style={{
          marginTop: mt,
          marginBottom: mb,
          marginLeft: ml,
          marginRight: mr,
          color,
          borderColor,
          backgroundColor: bgColor,
          fontWeight: "bold"
        }}
        target={target}
        onClick={clickEvent && handleClick}
        onMouseOver={onMouseOver}
        onMouseOut={onMouseOut}
        rel={target ? "noopener noreferrer" : ""}
        className='btn'
        download
        href={link}
      >
        {title}
      </Link>
    </>
  );
};

export default Button;
