import React from "react";
import { MainHeadingWrapper, SubHeadingWrapper } from "../../Elements/Elements";
import Lottie from "react-lottie";
import styled from "styled-components";
import database from "../../Animations/database.json";
import frontEnd from "../../Animations/building.json";
import backEnd from "../../Animations/backend.json";
import dataStructure from "../../Animations/dataStructure.json";

const ProficienciesWrapper = styled.div`
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.fontColor};
`;

const SlideStack = styled.div`
  min-height: 40vh;
  width: 100%;
  max-width: 1600px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  > div {
    width: 200px;
    height: 180px;
    margin: 50px;
    h4 {
      white-space: nowrap;
    }
  }
`;

const databaseOptions = {
  loop: true,
  autoplay: true,
  animationData: database,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};
const frontEndOptions = {
  loop: true,
  autoplay: true,
  animationData: frontEnd,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const backEndOptions = {
  loop: true,
  autoplay: true,
  animationData: backEnd,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const dataStructureOptions = {
  loop: true,
  autoplay: true,
  animationData: dataStructure,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

function Proficiencies() {
  return (
    <ProficienciesWrapper>
      <MainHeadingWrapper>
        <h1>Proficiencies</h1>
        <div></div>
      </MainHeadingWrapper>
      <SlideStack>
        <div>
          <Lottie options={frontEndOptions}></Lottie>
          <SubHeadingWrapper>
            <h4>Front End</h4>
          </SubHeadingWrapper>
        </div>
        <div>
          <Lottie options={dataStructureOptions}></Lottie>
          <SubHeadingWrapper>
            <h4>Data Structures</h4>
          </SubHeadingWrapper>
        </div>
        <div>
          <Lottie options={backEndOptions}></Lottie>
          <SubHeadingWrapper>
            <h4>Back End</h4>
          </SubHeadingWrapper>
        </div>
        <div>
          <Lottie options={databaseOptions}></Lottie>
          <SubHeadingWrapper>
            <h4>Database</h4>
          </SubHeadingWrapper>
        </div>
      </SlideStack>
    </ProficienciesWrapper>
  );
}

export default Proficiencies;
