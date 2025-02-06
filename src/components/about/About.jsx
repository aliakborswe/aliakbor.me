"use client";
import React from "react";
import Image from "next/image";
import profile from "../../assets/img/aliakbor.png";
import "./about.css";
import Container from "../common/container/Container";
import Title from "../common/title/Title";
import Button from "../common/button/Button";
import Link from "next/link";

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
            <div className='about-action'>
              <Link
                className='btn-download bg-[#15FC08] text-black text-xl font-bold justify-center items-center flex px-4 rounded-md'
                target='_blank'
                rel='noopener noreferrer'
                href='https://wa.me/+8801730255696'
              >
                Contact Me
              </Link>
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
                width={100}
                height={100}
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default About;
