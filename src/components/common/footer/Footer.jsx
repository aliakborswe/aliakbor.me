"use client";
import React from "react";
import Link from "next/link";
import { FaAngleUp, FaStar, FaCodeBranch } from "react-icons/fa";
import "./footer.css";
import Container from "../container/Container";
import { languages } from "@/data/languages";

const Footer = () => {
  const handleScroll = (e) => {
    e.preventDefault();
    window.scroll({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <footer className='footer-area'>
      <Container padding='50px 25px'>
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
            <ul className='github'>
              <li>
                <Link
                  target='_blank'
                  rel='noopener noreferrer'
                  href='https://github.com/mdaliakbor'
                >
                  <p>
                    <FaStar /> Star
                  </p>
                </Link>
              </li>
              <li>
                <Link
                  target='_blank'
                  rel='noopener noreferrer'
                  href='https://github.com/mdaliakbor'
                >
                  <p>
                    <FaCodeBranch /> Fork
                  </p>
                </Link>
              </li>
            </ul>
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
