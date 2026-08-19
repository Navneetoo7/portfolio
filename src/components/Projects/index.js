import React from "react";
import styled from "styled-components";
import { projects } from "../../data/constants";
import ScrollReveal from "../ScrollReveal";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  width: 100%;
  padding: 24px 0 40px;
  box-sizing: border-box;

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
  max-width: 1100px;
  gap: 12px;
  padding: 0 24px;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 0 16px;
  }
`;

const Title = styled.div`
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

const Desc = styled.div`
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

const CardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 25px;
  margin-top: 30px;
  box-sizing: border-box;

  @media (max-width: 768px) {
    gap: 16px;
  }
`;

const Card = styled.div`
  width: 100%;
  max-width: 500px;
  background: ${({ theme }) => theme.card};
  border-radius: 16px;
  border: 0.1px solid #854ce6;
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  padding: 22px 24px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  box-sizing: border-box;
  transition: transform 0.25s ease, box-shadow 0.25s ease;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 14px 30px rgba(133, 76, 230, 0.2);
  }

  @media (max-width: 768px) {
    max-width: 100%;
    padding: 18px 16px;
  }
`;

const ProjectTitle = styled.h3`
  margin: 0;
  font-size: 20px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
  line-height: 1.35;

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

const ProjectDesc = styled.p`
  margin: 0;
  font-size: 14px;
  line-height: 1.55;
  color: ${({ theme }) => theme.text_secondary};
  flex: 1;

  @media (max-width: 768px) {
    font-size: 13px;
  }
`;

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 4px;
`;

const Tag = styled.span`
  font-size: 12px;
  font-weight: 500;
  color: ${({ theme }) => theme.primary};
  background-color: ${({ theme }) => theme.primary + "18"};
  padding: 4px 10px;
  border-radius: 8px;
`;

const Projects = () => {
  return (
    <Container id="projects">
      <Wrapper>
        <ScrollReveal>
          <Title>Projects</Title>
          <Desc>
            Selected work across enterprise platforms, AI products, and
            high-scale systems.
          </Desc>
        </ScrollReveal>
        <CardContainer>
          {projects.map((project) => (
            <Card key={project.id}>
              <ProjectTitle>{project.title}</ProjectTitle>
              <ProjectDesc>{project.description}</ProjectDesc>
              <Tags>
                {project.tags.map((tag) => (
                  <Tag key={tag}>{tag}</Tag>
                ))}
              </Tags>
            </Card>
          ))}
        </CardContainer>
      </Wrapper>
    </Container>
  );
};

export default Projects;
