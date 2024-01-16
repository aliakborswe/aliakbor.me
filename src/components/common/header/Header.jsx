"use client";
import React, { useState } from "react";
import "./header.css";
import Container from "../container/Container";
import Link from "next/link";
import { FaBars } from "react-icons/fa";

const Header = () => {
  const [mobileNav, setMobileNav] = useState(false);

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
    <header>
      <Container padding='25px 25px'>
        <div className='header'>
          <div className='logo'>
            <h1>
              <Link href='/'>Ali-Akbor</Link>
            </h1>
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
