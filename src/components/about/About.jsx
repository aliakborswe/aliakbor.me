"use client";
import React from "react";
import Image from "next/image";
import profile from "../../assets/img/me.jpg";
import "./about.css";
import Container from "../common/container/Container";
import Title from "../common/title/Title";
import Button from "../common/button/Button";

const About = () => {
  return (
    <Container>
      <div id='about' className='about-area'>
        <Title side='right' title='About Me' height='160px' />
        <div className='about'>
          <div className='about-details'>
            <p>
              Hello! I am Ali Akbor, a passionate software engineer. I develop
              web applications. My core skill is based on JavaScript and I love
              to do most of the things using JavaScript. I love to make the web
              more open to the world. I am available for any kind of job
              opportunity that suits my interests.
            </p>
            <div className='about-action '>
              <Button
                link='https://github.com/mdaliakbor/aliakbor.me/tree/master/src/data/file/MyResume.pdf'
                target='_blank'
                bgColor='#029FDC'
                title='Get Resume'
              />
              <Button
                clickEvent
                link='#skill'
                ml='15px'
                title='My Skills'
                borderColor='#029FDC'
              />
            </div>
          </div>
          <div className='about-image'>
            <div>
              <Image alt='profile' src={profile} width={350} height={350} />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default About;
