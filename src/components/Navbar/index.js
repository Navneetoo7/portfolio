import React from "react";
import {
  Nav,
  NavLink,
  NavbarContainer,
  Span,
  NavLogo,
  NavItems,
  GitHubButton,
  ButtonContainer,
  MobileIcon,
  MobileMenu,
  MobileLink,
  ThemeButton,
} from "./NavbarStyledComponent";
import { DiCssdeck } from "react-icons/di";
import { FaBars, FaMoon, FaSun } from "react-icons/fa";
import { Bio } from "../../data/constants";
import { useTheme } from "styled-components";

const Navbar = ({ darkMode, setDarkMode }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const theme = useTheme();

  const toggleTheme = () => setDarkMode((prev) => !prev);

  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to="/">
          <a
            href="#about"
            style={{
              display: "flex",
              alignItems: "center",
              color: "inherit",
              cursor: "pointer",
              textDecoration: "none",
            }}
          >
            <DiCssdeck size="3rem" /> <Span>Navneet</Span>
          </a>
        </NavLogo>
        <MobileIcon>
          <ThemeButton
            type="button"
            onClick={toggleTheme}
            aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
            title={darkMode ? "Light mode" : "Dark mode"}
            style={{ marginRight: "12px" }}
          >
            {darkMode ? <FaSun size={16} /> : <FaMoon size={16} />}
          </ThemeButton>
          <FaBars
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          />
        </MobileIcon>
        <NavItems>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#skills">Skills</NavLink>
          <NavLink href="#experience">Experience</NavLink>
          {/* <NavLink href='#projects'>Projects</NavLink> */}
          <NavLink href="#education">Education</NavLink>
        </NavItems>
        <ButtonContainer>
          <ThemeButton
            type="button"
            onClick={toggleTheme}
            aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
            title={darkMode ? "Light mode" : "Dark mode"}
          >
            {darkMode ? <FaSun size={16} /> : <FaMoon size={16} />}
            {darkMode ? "Light" : "Dark"}
          </ThemeButton>
          <GitHubButton href={Bio.github} target="_blank" rel="noreferrer">
            Github Profile
          </GitHubButton>
        </ButtonContainer>
        {isOpen && (
          <MobileMenu isOpen={isOpen}>
            <MobileLink
              href="#about"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              About
            </MobileLink>
            <MobileLink
              href="#skills"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              Skills
            </MobileLink>
            <MobileLink
              href="#experience"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              Experience
            </MobileLink>
            {/* <MobileLink href='#projects' onClick={() => {
              setIsOpen(!isOpen)
            }}>Projects</MobileLink> */}
            <MobileLink
              href="#education"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              Education
            </MobileLink>
            <ThemeButton
              type="button"
              onClick={toggleTheme}
              aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
              style={{ width: "max-content" }}
            >
              {darkMode ? <FaSun size={16} /> : <FaMoon size={16} />}
              {darkMode ? "Light mode" : "Dark mode"}
            </ThemeButton>
            <GitHubButton
              style={{
                padding: "10px 16px",
                background: `${theme.primary}`,
                color: "white",
                width: "max-content",
              }}
              href={Bio.github}
              target="_blank"
              rel="noreferrer"
            >
              Github Profile
            </GitHubButton>
          </MobileMenu>
        )}
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
