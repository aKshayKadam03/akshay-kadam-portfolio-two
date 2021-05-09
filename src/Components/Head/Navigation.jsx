import React from "react";
import styled from "styled-components";
import Switch from "react-switch";
import day from "../Icons/day.svg";
import night from "../Icons/night.svg";
import { Translate } from "@material-ui/icons";

const NavBar = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 7vh;
  z-index: 1000;
  transition: all 300ms ease-out;
  /* background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.fontColor}; */
  background-color: inherit;
  color: inherit;
`;

const NavItem = styled.div`
  margin: 0 1%;
  display: flex;
  align-items: center;
  > a {
    text-decoration: none;
    font-size: 17px;
    color: inherit;
    text-transform: uppercase;
    font-family: ${(props) => props.theme.font};
    font-weight: 600;
  }
  img {
    width: 30px;
    margin-right: 10px;
  }
  @media (max-width: 350px) {
    img {
      display: none;
    }
  }

  @media (max-width: 750px) {
    margin: 9px;
    a {
      font-size: 14px;
    }
  }
`;

const Grow = styled.div`
  flex-grow: 1;
  @media (max-width: 600px) {
    display: none;
  }
`;

function Navigation({ themeToggler, currentTheme }) {
  const [activeLink, setActiveLink] = React.useState(3);
  const [toggle, setToggle] = React.useState(false);
  const activeLinkHandler = (linkNo) => {
    setActiveLink(linkNo);
  };

  const switchHandler = () => {
    setToggle((prev) => !prev);
    themeToggler();
  };

  return (
    <NavBar active={activeLink}>
      <Grow></Grow>
      <NavItem onClick={() => activeLinkHandler(3)}>
        <a href="#projects">Projects</a>
      </NavItem>
      <NavItem onClick={() => activeLinkHandler(5)}>
        <a href="#resume">Resume</a>
      </NavItem>
      <NavItem onClick={() => activeLinkHandler(6)}>
        <a href="#contact">Contact</a>
      </NavItem>
      <NavItem>
        <Switch
          onChange={switchHandler}
          handleDiameter={20}
          checked={toggle}
          onColor="#fff"
          offColor="#fff"
          offHandleColor="#0A192F"
          onHandleColor="#000000"
          checkedHandleIcon={
            <div style={{ position: "relative", overflow: "hidden" }}>
              <img
                style={{
                  objectFit: "contain",
                  width: "60%",
                  overflow: "hidden",
                  padding: "4px",
                }}
                src={night}
                alt="night"
              ></img>
            </div>
          }
          uncheckedHandleIcon={
            <div style={{ overflow: "hidden" }}>
              <img
                style={{
                  objectFit: "contain",
                  width: "60%",
                  overflow: "hidden",
                  padding: "4px",
                }}
                src={day}
                alt="day"
              ></img>
            </div>
          }
        />
      </NavItem>
      {/* <NavItem></NavItem> */}
    </NavBar>
  );
}

export default Navigation;
