"use client";
import React from "react";
import Title from "../common/title/Title";
import Container from "../common/container/Container";
import Button from "../common/button/Button";
import "./banner.css";

const Banner = () => {
  return (
    <Container>
      <div className='banner-area'>
      <Title title='Follow Me' social height='320px' side='left' />
        <div className='banner'>
          <div className='banner-text text-white'>
            <p>Hello! I am</p>
            <h1>Ali Akbor</h1>
            <h3>Full Stack Developer</h3>
            <ul>
              <li>Programmer</li>
              <li>Web Developer</li>
              <li>Software Engineer</li>
            </ul>
            <div className='flex gap-1 justify-center md:justify-start '>
              <Button
                link='https://github.com/mdaliakbor/aliakbor.me/tree/master/src/data/file/MyResume.pdf'
                target='__blank'
                bgColor='#029FDC'
                title='Get Resume'
              />
              <Button clickEvent link='#about' ml='15px' title='About Me' />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Banner;
