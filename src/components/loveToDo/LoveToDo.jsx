import React from "react";
import Image from "next/image";

import blogging from "@/assets/images/blogging.png";
import travelling from "@/assets/images/travelling.png";
import reading from "@/assets/images/reading.png";
import photography from "@/assets/images/photography.png";
import './loveTodo.css'
import Container from "../common/container/Container";
import Title from "../common/title/Title";

const LoveToDo = () => {
  return (
    <>
      <Container>
        <Title side='right' title='Love To Do' height='160px' />
        <div className='love-todo'>
          <div className='love-todo-card'>
            <Image alt='' src={travelling} />
            <h4>Travelling</h4>
          </div>
          <div className='love-todo-card'>
            <Image alt='' src={reading} />
            <h4>Reading</h4>
          </div>
          <div className='love-todo-card'>
            <Image alt='' src={photography} />
            <h4>Photography</h4>
          </div>
          <div className='love-todo-card'>
            <Image alt='' src={blogging} />
            <h4>Blogging</h4>
          </div>
        </div>
      </Container>
    </>
  );
};

export default LoveToDo;
