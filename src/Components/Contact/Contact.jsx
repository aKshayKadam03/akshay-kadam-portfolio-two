import React from "react";
import styled from "styled-components";
import phone from "../Icons/phone.svg";
import gmail from "../Icons/gmail.svg";
import github from "../Icons/github.svg";
import linkedin from "../Icons/linkedin.svg";
import medium from "../Icons/medium.svg";

import { MainHeadingWrapper, SubHeadingWrapper } from "../Elements/Elements";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "emailjs-com";

const ContactWrapper = styled.div`
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.fontColor};
  padding: 150px 0;
  > div:nth-child(1) {
    padding-bottom: 80px;
  }
`;

const ContactMain = styled.div`
  display: flex;
  flex-wrap: wrap;

  > div {
    width: 45%;
    margin: 0 auto;
  }

  @media (max-width: 1000px) {
    > div {
      width: 100%;
      min-width: 0px;
    }
  }
`;

const Form = styled.div`
  form {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 80%;
    margin: 0px auto;
    > div {
      margin-bottom: 20px;
      width: 100%;
      input {
        width: 100%;
        font-size: 19px;
        padding: 10px;
        border-radius: 5px;
        outline: none;
        border: 3px solid white;
        transition: all 500ms ease;
      }
      input:focus {
        border-bottom: 3px solid ${(props) => props.theme.secondary};
      }
    }
    text-align: left;
  }
  @media (max-width: 768px) {
    /* form {
      width: 100%;
    } */
  }
`;

const FindMeElseWhere = styled.div`
  > div {
    display: flex;
    width: 85%;
    align-items: center;

    margin: 0 auto;
    font-size: 18px;
    > div {
      margin: 1.5% 3%;
    }
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  p {
    word-break: break-all;
  }
  i {
    font-size: 25px;
    // color: ${(props) => props.theme.fontColor};
    color: ${(props) => props.theme.secondary};
  }
`;

const SendButton = styled.button`
  padding: 10px 25px;
  width: 200px;
  border: none;
  border-radius: 5px;
  font-size: 18px;
  text-transform: uppercase;
  letter-spacing: 0.2ch;
  border: 2px solid ${(props) => props.theme.secondary};
  color: ${(props) => (props.currentTheme === "light" ? "black" : "white")};

  font-weight: 500;
  background-color: ${(props) => props.theme.secondary};
  :hover {
    background-color: ${(props) => props.theme.body};
    color: white;
  }

  @media (max-width: 768px) {
    padding: 5px 15px;
    width: 150px;
    font-size: 14px;
  }
`;

const intitialData = {
  name: "",
  email: "",
  message: "",
};

function Contact({ currentTheme }) {
  const [data, setData] = React.useState(intitialData);
  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const success = () => toast.dark("Successfully Sent");
  const failure = () => toast.error("Something went wrong");

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        e.target,
        process.env.REACT_APP_USER_ID
      )
      .then(
        (result) => {
          success();
        },
        (error) => {
          failure();
        }
      );

    setData(intitialData);
  };

  const { name, email, message } = data;

  return (
    <ContactWrapper id="contact">
      <MainHeadingWrapper>
        <h1>Get In Touch</h1>
        <div></div>
      </MainHeadingWrapper>
      <ToastContainer />
      <ContactMain>
        <Form>
          <form onSubmit={onSubmitHandler}>
            <div>
              <input
                required
                value={name}
                name="name"
                onChange={onChangeHandler}
                placeholder="Name"
              />
            </div>
            <div>
              <input
                value={email}
                type="email"
                name="email"
                onChange={onChangeHandler}
                placeholder="Email"
              />
            </div>
            <div>
              <input
                required
                value={message}
                name="message"
                onChange={onChangeHandler}
                placeholder="Message"
              />
            </div>
            <div>
              <SendButton currentTheme={currentTheme}>Send </SendButton>
            </div>
          </form>
        </Form>
        <FindMeElseWhere>
          <div title="Click here to call">
            <div>
              <a href="tel:+917975960302">
                {/* <i className="fas fa-phone-square-alt"></i> */}
                <i className="fas fa-phone-alt"></i>
              </a>
            </div>
            <div>
              <a href="tel:+917975960302">
                <p>+91 7975960302</p>
              </a>
            </div>
          </div>
          <div title="Click here to mail">
            <div>
              <a href="mailto:akshaykadam7991@gmail.com">
                {/* <i className="fas fa-envelope-square"></i> */}
                <i className="fas fa-envelope"></i>
              </a>
            </div>
            <div>
              <a href="mailto:akshaykadam7991@gmail.com">
                <p>akshaykadam7991@gmail.com</p>
              </a>
            </div>
          </div>
          <div title="Click here go to github profile">
            <div>
              <a href="https://github.com/therealdrtroll">
                {/* <i className="fab fa-github-square"></i> */}
                <i className="fab fa-github"></i>
              </a>
            </div>
            <div>
              <a href="https://github.com/therealdrtroll">
                <p>github.com/therealdrtroll</p>
              </a>
            </div>
          </div>
          <div title="Click here go to linkedin profile">
            <div>
              <a href="https://www.linkedin.com/in/akshaykadam7991/">
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
            <div>
              <a href="https://www.linkedin.com/in/akshaykadam7991/">
                <p>linkedin.com/in/akshaykadam7991</p>
              </a>
            </div>
          </div>
          <div title="Click here go to medium profile">
            <div>
              <a href="https://ar1pperk.medium.com/">
                {/* <i className="fab fa-medium"></i> */}
                <i className="fab fa-medium-m"></i>
              </a>
            </div>
            <div>
              <a href="https://ar1pperk.medium.com/">
                <p>ar1pperk.medium.com</p>
              </a>
            </div>
          </div>
        </FindMeElseWhere>
      </ContactMain>
    </ContactWrapper>
  );
}

export default Contact;

// import phone from "../Icons/phone.svg";
// import gmail from "../Icons/gmail.svg";
// import github from "../Icons/github.svg";
// import linkedin from "../Icons/linkedin.svg";
// import medium from "../Icons/medium.svg";
