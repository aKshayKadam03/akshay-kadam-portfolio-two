import React from "react";
import styled from "styled-components";
import { MainHeadingWrapper, SubHeadingWrapper } from "../../Elements/Elements";

//icons import
import html from "../../Icons/html.svg";
import css from "../../Icons/css.svg";
import javascript from "../../Icons/javascript.svg";
import react from "../../Icons/react.svg";
import material from "../../Icons/material.svg";
import redux from "../../Icons/redux.svg";
import node from "../../Icons/node.svg";
import express from "../../Icons/express.svg";
import mongodb from "../../Icons/mongodb.svg";
import redis from "../../Icons/redis.svg";
import git from "../../Icons/git.svg";
import heroku from "../../Icons/heroku.svg";

const frontEndIcons = [
  { icon: html, caption: "HTML" },
  { icon: css, caption: "CSS" },
  { icon: javascript, caption: "JavaScript" },
  { icon: react, caption: "React" },
  { icon: material, caption: "MaterialUI" },
  { icon: redux, caption: "Redux" },
  { icon: node, caption: "Node" },
  { icon: express, caption: "Express", invert: true },
  { icon: mongodb, caption: "MongoDB" },
  { icon: redis, caption: "Redis" },
  { icon: git, caption: "Git" },
  { icon: heroku, caption: "Heroku" },
];

const SkillWrapper = styled.div`
  padding: 50px 0;
`;

const SlideSectionOne = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 80%;
  margin: 0 auto;
  > div {
    padding: 20px;
    margin: 10px;
  }

  @media (max-width: 768px) {
    width: 100%;
    > div {
      padding: 5px;
    }
  }
`;

const IconHolder = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  align-items: center;
  justify-content: center;

  > div {
    padding: 5px;
    text-align: center;
  }
`;

const Icons = styled.figure`
  width: 100px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    height: 50px;
    width: 50px;
    margin: 10px 0;
    background-color: #fffafa;
    padding: 10px;
    border-radius: 5px;
  }

  @media (max-width: 768px) {
    width: 50px;
  }
`;

function Skillset() {
  return (
    <SkillWrapper>
      <MainHeadingWrapper>
        <h1>Skills & Interests</h1>
        <div></div>
      </MainHeadingWrapper>
      <SlideSectionOne>
        <IconHolder>
          {frontEndIcons?.map((item) => (
            <div key={item.caption}>
              <Icons invert={item.invert}>
                <img src={item.icon} alt={item.caption}></img>
                <figcaption>{item.caption}</figcaption>
              </Icons>
            </div>
          ))}
        </IconHolder>
      </SlideSectionOne>
    </SkillWrapper>
  );
}

export default Skillset;
