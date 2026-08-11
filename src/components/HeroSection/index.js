import React from "react";
import {
  HeroContainer,
  HeroLeftContainer,
  Img,
  HeroRightContainer,
  HeroInnerContainer,
  TextLoop,
  Title,
  Span,
  SubTitle,
  ResumeButton,
  HeroBg,
  AmbientGlow,
} from "./HeroStyle";
// import HeroImg from "../../images/HeroImage.jpg";
import ChangedOne from "../../images/profile_image.png";
import Typewriter from "typewriter-effect";
import { Bio } from "../../data/constants";
import HeroBgAnimation from "../HeroBgAnimation";

const HeroSection = () => {
  return (
    <div id="about">
      <HeroContainer>
        <AmbientGlow />
        <HeroBg>
          <HeroBgAnimation />
        </HeroBg>
        <HeroInnerContainer>
          <HeroLeftContainer id="Left">
            <Title>
              Hi, I am <br /> {Bio.name}
            </Title>
            <TextLoop>
              <span>I am a</span>
              <Span>
                <Typewriter
                  options={{
                    strings: Bio.roles,
                    autoStart: true,
                    loop: true,
                    delay: 60,
                    deleteSpeed: 30,
                  }}
                />
              </Span>
            </TextLoop>
            <SubTitle>{Bio.description}</SubTitle>
            <ResumeButton
              href={Bio.resume}
              target="display"
            >
              Check Resume
            </ResumeButton>
          </HeroLeftContainer>

          <HeroRightContainer id="Right">
            <Img
              src={ChangedOne}
              alt="hero-image"
            />
          </HeroRightContainer>
        </HeroInnerContainer>
      </HeroContainer>
    </div>
  );
};

export default HeroSection;
