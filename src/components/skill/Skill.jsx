"use client";
import React, { useState } from "react";

import { skills } from "@/data";
import "./skill.css";
import Container from "../common/container/Container";
import Title from "../common/title/Title";

const Skill = () => {
  const skillsName = Object.keys(skills);
  const [selectedSkill, setSelectedSkill] = useState(skillsName[0]);
  const selectedSkills = skills[selectedSkill];
  return (
    <div id='skill' className='skill-area'>
      <Container>
        <Title title='My Skills' side='right' height='160px' />
        <div className='skills'>
          <ul className='skill-nav'>
            {skillsName.map((name) => (
              <li
                onClick={() => setSelectedSkill(name)}
                className={name === selectedSkill ? "active" : ""}
                key={name}
              >
                {name}
              </li>
            ))}
          </ul>
          <div className='skill'>
            {selectedSkills.map(({ name, percent }) => (
              <div key={name} className='card'>
                <h4>{name}</h4>
                <div style={{ width: percent + "%" }} className='progress-ar' />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Skill;
