import React from "react";
import styled from "styled-components";
import { Bio } from "../../data/constants";
import ScrollReveal from "../ScrollReveal";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  width: 100%;
  padding: 24px 0 48px;
  box-sizing: border-box;

  @media (max-width: 960px) {
    padding: 12px 0 40px;
  }
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 720px;
  gap: 16px;
  padding: 0 24px;
  box-sizing: border-box;
  text-align: center;

  @media (max-width: 768px) {
    padding: 0 16px;
  }
`;

const Title = styled.div`
  font-size: 42px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
  line-height: 1.25;

  @media (max-width: 768px) {
    font-size: 28px;
  }
`;

const Desc = styled.div`
  font-size: 18px;
  max-width: 600px;
  color: ${({ theme }) => theme.text_secondary};
  line-height: 1.55;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const Links = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 12px;
  width: 100%;
  max-width: 420px;
`;

const LinkRow = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  flex-wrap: wrap;
  text-decoration: none;
  color: ${({ theme }) => theme.text_primary};
  font-size: 16px;
  padding: 12px 16px;
  border-radius: 12px;
  border: 1px solid
    ${({ theme }) =>
      theme.bg === "#FFFFFF"
        ? "rgba(133, 76, 230, 0.25)"
        : "rgba(133, 76, 230, 0.45)"};
  background: ${({ theme }) => theme.card};
  transition: transform 0.2s ease, border-color 0.2s ease, color 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    border-color: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.primary};
  }

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 10px 14px;
  }
`;

const Label = styled.span`
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};
`;

const Value = styled.span`
  font-weight: 500;
`;

const Contact = () => {
  return (
    <Container id="contact">
      <Wrapper>
        <ScrollReveal>
          <Title>Let's Build Something Together</Title>
          <Desc>
            Open to Backend Tech Lead / Senior Backend Engineer / AI Backend
            Engineer roles — onsite or remote.
          </Desc>
        </ScrollReveal>
        <Links>
          <LinkRow href={`mailto:${Bio.email}`}>
            <Label>Email:</Label>
            <Value>{Bio.email}</Value>
          </LinkRow>
          <LinkRow
            href={Bio.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            <Label>LinkedIn:</Label>
            <Value>linkedin.com/in/navneetoo7</Value>
          </LinkRow>
          <LinkRow
            href={Bio.github}
            target="_blank"
            rel="noreferrer"
          >
            <Label>GitHub:</Label>
            <Value>github.com/Navneetoo7</Value>
          </LinkRow>
        </Links>
      </Wrapper>
    </Container>
  );
};

export default Contact;
