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
            <h3>MERN Stack Developer</h3>
            {/* <h3>Software Engineer</h3> */}
            <ul>
              <li>Programmer</li>
              {/* <li>Backend Developer</li> */}
              <li>Web Developer</li>
              <li>Frontend Developer</li>
            </ul>
            <div>
              <Button
                download='Ali-Akbor-Resume.pdf'
                link='/file/MyResume.pdf'
                target='__blank'
                bgColor='#15FC08'
                color='#111A28'
                title='Get Resume'
              />
              <Button
                clickEvent
                link='#about'
                ml='15px'
                borderColor='#15FC08'
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
