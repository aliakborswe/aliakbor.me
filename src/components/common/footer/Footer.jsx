"use client";
import React from "react";
import { FaAngleUp } from "react-icons/fa";
import "./footer.css";
import Container from "../container/Container";
import { languages } from "@/data/languages";

const Footer = () => {
  const handleScroll = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <footer className='footer-area'>
      <Container >
        <div className='footer'>
          <div className='language'>
            <ul>
              {languages.map(({ id, text, progress }) => (
                <li key={id}>
                  <p>{text}</p>
                  <div style={{ width: progress + "%" }} className='progress' />
                </li>
              ))}
            </ul>
          </div>
          <div className='copyright'>
            <p>
              By Me{" "}
              <span onClick={handleScroll}>
                <FaAngleUp />
              </span>
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
