import React from "react";
import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import "./title.css";

const Title = ({ title, social, side, height }) => {
  return (
    <div
      style={{ height }}
      className={`title ${side} ${social ? "social" : ""} `}
    >
      {social && (
        <ul>
          <li>
            <Link
              target='_blank'
              rel='noopener noreferrer'
              href='https://github.com/aliakborswe'
            >
              <FaGithub />
            </Link>
          </li>

          <li>
            <Link
              target='_blank'
              rel='noopener noreferrer'
              href='https://www.linkedin.com/in/aliakborswe'
            >
              <FaLinkedinIn />
            </Link>
          </li>

          <li>
            <Link
              target='_blank'
              rel='noopener noreferrer'
              href='https://twitter.com/aliakborswe'
            >
              <FaTwitter />
            </Link>
          </li>
        </ul>
      )}
      <p>{title}</p>
    </div>
  );
};
export default Title;
