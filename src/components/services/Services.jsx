import React from "react";
import Container from "../common/container/Container";
import Title from "../common/title/Title";
import Image from "next/image";
import "./services.css"

const Services = () => {
  return (
    <div id='services'>
      <Container>
        <Title side='right' title='Services' height='160px' />
        <div className='services-container'>
          <div className='service'>
            <Image src='' alt='' />
            <h4>Responsive Web Design</h4>
            <p>
              Responsive Web Design ensures your website looks and functions
              flawlessly across all devices. I create web pages that
              automatically adjust to any screen size and orientation,
              delivering an optimal viewing experience on both desktops and
              mobile phones.
            </p>
          </div>
          <div className='service'>
            <Image src='' alt='' />
            <h4>Frontend Development</h4>
            <p>
              As a MERN stack developer, I offer specialized frontend
              development services, creating responsive and interactive user
              interfaces with a strong focus on performance and user experience.
            </p>
          </div>
          <div className='service'>
            <Image src='' alt='' />
            <h4>Backend Development</h4>
            <p>
              I'm a backend developer with expertise in Node.js, Express, and
              MongoDB, focusing on building robust, scalable, and secure
              server-side applications to power your web projects.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Services;
