import React from "react";
import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import "./title.css";

const Title = ({ title, social, side, height }) => {
  return (
    <div
      style={{ height }}
      className={`title ${side} ${social ? "social" : ""}`}
    >
      {social && (
        <ul>
          <li>
            <Link
              target='_blank'
              rel='noopener noreferrer'
              href='https://github.com/mdaliakbor'
            >
              <FaGithub />
            </Link>
          </li>

          <li>
            <Link
              target='_blank'
              rel='noopener noreferrer'
              href='https://www.linkedin.com/in/ali-akbor'
            >
              <FaLinkedinIn />
            </Link>
          </li>

          <li>
            <Link
              target='_blank'
              rel='noopener noreferrer'
              href='https://twitter.com/aliakbor'
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
Title.defaultProps = {
  side: "left",
  height: "160px",
};
export default Title;
