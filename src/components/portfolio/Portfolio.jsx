"use client";
import React, { useState } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import Image from "next/image";
import { portfolios } from "@/data";
import "./portfolio.css";
import PortfolioAction from "./PortfolioAction";
import Container from "../common/container/Container";
import Title from "../common/title/Title";
import done from "@/assets/svg/done.svg";
import uparrow from "@/assets/svg/uparrow.svg";
import downarrow from "@/assets/svg/downarrow.svg";
import Link from "next/link";

const Portfolio = () => {
  const [isToggled, setIsToggled] = useState({});

  const portfoliosName = Object.keys(portfolios);
  const [selectedPortfolio, setSelectedPortfolio] = useState(portfoliosName[0]);
  const selectedFeaturedPortfolios = portfolios[selectedPortfolio].filter(
    (portfolio) => portfolio.type === "featured"
  );
  const selectedPortfolios = portfolios[selectedPortfolio].filter(
    (portfolio) => portfolio.type === "regular"
  );

  const handleToggle = (id) => {
    setIsToggled((prevState) => ({ ...prevState, [id]: !prevState[id] }));
  };

  return (
    <div id='portfolio' className='portfolio-area'>
      <Container>
        {/* title */}
        <Title side='left' title='Projects' height='160px' />

        {/* portfolio nave items */}
        <div className='portfolios'>
          {/* portfolio nave items */}
          <ul className='portfolio-nav'>
            {portfoliosName.map((name) => (
              <li
                onClick={() => setSelectedPortfolio(name)}
                className={name === selectedPortfolio ? "active" : ""}
                key={name}
              >
                {name}
              </li>
            ))}
          </ul>
          {/* portfolio card */}
          <div className='portfolio-container'>
            {selectedFeaturedPortfolios.map((portfolio) => (
              <div key={portfolio.id} className='portfolio'>
                {/* portfolio image */}
                <div className='portfolio-img'>
                  <Image
                    alt={portfolio.name}
                    src={portfolio.image}
                    className='image'
                    objectFit='contain'
                    priority
                  />
                </div>
                {/*portfolio details */}
                <h4 className='prt-name'>{portfolio.name}</h4>
                <div className='details'>
                  <h4
                    onClick={() => handleToggle(portfolio.id)}
                    className={`${
                      isToggled[portfolio.id] ? "btn-default" : "btn-green"
                    }`}
                  >
                    Project Details{" "}
                    {isToggled[portfolio.id] ? (
                      <Image
                        src={downarrow}
                        alt='done'
                        width={25}
                        height={25}
                      />
                    ) : (
                      <Image src={uparrow} alt='done' width={25} height={25} />
                    )}
                  </h4>

                  {/* Description */}
                  {isToggled[portfolio.id] && (
                    <div className='description-container'>
                      <span className='description-title'>Description:</span>
                      <span>{portfolio.description}</span>

                      {/* key features */}
                      <ul className='portfolio-features'>
                        <p className='description-title'>Features:</p>
                        {portfolio.tools.map((tool) => (
                          <li key={tool}>
                            <Image
                              src={done}
                              alt='done'
                              width={15}
                              height={15}
                            />
                            {tool}
                          </li>
                        ))}
                      </ul>

                      {/* portfolio-tools */}
                      <ul className='portfolio-tools'>
                        <span className='description-title'>Technologies:</span>
                        {portfolio.tools.map((tool) => (
                          <span className='tools' key={tool}>
                            {tool}
                          </span>
                        ))}
                      </ul>

                      {/* Portfolio Link */}
                      <ul className='portfolio-link'>
                        {portfolio.liveLink && (
                          <Link
                            target='_blank'
                            rel='noopener noreferrer'
                            href={portfolio.liveLink}
                            style={{ textDecoration: "none" }}
                          >
                            <li>Live Site</li>
                          </Link>
                        )}
                        {portfolio.serverLink && (
                          <Link
                            target='_blank'
                            rel='noopener noreferrer'
                            href={portfolio.serverLink}
                            style={{ textDecoration: "none" }}
                          >
                            <li>Server Side</li>
                          </Link>
                        )}
                        {portfolio.clientLink && (
                          <Link
                            target='_blank'
                            rel='noopener noreferrer'
                            href={portfolio.clientLink}
                            style={{ textDecoration: "none" }}
                          >
                            <li>Client</li>
                          </Link>
                        )}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* portfolio card without image */}
          <div className='portfolio-container withoutImg'>
            {selectedPortfolios.map((portfolio) => (
              <div key={portfolio.id} className='portfolio'>
                <h4 className='prt-name'>{portfolio.name}</h4>
                <div className='details'>
                  <h4
                    onClick={() => handleToggle(portfolio.id)}
                    className={`${
                      isToggled[portfolio.id] ? "btn-default" : "btn-green"
                    }`}
                  >
                    Project Details{" "}
                    {isToggled[portfolio.id] ? (
                      <Image
                        src={downarrow}
                        alt='done'
                        width={25}
                        height={25}
                      />
                    ) : (
                      <Image src={uparrow} alt='done' width={25} height={25} />
                    )}
                  </h4>

                  {/* Description */}
                  {isToggled[portfolio.id] && (
                    <div className='description-container'>
                      <span className='description-title'>Description:</span>
                      <span>{portfolio.description}</span>

                      {/* key features */}
                      <ul className='portfolio-features'>
                        <p className='description-title'>Features:</p>
                        {portfolio.tools.map((tool) => (
                          <li key={tool}>
                            <Image
                              src={done}
                              alt='done'
                              width={15}
                              height={15}
                            />
                            {tool}
                          </li>
                        ))}
                      </ul>

                      {/* portfolio-tools */}
                      <ul className='portfolio-tools'>
                        <span className='description-title'>Technologies:</span>
                        {portfolio.tools.map((tool) => (
                          <span className='tools' key={tool}>
                            {tool}
                          </span>
                        ))}
                      </ul>

                      {/* Portfolio Link */}
                      <ul className='portfolio-link'>
                        {portfolio.liveLink && (
                          <Link
                            target='_blank'
                            rel='noopener noreferrer'
                            href={portfolio.liveLink}
                            style={{ textDecoration: "none" }}
                          >
                            <li>Live Site</li>
                          </Link>
                        )}
                        {portfolio.serverLink && (
                          <Link
                            target='_blank'
                            rel='noopener noreferrer'
                            href={portfolio.serverLink}
                            style={{ textDecoration: "none" }}
                          >
                            <li>Server Side</li>
                          </Link>
                        )}
                        {portfolio.clientLink && (
                          <Link
                            target='_blank'
                            rel='noopener noreferrer'
                            href={portfolio.clientLink}
                            style={{ textDecoration: "none" }}
                          >
                            <li>Client</li>
                          </Link>
                        )}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
          <PortfolioAction />
        </div>
      </Container>
    </div>
  );
};

export default Portfolio;
