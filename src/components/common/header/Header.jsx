"use client";
import React, { useRef, useState } from "react";
import "./header.css";
import Container from "../container/Container";
import Link from "next/link";
import { FaBars } from "react-icons/fa";
import Image from "next/image";
import logo1 from "@/assets/img/fancy.png";

const Header = () => {
  const [mobileNav, setMobileNav] = useState(false);

  const headerScroll = useRef();
  if (typeof window !== `undefined`) {
    let prevScrollPosition = window.scrollY;
    window.addEventListener("scroll", () => {
      const curScrollPosition = window.scrollY;
      const difference = prevScrollPosition - curScrollPosition;
      const { current } = headerScroll;
      setMobileNav(false);
      if (curScrollPosition > 100) {
        current.classList.add("compaq");
      } else {
        current.classList.remove("compaq");
      }
      if (difference < 0) {
        current.classList.add("hide");
      } else {
        current.classList.remove("hide");
      }
      prevScrollPosition = curScrollPosition;
    });
  }

  const handleScroll = (e) => {
    e.preventDefault();
    const hash = e.target.hash;
    const el = document.querySelector(hash);
    const offsetTop = el.offsetTop;
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
    <header ref={headerScroll} className='compaq'>
      <Container padding='25px 15px'>
        <div className='header'>
          <div className='logo'>
            <Image
              src={logo1}
              width={60}
              height={60}
              alt='Picture of the author'
            />
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
                Portfolio
              </Link>
            </li>
            <li>
              <Link onClick={handleScroll} href='#contact'>
                Contact
              </Link>
            </li>
            <li>
              <Link target='__blank' rel='noopener noreferrer' href='#'>
                Blog
              </Link>
            </li>
            <li>
              <Link
                className='btn-download'
                target='_blank'
                rel='noopener noreferrer'
                // href='https://wa.me/+8801730255696'
                href='#'
              >
                Resume
              </Link>
            </li>
          </ul>
        </div>
      </Container>
    </header>
  );
};

export default Header;
