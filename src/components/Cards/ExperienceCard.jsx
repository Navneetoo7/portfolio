import React, { useState } from "react";
import styled from "styled-components";

const Document = styled.img`
  display: none;
  height: 70px;
  width: fit-content;
  background-color: #000;
  border-radius: 10px;
  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;

const Description = styled.div`
  width: 100%;
  font-size: 15px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_primary + 99};
  margin-bottom: 10px;
  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

const Summary = styled.p`
  margin: 0 0 8px 0;
  line-height: 1.5;
  color: ${({ theme }) => theme.text_secondary};
  font-size: 14px;
  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

const Points = styled.ul`
  margin: 0;
  padding-left: 18px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Point = styled.li`
  line-height: 1.45;
  color: ${({ theme }) => theme.text_primary + "cc"};
  &::marker {
    color: ${({ theme }) => theme.primary};
  }
`;

const Card = styled.div`
  width: 100%;
  max-width: 100%;
  margin: 0 auto;
  border-radius: 12px;
  background: ${({ theme }) => theme.card};
  padding: 16px 18px;
  justify-content: space-between;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 12px;
  transition: all 0.3s ease-in-out;
  border: 1px solid
    ${({ theme }) =>
      theme.bg === "#FFFFFF" ? "rgba(133, 76, 230, 0.25)" : "rgba(133, 76, 230, 0.45)"};
  box-shadow: ${({ theme }) =>
    theme.bg === "#FFFFFF"
      ? "0 8px 24px rgba(23, 92, 230, 0.08)"
      : "0 8px 24px rgba(0, 0, 0, 0.25)"};

  &:hover {
    transform: translateY(-5px);
    box-shadow: ${({ theme }) =>
      theme.bg === "#FFFFFF"
        ? "0 12px 28px rgba(23, 92, 230, 0.14)"
        : "0 12px 28px rgba(0, 0, 0, 0.35)"};
  }

  @media only screen and (max-width: 768px) {
    padding: 12px;
    gap: 8px;
  }
`;

const Top = styled.div`
  width: 100%;
  display: flex;
  gap: 12px;
`;

const Image = styled.img`
  height: 50px;
  width: 50px;
  object-fit: contain;
  background-color: ${({ theme }) =>
    theme.bg === "#FFFFFF" ? "#f5f5f7" : "#ffffff"};
  border-radius: 10px;
  margin-top: 4px;
  padding: 4px;
  flex-shrink: 0;
  @media only screen and (max-width: 768px) {
    height: 40px;
    width: 40px;
  }
`;

const Body = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Role = styled.div`
  font-size: 30px;
  font-weight: 700;
  color: ${({ theme }) => theme.text_primary};
  line-height: 1.3;
  @media only screen and (max-width: 768px) {
    font-size: 22px;
  }
`;

const Company = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: ${({ theme }) => theme.primary};
  margin-top: 2px;
  @media only screen and (max-width: 768px) {
    font-size: 14px;
  }
`;

const Date = styled.div`
  font-size: 13px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_secondary};
  margin-top: 4px;
  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

const Skills = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 4px;
`;

const SkillsLabel = styled.div`
  font-size: 13px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
`;

const ItemWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const Skill = styled.div`
  font-size: 12px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_primary};
  background: ${({ theme }) =>
    theme.bg === "#FFFFFF" ? "rgba(133, 76, 230, 0.08)" : "rgba(133, 76, 230, 0.18)"};
  border: 1px solid
    ${({ theme }) =>
      theme.bg === "#FFFFFF" ? "rgba(133, 76, 230, 0.2)" : "rgba(133, 76, 230, 0.35)"};
  border-radius: 999px;
  padding: 5px 10px;
  @media only screen and (max-width: 768px) {
    font-size: 11px;
    padding: 4px 8px;
  }
`;

const Toggle = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
  margin-bottom: 2px;
  padding: 8px 16px;
  border-radius: 8px;
  border: 1px solid
    ${({ theme }) =>
      theme.bg === "#FFFFFF" ? "rgba(0, 0, 0, 0.18)" : "rgba(255, 255, 255, 0.28)"};
  background: ${({ theme }) =>
    theme.bg === "#FFFFFF" ? "#111111" : "#FFFFFF"};
  color: ${({ theme }) =>
    theme.bg === "#FFFFFF" ? "#FFFFFF" : "#111111"};
  cursor: pointer;
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.02em;
  width: fit-content;
  transition: transform 0.2s ease, opacity 0.2s ease;

  &:hover {
    transform: translateY(-1px);
    opacity: 0.92;
  }

  @media only screen and (max-width: 768px) {
    font-size: 12px;
    padding: 7px 14px;
  }
`;

const ExperienceCard = ({ experience }) => {
  const [expanded, setExpanded] = useState(false);
  const [imgSrc, setImgSrc] = useState(experience.img);
  const fallback = `https://ui-avatars.com/api/?name=${encodeURIComponent(
    experience.company || "Company"
  )}&background=854CE6&color=fff&size=128&bold=true`;
  const points = experience.points || (experience.desc ? [experience.desc] : []);
  const canToggle = points.length > 2;

  return (
    <Card>
      <Top>
        <Image
          src={imgSrc || fallback}
          alt={experience.company}
          onError={() => setImgSrc(fallback)}
        />
        <Body>
          <Role>{experience.role}</Role>
          <Company>{experience.company}</Company>
          <Date>{experience.date}</Date>
        </Body>
      </Top>
      <Description>
        {experience.desc && <Summary>{experience.desc}</Summary>}
        {points.length > 0 && (
          <Points>
            {(expanded || !canToggle ? points : points.slice(0, 2)).map((point) => (
              <Point key={point}>{point}</Point>
            ))}
          </Points>
        )}
        {canToggle && (
          <Toggle type="button" onClick={() => setExpanded((v) => !v)}>
            {expanded ? "Show less" : "Read more"}
          </Toggle>
        )}
        {experience?.skills && (
          <Skills>
            <SkillsLabel>Skills</SkillsLabel>
            <ItemWrapper>
              {experience.skills.map((skill) => (
                <Skill key={skill}>{skill}</Skill>
              ))}
            </ItemWrapper>
          </Skills>
        )}
      </Description>
      {experience.doc && (
        <a href={experience.doc} target="new" rel="noreferrer">
          <Document src={experience.doc} alt="document" />
        </a>
      )}
    </Card>
  );
};

export default ExperienceCard;
