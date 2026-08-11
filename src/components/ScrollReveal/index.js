import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const RevealBox = styled.div`
  width: ${({ fullWidth }) => (fullWidth ? "100%" : "100%")};
  flex: ${({ flex }) => flex || "initial"};
  max-width: ${({ maxWidth }) => maxWidth || "none"};
  box-sizing: border-box;
  opacity: ${({ visible }) => (visible ? 1 : 0)};
  transform: ${({ visible, direction }) => {
    if (visible) return "translate3d(0, 0, 0) scale(1)";
    if (direction === "left") return "translate3d(-36px, 0, 0) scale(0.98)";
    if (direction === "right") return "translate3d(36px, 0, 0) scale(0.98)";
    if (direction === "scale") return "translate3d(0, 18px, 0) scale(0.94)";
    return "translate3d(0, 28px, 0) scale(0.98)";
  }};
  transition: opacity 0.7s ease, transform 0.7s cubic-bezier(0.22, 1, 0.36, 1);
  transition-delay: ${({ delay }) => `${delay}ms`};
  will-change: opacity, transform;

  @media (max-width: 768px) {
    flex: ${({ flex }) => (flex ? "1 1 100%" : "initial")};
    max-width: 100%;
  }
`;

const ScrollReveal = ({
  children,
  delay = 0,
  direction = "up",
  threshold = 0.15,
  className,
  fullWidth = true,
  flex,
  maxWidth,
}) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold]);

  return (
    <RevealBox
      ref={ref}
      visible={visible}
      delay={delay}
      direction={direction}
      className={className}
      fullWidth={fullWidth}
      flex={flex}
      maxWidth={maxWidth}
    >
      {children}
    </RevealBox>
  );
};

export default ScrollReveal;
