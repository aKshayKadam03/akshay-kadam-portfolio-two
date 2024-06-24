import React from "react";
import styled from "styled-components";
import { ParagraphWrapper, SubHeadingWrapper } from "../Elements/Elements";

const FooterWrapper = styled.div`
  border-top: 1px solid #9e9d9d;
  min-height: 7vh;
  display: grid;
  place-items: center;
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.fontColor};
  span {
    margin: 0 20px;
  }
  button {
    margin: 0 20px;
    font-size: 16px;
    font-weight: 600;
    border-radius: 5px;
    padding: 7px 15px;
    background-color: ${(props) => props.theme.body};
    border: 1px solid ${(props) => props.theme.fontColor};
    color: ${(props) => props.theme.fontColor};

    :hover {
      background-color: ${(props) => props.theme.fontColor};
      color: ${(props) => props.theme.body};
    }
  }
`;

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <FooterWrapper id="contact">
      <ParagraphWrapper>
        <p>
          <span>© {currentYear}</span>|
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/therealdrtroll/akshay-kadam-portfolio-two"
          >
            <button>Source Code</button>
          </a>
        </p>
      </ParagraphWrapper>
    </FooterWrapper>
  );
}

export default Footer;
