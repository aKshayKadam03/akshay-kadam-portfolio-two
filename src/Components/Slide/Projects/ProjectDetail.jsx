import React from "react";
import styled, { keyframes } from "styled-components";
import { v4 as uuid } from "uuid";

//svg icons
import html from "../../Icons/html.svg";
import css from "../../Icons/css.svg";
import javascript from "../../Icons/javascript.svg";
import react from "../../Icons/react.svg";
import mongodb from "../../Icons/mongodb.svg";
import node from "../../Icons/node.svg";
import express from "../../Icons/express.svg";
import material from "../../Icons/material.svg";
import next from "../../Icons/next.svg";

import {
  MainHeadingWrapper,
  ParagraphWrapper,
  SubHeadingWrapper,
} from "../../Elements/Elements";

const techStackIcons = {
  HTML: html,
  CSS: css,
  JavaScript: javascript,
  React: react,
  MongoDB: mongodb,
  Node: node,
  Express: express,
  MaterialUI: material,
  NextJs: next,
};

const entranceAnimation = keyframes`
 0% {
    -webkit-transform: scaleY(0);
            transform: scaleY(0);
    -webkit-transform-origin: 100% 0%;
            transform-origin: 100% 0%;
    opacity: 1;
  }
  100% {
    -webkit-transform: scaleY(1);
            transform: scaleY(1);
    -webkit-transform-origin: 100% 0%;
            transform-origin: 100% 0%;
    opacity: 1;
  }
`;

const ProjectDetailWrapper = styled.div`
  width: 93%;
  max-width: 1000px;
  border-radius: 10px;
  padding: 20px 80px;
  overflow: auto;
  border-radius: 5px;
  margin: 0 auto;
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.fontColor};
  animation: ${entranceAnimation} 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  h1 {
    padding: 0;
  }
  > div:nth-child(1) {
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 750px) {
      flex-direction: column-reverse;
      width: 100%;
    }
  }

  @media (max-width: 1024px) {
    width: 75%;
    padding: 30px;
  }

  @media (max-width: 750px) {
    width: 80%;
    padding: 30px;
  }
`;

const closeStretch = keyframes`{
    0% {
      -webkit-transform: scaleX(0);
              transform: scaleX(0);
      -webkit-transform-origin: 100% 100%;
              transform-origin: 100% 100%;
      opacity: 1;
    }
    100% {
      -webkit-transform: scaleX(1);
              transform: scaleX(1);
      -webkit-transform-origin: 100% 100%;
              transform-origin: 100% 100%;
      opacity: 1;
    }
  }`;

const CloseButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 26px;
  background-color: ${(props) => props.theme.fontColor};
  padding: 0 5px;
  border-radius: 25px;
  color: ${(props) => props.theme.body};
  font-weight: 600;

  > div {
    margin: 5px;
  }
  > div:nth-child(1) {
    animation: ${closeStretch} 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    font-size: 22px;
    display: none;
  }
  :hover {
    > div:nth-child(1) {
      display: inline;
    }
  }
`;

const ProjectSection = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  > div:nth-child(2) {
    width: 100%;
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    text-align: left;
    justify-content: space-between;

    > div {
      margin-bottom: 30px;
      display: flex;

      > div:nth-child(1) {
        > p {
          width: 180px;
        }
      }
      @media (max-width: 768px) {
        flex-direction: column;
      }
      h4 {
        margin: 15px;
      }
      p {
        margin: 5px;
      }
    }
  }
`;

const ProjectImage = styled.div`
  width: 100%;
  margin: 0 auto;
  align-items: center;
  box-shadow: 1px 1px 10px #4d464d;
  border-radius: 5px;
  > img {
    width: 100%;
    border-radius: 5px;
  }
`;

const ProjectIcon = styled.div`
  width: fit-content;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  padding: 0 5px;
  text-transform: capitalize;
  font-weight: 500;
  > div {
    margin: 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  > div > img {
    height: 30px;
    width: 30px;
    margin: 10px;
    background-color: #fffafa;
    padding: 10px;
    border-radius: 5px;
    /* filter: invert(0%); */
  }
`;

const ButtonHolders = styled.div`
  display: flex;
  justify-content: flex-end;

  @media (max-width: 400px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`;

const Button = styled.button`
  padding: 10px 15px;
  width: 120px;
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.fontColor};
  font-size: 18px;
  border-radius: 5px;
  border: 1px solid ${(props) => props.theme.fontColor};
  margin: 7px;
  outline: none;
  :hover {
    background-color: ${(props) => props.theme.fontColor};
    color: ${(props) => props.theme.body};
  }
  > i {
    margin: 0 5px;
  }
`;

function ProjectDetail({
  img,
  title,
  description,
  responsibilities,
  type,
  techStack,
  blogLink,
  repoLink,
  demoLink,
  setPanel,
  panel,
  features,
}) {
  const onCloseHandler = () => {
    setPanel(false);
  };

  return (
    <ProjectDetailWrapper id="solo" status={panel}>
      <div>
        <div>
          <MainHeadingWrapper>
            <h1>{title}</h1>
            <hr></hr>
          </MainHeadingWrapper>
        </div>
        <CloseButton onClick={onCloseHandler}>
          <div>
            <p>Close</p>
          </div>
          <div>
            <i className="far fa-times-circle"></i>
          </div>
        </CloseButton>
      </div>
      <ProjectSection>
        <div>
          <ProjectImage>
            <img src={img} alt={title} />
          </ProjectImage>
        </div>
        <div>
          <SubHeadingWrapper>
            <h4>{description}</h4>
          </SubHeadingWrapper>
          <div>
            <ParagraphWrapper>
              <p>Type :</p>
            </ParagraphWrapper>

            <ParagraphWrapper>
              <p>{type}</p>
            </ParagraphWrapper>
          </div>

          <div>
            <ParagraphWrapper>
              <p>Tech Stack :</p>
            </ParagraphWrapper>
            <ProjectIcon>
              {techStack?.map((item) => (
                <div>
                  <img src={techStackIcons[item]} alt={item} />
                  <span>{item}</span>
                </div>
              ))}
            </ProjectIcon>
          </div>
          {features !== undefined && (
            <div>
              <ParagraphWrapper color="yellow">
                <p>Features</p>
              </ParagraphWrapper>
              <div>
                {features?.map((item) => (
                  <ParagraphWrapper key={uuid()} color="white">
                    <p>• {item}</p>
                  </ParagraphWrapper>
                ))}
              </div>
            </div>
          )}
          {responsibilities !== undefined && (
            <div>
              <ParagraphWrapper color="yellow">
                <p>Responsibilities</p>
              </ParagraphWrapper>
              <div>
                {responsibilities?.map((item) => (
                  <ParagraphWrapper key={uuid()} color="white">
                    <p>• {item}</p>
                  </ParagraphWrapper>
                ))}
              </div>
            </div>
          )}

          <ButtonHolders>
            {repoLink !== "#" && (
              <a target="_blank" rel="noreferrer" href={repoLink}>
                <Button>
                  <i className="devicon-github-original"> Code</i>
                </Button>
              </a>
            )}

            {demoLink !== "#" && (
              <a target="_blank" rel="noreferrer" href={demoLink}>
                <Button>
                  <i className="far fa-eye"> Demo</i>
                </Button>
              </a>
            )}

            {blogLink !== "#" && (
              <a target="_blank" rel="noreferrer" href={blogLink}>
                <Button>
                  <i className="fab fa-medium"> Blog</i>
                </Button>
              </a>
            )}
          </ButtonHolders>
        </div>
      </ProjectSection>
    </ProjectDetailWrapper>
  );
}

export default ProjectDetail;
