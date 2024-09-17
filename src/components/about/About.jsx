"use client";
import React from "react";
import Image from "next/image";
import profile from "../../assets/img/aliakbor.png";
import "./about.css";
import Container from "../common/container/Container";
import Title from "../common/title/Title";
import Button from "../common/button/Button";

const About = () => {
  return (
    <div id='about' className='about-area'>
      <Container>
        <Title side='right' title='About Me' height='160px' />
        <div className='about'>
          <div className='about-details'>
            <p>
              Hello! I am Ali Akbor, a passionate MERN Stack developer. I
              develop web applications. My core skill is based on JavaScript and
              I love to do most of the things using JavaScript. I love to make
              the web more open to the world. I am available for any kind of job
              opportunity that suits my interests.
            </p>
            <div className='about-action '>
              <Button
                link='https://github.com/mdaliakbor/aliakbor.me/tree/master/src/data/file/MyResume.pdf'
                target='_blank'
                bgColor='#15FC08'
                color='#111A28'
                title='Get Resume'
              />
              <Button
                clickEvent
                link='#skill'
                ml='15px'
                title='My Skills'
                borderColor='#15FC08'
                color='#E5DCE9'
              />
            </div>
          </div>
          <div className='about-image'>
            <div className='img_container'>
              <Image
                className='image'
                alt='profile image'
                src={profile}
                quality={100}
                width={400}
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default About;
