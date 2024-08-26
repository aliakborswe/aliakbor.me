import React from "react";
import Image from "next/image";

import blogging from "@/assets/svg/blogging.svg";
import traveling from "@/assets/svg/traveling.svg";
import reading from "@/assets/svg/readingbooks.svg";
import programming from "@/assets/svg/programming.svg";
import "./loveTodo.css";
import Container from "../common/container/Container";
import Title from "../common/title/Title";

const LoveToDo = () => {
  return (
    <>
      <Container>
        <Title side='right' title='Love To Do' height='160px' />
        <div className='love-todo'>
          <div className='love-todo-card'>
            <Image alt='' width={80} height={80} src={traveling} />
            <h4>Traveling</h4>
          </div>
          <div className='love-todo-card'>
            <Image alt='' width={80} height={80} src={reading} />
            <h4>Reading</h4>
          </div>
          <div className='love-todo-card'>
            <Image alt='' width={80} height={80} src={programming} />
            <h4>Programming</h4>
          </div>
          <div className='love-todo-card'>
            <Image alt='' width={80} height={80} src={blogging} />
            <h4>Blogging</h4>
          </div>
        </div>
      </Container>
    </>
  );
};

export default LoveToDo;
