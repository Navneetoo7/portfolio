import React from "react";
import styled from "styled-components";
import { education } from "../../data/constants";
import EducationCard from "../Cards/EducationCard";
import ScrollReveal from "../ScrollReveal";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  padding: 0 0 60px;
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 900px;
  padding: 24px 20px 0;
  gap: 12px;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 16px 14px 0;
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
    <Container id="education">
      <Wrapper>
        <ScrollReveal>
          <Header>
            <Title>Education</Title>
            <Desc>
              My education has been a journey of self-discovery and growth. My
              educational details are as follows.
            </Desc>
          </Header>
        </ScrollReveal>
        <List>
          {education.map((edu, index) => (
            <Item key={edu.id}>
              <ScrollReveal delay={index * 100} direction="up" fullWidth>
                <EducationCard education={edu} />
              </ScrollReveal>
            </Item>
          ))}
        </List>
      </Wrapper>
    </Container>
  );
};

export default index;
