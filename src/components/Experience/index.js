import React from "react";
import styled from "styled-components";
import ExperienceCard from "../Cards/ExperienceCard";
import { experiences } from "../../data/constants";
import ScrollReveal from "../ScrollReveal";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  padding: 24px 0 40px;
  @media (max-width: 960px) {
    padding: 12px 0 32px;
  }
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 900px;
  padding: 24px 20px 24px;
  gap: 12px;
  box-sizing: border-box;
  z-index: 1;

  @media (max-width: 768px) {
    padding: 16px 14px 20px;
  }
`;

const Header = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 8px;
  margin-bottom: 16px;
`;

const Title = styled.div`
  font-size: 42px;
  text-align: center;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  max-width: 600px;
  margin: 0 auto;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const List = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 24px;
  padding-left: 28px;
  padding-right: 4px;
  box-sizing: border-box;

  &::before {
    content: "";
    position: absolute;
    left: 7px;
    top: 12px;
    bottom: 12px;
    width: 2px;
    background: ${({ theme }) => theme.primary};
    opacity: 0.55;
  }

  @media (max-width: 768px) {
    padding-left: 20px;
    padding-right: 0;
    gap: 18px;
  }
`;

const Item = styled.div`
  position: relative;
  width: 100%;
  max-width: 100%;
  display: flex;
  justify-content: stretch;
  box-sizing: border-box;

  &::before {
    content: "";
    position: absolute;
    left: -26px;
    top: 28px;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: ${({ theme }) => theme.bg};
    border: 2px solid ${({ theme }) => theme.primary};
    z-index: 1;

    @media (max-width: 768px) {
      left: -20px;
      top: 24px;
      width: 10px;
      height: 10px;
    }
  }
`;

const index = () => {
  return (
    <Container id="experience">
      <Wrapper>
        <ScrollReveal>
          <Header>
            <Title>Experience</Title>
            <Desc>
              My work experience as a software engineer and working on different
              companies and projects.
            </Desc>
          </Header>
        </ScrollReveal>
        <List>
          {experiences.map((experience, index) => (
            <Item key={experience.id}>
              <ScrollReveal delay={index * 80} direction="up" fullWidth>
                <ExperienceCard experience={experience} />
              </ScrollReveal>
            </Item>
          ))}
        </List>
      </Wrapper>
    </Container>
  );
};

export default index;
