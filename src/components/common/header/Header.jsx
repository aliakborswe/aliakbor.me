"use client";
import React, {  useState } from "react";
import "./header.css";
import Container from "../container/Container";
import Link from "next/link";
import { FaBars } from "react-icons/fa";
import Image from "next/image";
import logo1 from "@/assets/svg/logo.svg";
import Button from "../button/Button";

const Header = () => {
  const [mobileNav, setMobileNav] = useState(false);

  // const headerScroll = useRef();
  // if (typeof window !== `undefined`) {
  //   let prevScrollPosition = window.scrollY;
  //   window.addEventListener("scroll", () => {
  //     const curScrollPosition = window.scrollY;
  //     const difference = prevScrollPosition - curScrollPosition;
  //     const { current } = headerScroll;
  //     setMobileNav(false);
  //     if (curScrollPosition > 50) {
  //       current.classList.add("compaq");
  //     } else {
  //       current.classList.remove("compaq");
  //     }
  //     if (difference < 0) {
  //       current.classList.add("hide");
  //     } else {
  //       current.classList.remove("hide");
  //     }
  //     prevScrollPosition = curScrollPosition;
  //   });
  // }

  const handleScroll = (e) => {
    // e.preventDefault();
    // const hash = e.target.hash;
    // const el = document.querySelector(hash);
    // const offsetTop = el.offsetTop;
    setMobileNav(false);
    if (typeof window !== `undefined`) {
      window.scrollTo({
        top: offsetTop,
        left: 0,
        behavior: "smooth",
      });
    }
  };
  return (
    <header className='compaq'>
      <Container padding='25px 15px'>
        <div className='header'>
          <div className='logo'>
            <Link href='/'>
              <Image src={logo1} width={45} alt='Picture of the author' />
            </Link>
          </div>
          <div onClick={() => setMobileNav(!mobileNav)} className='mobile-nav'>
            <FaBars />
          </div>
          <ul className={`menubar ${mobileNav ? "mobilenav-activate" : ""}`}>
            <li>
              <Link onClick={handleScroll} href='#about'>
                About
              </Link>
            </li>
            <li>
              <Link onClick={handleScroll} href='#skill'>
                Skill
              </Link>
            </li>
            <li>
              <Link onClick={handleScroll} href='#portfolio'>
                Projects
              </Link>
            </li>
            <li>
              <Link onClick={handleScroll} href='#services'>
                Services
              </Link>
            </li>
            <li>
              <Link onClick={handleScroll} href='#contact'>
                Contact
              </Link>
            </li>
            <li className='w-36'>
              <Button
                download='Ali-Akbor-Resume.pdf'
                link='/file/MyResume.pdf'
                target='__blank'
                bgColor='#15FC08'
                color='#111A28'
                title='Get Resume'
              />
            </li>
          </ul>
        </div>
      </Container>
    </header>
  );
};

export default Header;
