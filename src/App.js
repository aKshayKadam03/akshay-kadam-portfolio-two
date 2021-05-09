import React from "react";

import "./App.css";
import { ThemeProvider } from "styled-components";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import ToTop from "./Components/Elements/ToTop";
import Footer from "./Components/Footer/Footer";
import Head from "./Components/Head/Head";
import Slide from "./Components/Slide/Slide";
import lightHome from "./Components/Images/sceneOne.svg";
import darkHome from "./Components/Images/sceneOneDark.svg";

// body: "#0a192f",
// #a7bbc7

const LightTheme = {
  body: "#001220",
  fontColor: "#fff",
  secondary: "#fec107",
  iconFilter: "saturate(5%)  invert(0%)",
  profileBg: "#f8f5f1",
  header: lightHome,
};
//#151515
const DarkTheme = {
  body: "#000",
  fontColor: "#fff",
  secondary: "#C50E6A",
  iconFilter: "saturate(5%)  invert(100%)",
  profileBg: "#151515",
  header: darkHome,
};

const themes = {
  light: LightTheme,
  dark: DarkTheme,
};

function App() {
  const [currentTheme, setCurrentTheme] = React.useState("light");
  const themeToggler = () => {
    currentTheme === "light"
      ? setCurrentTheme("dark")
      : setCurrentTheme("light");
  };

  return (
    <ThemeProvider theme={themes[currentTheme]}>
      <div className="App">
        <ToTop></ToTop>
        <Head currentTheme={currentTheme} themeToggler={themeToggler}></Head>
        <About></About>
        <Slide currentTheme={currentTheme}></Slide>
        <Contact currentTheme={currentTheme}></Contact>
        <Footer></Footer>
      </div>
    </ThemeProvider>
  );
}

export default App;
