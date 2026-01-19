import React from "react";
import Container from "../common/container/Container";
import Title from "../common/title/Title";

const Education = () => {
  return (
    <div className="py-10 md:py-12 lg:py-14 xl:py-16">
      <Container>
        <Title title='Education' height='220px' side='left' />
        <div className='flex flex-col lg:flex-row justify-between items-center gap-8  md:ml-20 pb-10'>
          {/* bsc */}
          <div className='space-y-2 border-l-2 border-[#64CF5F] pl-4'>
            <h3 className='text-xl font-bold text-[#64CF5F]'>
              B. Sc in Computer Science & Engineering (CSE)
            </h3>
            <p className='text-base'>
              Institute of Science Trade And Technology, Dhaka, Bangladesh
            </p>
            <p className='text-base bg-black w-32 p-1 flex justify-center'>
              2022 - Present
            </p>
            <p className='text-base'>
              I am at Studying B.Sc in Computer Science and Engineering(CSE)
              from Institute of Science Trade and Technology. Dhaka, Bangladesh
            </p>
          </div>
          {/* hsc */}
          <div className='space-y-2 border-l-2 border-[#64CF5F] pl-4'>
            <h3 className='text-xl font-bold text-[#64CF5F]'>
              H. Sc in Science (Science)
            </h3>
            <p className='text-base'>
              Ghatail Cantonment Public School & College, Ghatail, Tangail
            </p>
            <p className='text-base bg-black w-32 p-1 flex justify-center'>
              2019 - 2021
            </p>
            <p className='text-base'>
              I have completed my Higher Secondary School Certificate (HSC) from
              Ghatail Cantonment Public School & College. Ghatail, Tangail
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Education;
