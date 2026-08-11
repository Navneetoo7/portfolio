import styled, { keyframes } from "styled-components";

const slowFloat = keyframes`
  0% {
    transform: translate3d(0, 0, 0) scale(1);
  }
  50% {
    transform: translate3d(-18px, 14px, 0) scale(1.04);
  }
  100% {
    transform: translate3d(0, 0, 0) scale(1);
  }
`;

const slowRotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Div = styled.div`
  position: relative;
  width: 600px;
  height: 500px;
  animation: ${slowFloat} 14s ease-in-out infinite;

  .BgAnimation__svg {
    width: 100%;
    height: 100%;
    animation: ${slowRotate} 48s linear infinite;
    opacity: ${({ theme }) => (theme.bg === "#FFFFFF" ? 0.55 : 0.9)};
  }

  @media (max-width: 960px) {
    width: 420px;
    height: 360px;
  }

  @media (max-width: 640px) {
    width: 300px;
    height: 260px;
  }
`;
