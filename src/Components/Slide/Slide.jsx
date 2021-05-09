import React from "react";
import styled from "styled-components";
import Projects from "./Projects/Projects";
import TimeLine from "./TimeLine/TimeLine";
import Skillset from "./Skills/Skillset";

import { ParagraphWrapper } from "../Elements/Elements";

import envelope from "../Images/envelope.svg";
import envelopeBottom from "../Images/bottom.svg";

//resume images

import resumeFinal from "../Images/resumeFinal.png";

const SliderWrapper = styled.div`
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.fontColor};
`;

const SlideMain = styled.div`
  position: relative;
  width: 100%;
  margin: 0 auto;
  > div {
    min-width: 300px;
  }
`;

const SlideCanal = styled.div`
  padding: 50px 0;
  /* position: absolute; */
  display: flex;
  left: 50%;
  top: 0;
  transform: translate(-50%, 0);
  width: 40%;
  min-height: 180vh;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  width: 100%;
  margin: 0 auto;
`;

const Resume = styled.div`
  background-size: contain;
  background-repeat: no-repeat;
  position: sticky;
  top: 10%;
  width: 85%;
  max-width: 500px;
  z-index: 11;
  border-radius: 5px;
  padding-bottom: 50px;
  margin: 40px auto;
  img {
    width: 100%;
    border-radius: 5px;
    max-height: 650px;
  }
  @media (max-width: 1100px) {
    width: 90%;
    margin: 0 auto;
  }
`;

const Envelope = styled.div`
  width: 90%;
  position: relative;
  max-width: 530px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  position: relative;
  > div::nth-child(1) {
    z-index: 10;
  }
  > div:nth-child(2) {
    z-index: 12;
    img {
      margin-top: -8%;
      width: 100%;
      z-index: 20;
    }
  }
  @media (max-width: 1100px) {
    width: 95%;
  }
`;

const ResumeAction = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 20;
  min-width: 200px;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;
  margin: 0 auto;
  padding: 25px;
  color: black;
  background-color: #f8f8f8;
  border-radius: 5px;
`;

const ResumeButton = styled.button`
  font-size: 21px;
  padding: 15px 35px;
  border: none;
  border-radius: 5px;
  margin: 10px;
  /* background-color: ${(props) => props.theme.body}; */
  background-color: #0a090a;
  color: white;
  /* color: ${(props) => props.theme.fontColor}; */

  span {
    font-weight: 600;
    margin: 10px;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  }
  a {
    text-decoration: none;
    color: ${(props) => props.theme.fontColor};
  }

  @media (max-width: 500px) {
    font-size: 16px;
    padding: 5px 25px;
  }
`;

const SectionWrapper = styled.div`
  width: 100%;
  position: relative;
  margin: 0px auto;
`;

function Slide({ currentTheme }) {
  return (
    <SliderWrapper>
      {/* <Proficiencies></Proficiencies> */}
      <SlideMain>
        <SectionWrapper>
          <Skillset></Skillset>
        </SectionWrapper>
        <SectionWrapper>
          <TimeLine currentTheme={currentTheme}></TimeLine>
        </SectionWrapper>
        <SectionWrapper>
          <Projects></Projects>
        </SectionWrapper>

        <SlideCanal id="resume">
          <Resume>
            <img src={resumeFinal} alt="resume" />
          </Resume>
          <div>
            <Envelope>
              <div>
                <img src={envelopeBottom} alt="envelope" />
              </div>
              <div>
                <img src={envelope} alt="envelope" />
              </div>
              <ResumeAction>
                <ParagraphWrapper>
                  <p>Need a copy?</p>
                </ParagraphWrapper>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://drive.google.com/file/d/1qx3ziCypqLEZylAUJCwkJZphT_mNZrUX/view?usp=sharing"
                  download
                >
                  <ResumeButton>
                    <span> Download</span>
                  </ResumeButton>
                </a>
              </ResumeAction>
            </Envelope>
          </div>
        </SlideCanal>
      </SlideMain>
    </SliderWrapper>
  );
}

export default Slide;
