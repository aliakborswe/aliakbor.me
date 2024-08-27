import React from "react";

import "./contact.css";
import Container from "../common/container/Container";
import Title from "../common/title/Title";
import Button from "../common/button/Button";

const Contact = () => {
  return (
    <div id='contact' className='contact-area'>
      <Container>
        <Title side='left' title='Contact' height='160px' />
        <div className='contact'>
          <div className='contact-status'>
            <p>
              I am interested in working with any company that thinks my skill
              will be helpful for them. If you are looking for someone like me,
              please let me know.
            </p>
            <div>
              <Button
                title='Contact Me'
                mt='25px'
                bgColor='#15FC08'
                color='#111A28'
                link='https://wa.me/+8801730255696'
              />
            </div>
          </div>
          <div className='contact-details'>
            <ul>
              <li>
                <h5>Email</h5>
                <p>
                  aliakbor.js@gmail.com <span>(Recommended)</span>
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
      </Container>
    </div>
  );
};

export default Contact;
