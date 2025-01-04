import React from "react";

import "./contact.css";
import Container from "../common/container/Container";
import Title from "../common/title/Title";
import Button from "../common/button/Button";
import SentEmail from "../sentEmail/SentEmail";

const Contact = () => {
  return (
    <div id='contact' className='contact-area'>
      <Container>
        <Title side='left' title='Contact' height='160px' />
        <div className='flex flex-col sm:flex-row  justify-between gap-8 ml-10'>
          <div className='w-1/2'>
            <SentEmail />
          </div>
          <div className='w-1/2'>
            <div className='contact-details'>
              <p className='pb-10'>
                I am interested in working with any company that thinks my skill
                will be helpful for them. If you are looking for someone like
                me, please let me know.
              </p>
              <ul>
                <li>
                  <h5>Email</h5>
                  <p>
                    aliakborswe@gmail.com <span>(Recommended)</span>
                  </p>
                </li>
                <li>
                  <h5>Phone</h5>
                  <p>
                    +8801730255696 <span>(Always Available)</span>
                  </p>
                </li>
                <li>
                  <h5>Address</h5>
                  <p>Mirpur, Dhaka, Bangladesh</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Contact;
