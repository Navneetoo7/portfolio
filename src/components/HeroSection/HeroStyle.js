import styled, { keyframes } from "styled-components";

const driftA = keyframes`
  0% { transform: translate(0, 0) scale(1); }
  50% { transform: translate(40px, -30px) scale(1.08); }
  100% { transform: translate(0, 0) scale(1); }
`;

const driftB = keyframes`
  0% { transform: translate(0, 0) scale(1); }
  50% { transform: translate(-50px, 35px) scale(1.12); }
  100% { transform: translate(0, 0) scale(1); }
`;

const driftC = keyframes`
  0% { transform: translate(0, 0) scale(1); }
  50% { transform: translate(30px, 40px) scale(0.95); }
  100% { transform: translate(0, 0) scale(1); }
`;

export const HeroContainer = styled.div`
  background: ${({ theme }) => theme.card_light};
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 80px 30px;
  overflow: hidden;
  box-sizing: border-box;
  min-height: calc(100vh - 56px);
  min-height: calc(100dvh - 56px);
  @media (max-width: 960px) {
    padding: 40px 20px 32px;
  }
  @media (max-width: 768px) {
    min-height: calc(100vh - 56px);
    min-height: calc(100dvh - 56px);
    padding: 16px 16px 24px;
  }
  @media (max-width: 640px) {
    min-height: calc(100vh - 56px);
    min-height: calc(100dvh - 56px);
    padding: 20px 16px 24px;
    justify-content: center;
  }
  z-index: 1;

  &::before,
  &::after {
    content: "";
    position: absolute;
    border-radius: 50%;
    filter: blur(60px);
    pointer-events: none;
    z-index: 0;
  }

  &::before {
    width: 340px;
    height: 340px;
    top: -80px;
    left: -60px;
    background: ${({ theme }) =>
      theme.bg === "#FFFFFF"
        ? "rgba(133, 76, 230, 0.18)"
        : "rgba(133, 76, 230, 0.28)"};
    animation: ${driftA} 16s ease-in-out infinite;
  }

  &::after {
    width: 300px;
    height: 300px;
    bottom: -70px;
    right: 8%;
    background: ${({ theme }) =>
      theme.bg === "#FFFFFF"
        ? "rgba(19, 173, 199, 0.16)"
        : "rgba(19, 173, 199, 0.24)"};
    animation: ${driftB} 20s ease-in-out infinite;
  }
`;

export const AmbientGlow = styled.div`
  position: absolute;
  width: 260px;
  height: 260px;
  top: 35%;
  left: 42%;
  border-radius: 50%;
  filter: blur(70px);
  pointer-events: none;
  z-index: 0;
  background: ${({ theme }) =>
    theme.bg === "#FFFFFF"
      ? "rgba(244, 103, 55, 0.12)"
      : "rgba(244, 103, 55, 0.18)"};
  animation: ${driftC} 18s ease-in-out infinite;
`;

export const HeroBg = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 420px;
  height: 420px;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: translate(-50%, -50%);
  -webkit-transform: translate(-50%, -50%);
  z-index: 0;
  pointer-events: none;
  overflow: visible;

  @media (max-width: 960px) {
    width: 360px;
    height: 360px;
  }

  @media (max-width: 640px) {
    width: 280px;
    height: 280px;
  }
`;

export const HeroInnerContainer = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1100px;
  gap: 40px;
  @media (max-width: 960px) {
    flex-direction: column;
    gap: 20px;
  }
  @media (max-width: 640px) {
    gap: 8px;
  }
`;

const fadeUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(28px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const fadeInScale = keyframes`
  from {
    opacity: 0;
    transform: scale(0.88);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

const softPulse = keyframes`
  0%, 100% {
    box-shadow: 0 0 0 0 rgba(133, 76, 230, 0.35), 0 8px 24px rgba(0, 0, 0, 0.12);
  }
  50% {
    box-shadow: 0 0 0 12px rgba(133, 76, 230, 0), 0 10px 28px rgba(0, 0, 0, 0.16);
  }
`;

export const HeroLeftContainer = styled.div`
  width: 100%;
  max-width: 600px;
  order: 1;
  @media (max-width: 960px) {
    order: 2;
    max-width: 100%;
    margin-bottom: 12px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media (max-width: 640px) {
    order: 2;
    margin-bottom: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const HeroRightContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 420px;
  display: flex;
  order: 2;
  justify-content: center;
  align-items: center;
  gap: 12px;
  animation: ${fadeInScale} 0.9s ease both;
  animation-delay: 0.25s;
  @media (max-width: 960px) {
    order: 1;
    max-width: 100%;
    justify-content: center;
    align-items: center;
    margin-bottom: 16px;
  }

  @media (max-width: 640px) {
    margin-bottom: 4px;
    flex-direction: column;
    align-items: center;
  }
`;

export const Img = styled.img`
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: 320px;
  height: auto;
  aspect-ratio: 1 / 1;
  border-radius: 50%;
  object-fit: scale-down;
  border: 3px solid ${({ theme }) => theme.primary};
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  animation: ${softPulse} 3.6s ease-in-out infinite;
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
    animation-play-state: paused;
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.25);
  }

  @media (max-width: 960px) {
    max-width: 220px;
  }

  @media (max-width: 640px) {
    max-width: 160px;
  }
`;

export const Title = styled.div`
  font-weight: 700;
  font-size: 50px;
  color: ${({ theme }) => theme.text_primary};
  line-height: 68px;
  animation: ${fadeUp} 0.7s ease both;
  @media (max-width: 960px) {
    text-align: center;
    font-size: 42px;
    line-height: 52px;
  }

  @media (max-width: 640px) {
    font-size: 28px;
    line-height: 34px;
    margin-bottom: 4px;
  }
`;

export const TextLoop = styled.div`
  font-weight: 600;
  font-size: 28px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 12px;
  color: ${({ theme }) => theme.text_primary};
  line-height: 1.35;
  animation: ${fadeUp} 0.7s ease both;
  animation-delay: 0.12s;
  margin: 8px 0 12px;

  @media (max-width: 960px) {
    justify-content: center;
    text-align: center;
  }

  @media (max-width: 640px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 4px;
    font-size: 18px;
    line-height: 1.3;
    margin: 4px 0 8px;
  }
`;

export const Span = styled.span`
  color: ${({ theme }) => theme.primary};
  cursor: pointer;
  display: inline-block;
  min-height: 1.35em;
  font-size: 30px;
  font-weight: 700;

  @media (max-width: 640px) {
    text-align: center;
    max-width: 100%;
    font-size: 20px;
  }
`;

export const SubTitle = styled.div`
  font-size: 20px;
  line-height: 32px;
  margin-bottom: 42px;
  color: ${({ theme }) => theme.text_primary + 95};
  animation: ${fadeUp} 0.7s ease both;
  animation-delay: 0.22s;
  padding: 0 4px;

  @media (max-width: 960px) {
    text-align: center;
    margin-bottom: 24px;
  }

  @media (max-width: 640px) {
    font-size: 14px;
    line-height: 22px;
    margin-bottom: 20px;
    padding: 0 12px;
  }
`;

export const ResumeButton = styled.a`
  -webkit-appearance: button;
  -moz-appearance: button;
  appearance: button;
  text-decoration: none;
  width: 95%;
  max-width: 300px;
  text-align: center;
  padding: 16px 0;
  color: ${({ theme }) => theme.white};
  border-radius: 20px;
  cursor: pointer;
  font-size: 20px;
  font-weight: 600;
  animation: ${fadeUp} 0.7s ease both;
  animation-delay: 0.34s;
  transition: transform 0.25s ease, box-shadow 0.25s ease !important;
  background: linear-gradient(
    225deg,
    hsla(271, 100%, 50%, 1) 0%,
    hsla(294, 100%, 50%, 1) 100%
  );
  background-size: 200% 200%;
  box-shadow: 0 8px 20px rgba(133, 76, 230, 0.35);

  &:hover {
    transform: translateY(-3px) scale(1.03);
    box-shadow: 0 12px 28px rgba(133, 76, 230, 0.45);
    background-position: 100% 0;
  }

  @media (max-width: 640px) {
    padding: 14px 0;
    font-size: 17px;
    max-width: 260px;
  }
`;
