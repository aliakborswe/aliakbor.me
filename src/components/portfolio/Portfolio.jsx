"use client";
import React, { useState } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import Image from "next/image";
import { portfolios } from "@/data";

import "./portfolio.css";
import PortfolioAction from "./PortfolioAction";
import Container from "../common/container/Container";
import Title from "../common/title/Title";

const Portfolio = () => {
  const portfoliosName = Object.keys(portfolios);
  const [selectedPortfolio, setSelectedPortfolio] = useState(portfoliosName[0]);
  const selectedFeaturedPortfolios = portfolios[selectedPortfolio].filter(
    (portfolio) => portfolio.type === "featured"
  );
  const selectedPortfolios = portfolios[selectedPortfolio].filter(
    (portfolio) => portfolio.type === "regular"
  );
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
          <div className='portfolio-items'>
            {selectedFeaturedPortfolios.map((portfolio, index) => (
              <div key={index} className='portfolio'>
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
                <h4 className="prt-name">{portfolio.name}</h4>
                <div className='details'>
                  <p>{portfolio.description}</p>
                  <div className='links'>
                    <ul>
                      {portfolio.source && (
                        <li>
                          <a
                            target='_blank'
                            rel='noopener noreferrer'
                            href={portfolio.source}
                          >
                            <FaGithub />
                          </a>
                        </li>
                      )}
                      {portfolio.demo && (
                        <li>
                          <a
                            target='_blank'
                            rel='noopener noreferrer'
                            href={portfolio.demo}
                          >
                            <FaExternalLinkAlt />
                          </a>
                        </li>
                      )}
                    </ul>
                  </div>
                  <ul className='portfolio-tools'>
                    {portfolio.tools.map((tool) => (
                      <li key={tool}>{tool}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* portfolio card without image */}
          {/* <div className='portfolio-items withoutImg'>
            {selectedPortfolios.map((portfolio, index) => (
              <div key={index} className='portfolio'>
                <div className='details'>
                  <h4>
                    <a
                      target='_blank'
                      rel='noopener noreferrer'
                      href={portfolio.demo}
                    >
                      {portfolio.name}
                    </a>
                  </h4>
                  <p>{portfolio.description}</p>
                  <div className='links'>
                    <ul>
                      {portfolio.source && (
                        <li>
                          <a
                            target='_blank'
                            rel='noopener noreferrer'
                            href={portfolio.source}
                          >
                            <FaGithub />
                          </a>
                        </li>
                      )}
                      {portfolio.demo && (
                        <li>
                          <a
                            target='_blank'
                            rel='noopener noreferrer'
                            href={portfolio.demo}
                          >
                            <FaExternalLinkAlt />
                          </a>
                        </li>
                      )}
                    </ul>
                  </div>
                  <ul className='portfolio-tools'>
                    {portfolio.tools.map((tool) => (
                      <li key={tool}>{tool}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div> */}
          <PortfolioAction />
        </div>
      </Container>
    </div>
  );
};

export default Portfolio;
