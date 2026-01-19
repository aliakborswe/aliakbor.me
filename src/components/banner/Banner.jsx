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
          <div>
            <p>Hello! I am</p>
            <h1>Ali Akbor</h1>
            <h3>Software Engineer</h3>
            <ul>
              <li>Full Stack Developer</li>
              <li>Frontend Developer</li>
              <li>Backend Developer</li>
            </ul>
            <div>
              <Button
                download='Ali-Akbor-Resume.pdf'
                link='/file/aliakbor-resume.pdf'
                target='__blank'
                bgColor='#64CF5F'
                color='#111A28'
                title='Get Resume'
              />
              <Button
                clickEvent
                link='#about'
                ml='15px'
                borderColor='#64CF5F'
                color='#E5DCE9'
                hover='background:red'
                title='About Me'
              />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Banner;
