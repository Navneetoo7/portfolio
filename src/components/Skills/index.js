import React from "react";
import styled, { keyframes } from "styled-components";
import { skills } from "../../data/constants";
import ScrollReveal from "../ScrollReveal";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  width: 100%;
  padding: 16px 0 24px;
  box-sizing: border-box;
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1100px;
  gap: 12px;
  padding: 0 24px;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 0 16px;
  }

  @media (max-width: 500px) {
    padding: 0 14px;
  }
`;

export const Title = styled.div`
  font-size: 42px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

export const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  max-width: 640px;
  margin: 0 auto;
  padding: 0 8px;
  line-height: 1.5;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const SkillsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 30px;
  gap: 25px;
  justify-content: center;
  box-sizing: border-box;

  @media (max-width: 768px) {
    gap: 16px;
  }
`;

const popIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(10px) scale(0.92);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
`;

const Skill = styled.div`
  width: 100%;
  max-width: 500px;
  background: ${({ theme }) => theme.card};
  border: 0.1px solid #854ce6;
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  border-radius: 16px;
  padding: 18px 36px;
  transition: transform 0.25s ease, box-shadow 0.25s ease;
  box-sizing: border-box;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 14px 30px rgba(133, 76, 230, 0.2);
  }

  @media (max-width: 768px) {
    max-width: 100%;
    padding: 16px 20px;
  }
`;

const SkillTitle = styled.h2`
  font-size: 28px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};
  margin-bottom: 20px;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 22px;
    margin-bottom: 14px;
  }
`;

const SkillList = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 20px;
`;

const SkillItem = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_primary + 80};
  border: 1px solid ${({ theme }) => theme.text_primary + 80};
  border-radius: 12px;
  padding: 12px 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  animation: ${popIn} 0.45s ease both;
  animation-delay: ${({ delay }) => `${delay}ms`};
  transition: transform 0.2s ease, border-color 0.2s ease, background 0.2s ease;

  &:hover {
    transform: translateY(-3px) scale(1.04);
    border-color: ${({ theme }) => theme.primary};
    background: ${({ theme }) =>
      theme.bg === "#FFFFFF"
        ? "rgba(133, 76, 230, 0.06)"
        : "rgba(133, 76, 230, 0.12)"};
  }

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 8px 12px;
  }
`;

const SkillImage = styled.img`
  width: 24px;
  height: 24px;
  transition: transform 0.25s ease;

  ${SkillItem}:hover & {
    transform: rotate(-8deg) scale(1.12);
  }
`;

const Skills = () => {
  return (
    <Container id="skills">
      <Wrapper>
        <ScrollReveal>
          <Title>Skills</Title>
          <Desc>
            Technologies I work with across frontend, backend, mobile, and cloud
            — refined through 5+ years of shipping production software.
          </Desc>
        </ScrollReveal>
        <SkillsContainer>
          {skills.map((skill) => (
            <Skill key={skill.title}>
              <SkillTitle>{skill.title}</SkillTitle>
              <SkillList>
                {skill.skills.map((item, itemIndex) => (
                  <SkillItem key={item.name} delay={itemIndex * 40}>
                    <SkillImage src={item.image} alt={item.name} />
                    {item.name}
                  </SkillItem>
                ))}
              </SkillList>
            </Skill>
          ))}
        </SkillsContainer>
      </Wrapper>
    </Container>
  );
};

export default Skills;
