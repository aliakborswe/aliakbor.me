"use client";
import React from "react";

import "./footer.css";
import Container from "../container/Container";
import { languages } from "@/data/languages";

const Footer = () => {
  return (
    <footer className='footer-area'>
      <Container>
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
            <p>By Me </p>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
