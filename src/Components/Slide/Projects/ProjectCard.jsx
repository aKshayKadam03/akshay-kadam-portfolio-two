import React from "react";
import styled from "styled-components";

const ProjectCardWrapper = styled.div`
  position: relative;
  width: 35%;
  min-width: 300px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 20px;
  border-radius: 5px;

  /* box-shadow: -1px 1px 10px #9e9b9b; */

  @media (max-width: 1000px) {
    width: 90%;
  }
`;

const ProjectImage = styled.figure`
  border-radius: 5px;
  img {
    width: 100%;
    border-radius: 5px;
    border: 1px solid #e4e1e1;
  }
  figcaption {
    text-align: left;
    height: 80px;
    > div:nth-child(1) {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin: 10px 0;
    }
  }
  h2 {
    font-size: 21px;
    font-weight: 500;
    margin: 10px 0;
    ::after {
      content: "";
      width: 100%;
      height: 2px;
      background-color: red;
    }
  }
  h4 {
    font-weight: 400;
    font-size: 16px;
  }
`;

const ReadMoreButton = styled.button`
  color: ${(props) => props.theme.fontColor};
  background-color: ${(props) => props.theme.body};
  border: 1px solid ${(props) => props.theme.fontColor};
  padding: 10px 15px;
  border-radius: 5px;
  font-size: 16px;
  font-weight: 500;
  transition: all 500ms ease;
  :hover {
    border: 1px solid ${(props) => props.theme.body};
    background-color: ${(props) => props.theme.fontColor};
    color: ${(props) => props.theme.body};
  }
`;

function ProjectCard({
  img,
  title,
  description,
  responsibilities,
  type,
  techStack,
  blogLink,
  repoLink,
  demoLink,
  setCurrentProject,
  setPanel,
  features,
}) {
  const onClickHandler = () => {
    setPanel(true);
    setCurrentProject({
      img,
      title,
      description,
      responsibilities,
      type,
      techStack,
      blogLink,
      repoLink,
      demoLink,
      setCurrentProject,
      setPanel,
      features,
    });
  };

  return (
    <ProjectCardWrapper>
      <ProjectImage>
        <img src={img} alt={title}></img>
        <figcaption>
          <div>
            <div>
              <h2>{title}</h2>
            </div>
            <div onClick={onClickHandler}>
              <ReadMoreButton>Read More</ReadMoreButton>
            </div>
          </div>
          <div>
            <h4>{description}</h4>
          </div>
        </figcaption>
      </ProjectImage>
    </ProjectCardWrapper>
  );
}

export default ProjectCard;
