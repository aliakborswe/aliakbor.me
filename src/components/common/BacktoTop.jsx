"use client";
import { FaAngleUp } from "react-icons/fa";

const BacktoTop = () => {
  const handleScroll = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <div>
      <div
        onClick={handleScroll}
        className='bg-[#64CF5F] text-black flex justify-center items-center text-3xl rounded-full h-10 w-10 fixed right-5 bottom-5 cursor-pointer shadow-lg'
      >
        <FaAngleUp />
      </div>
    </div>
  );
};

export default BacktoTop;
