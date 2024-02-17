import React from "react";
import Image from "next/image";

import blogging from "@/assets/images/blogging.png";
import travelling from "@/assets/images/travelling.png";
import reading from "@/assets/images/reading.png";
import photography from "@/assets/images/photography.png";

import Container from "../common/container/Container";
import Title from "../common/title/Title";

const LoveToDo = () => {
  return (
    <div>
      <Container>
        <Title side='right' title='Love To Do' />
        <div className='ml-[22%] md:ml-0 grid gap-10 grid-cols-2 md:grid-cols-4 '>
          <div>
            <Image alt='' src={travelling} />
            <h4>Travelling</h4>
          </div>
          <div>
            <Image alt='' src={reading} />
            <h4>Reading</h4>
          </div>
          <div>
            <Image alt='' src={photography} />
            <h4>Photography</h4>
          </div>
          <div>
            <Image alt='' src={blogging} />
            <h4>Blogging</h4>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default LoveToDo;
