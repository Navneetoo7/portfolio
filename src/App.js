import { ThemeProvider } from "styled-components";
import { useState } from "react";
import { darkTheme, lightTheme } from "./utils/Themes.js";
import Navbar from "./components/Navbar";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import HeroSection from "./components/HeroSection";
import Skills from "./components/Skills";
// import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Experience from "./components/Experience";
import Education from "./components/Education";
// import ProjectDetails from "./components/ProjectDetails";
import styled from "styled-components";

const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  overflow-x: hidden;
  transition: background-color 0.25s ease;
`;

const Wrapper = styled.div`
  position: relative;
  background: linear-gradient(
      38.73deg,
      rgba(204, 0, 187, 0.12) 0%,
      rgba(201, 32, 184, 0) 50%
    ),
    linear-gradient(
      141.27deg,
      rgba(0, 70, 209, 0) 50%,
      rgba(0, 70, 209, 0.12) 100%
    );
  width: 100%;
  overflow: hidden;
  padding-bottom: 24px;

  &::before {
    content: "";
    position: absolute;
    inset: -20% auto auto -10%;
    width: 280px;
    height: 280px;
    border-radius: 50%;
    background: rgba(133, 76, 230, 0.1);
    filter: blur(50px);
    animation: softDrift 22s ease-in-out infinite;
    pointer-events: none;
  }

  &::after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 56px;
    background: linear-gradient(
      to bottom,
      transparent 0%,
      ${({ theme }) => theme.bg} 100%
    );
    pointer-events: none;
    z-index: 0;
  }

  @keyframes softDrift {
    0% {
      transform: translate(0, 0);
    }
    50% {
      transform: translate(60px, 40px);
    }
    100% {
      transform: translate(0, 0);
    }
  }
`;

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Router>
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <Body>
          <HeroSection />
          <Wrapper>
            <Skills />
            <Experience />
          </Wrapper>
          {/* <Projects openModal={openModal} setOpenModal={setOpenModal} /> */}
          <Wrapper>
            <Education />
            {/* <Contact /> */}
          </Wrapper>
          <Footer />
          {/* {openModal.state &&
            <ProjectDetails openModal={openModal} setOpenModal={setOpenModal} />
          } */}
        </Body>
      </Router>
    </ThemeProvider>
  );
}

export default App;
