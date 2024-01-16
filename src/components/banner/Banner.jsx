"use client";
import React from "react";
import Title from "../common/title/Title";
import Container from "../common/container/Container";
import Button from "../common/button/Button";
import "./banner.css";

const Banner = () => {
  return (
    <div className='banner-area'>
      <Title title='Follow Me' social height='300px' />
      <Container>
        <div className='banner'>
          <div className='banner-text text-white'>
            <p>Hello! I am</p>
            <h1>Ali Akbor</h1>
            <h3>Full Stack Developer</h3>
            <ul>
              <li>Web Developer</li>
              <li>Programmer</li>
              <li>Software Engineer</li>
            </ul>
            <div className='action flex'>
              <Button
                link='#'
                target='__blank'
                bgColor='#00cf5d'
                title='Get Resume'
              />
              <Button clickEvent link='#about' ml='15px' title='About Me' />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Banner;
