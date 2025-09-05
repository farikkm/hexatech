import React from "react";
import styled from "styled-components";
import styles from "./soc-course-bg.module.css";
import { isMobile } from "@/shared/utils/isMobile";

const SocCourseBg = () => {
  const randomPosition = (index, total) => {
    const cols = Math.ceil(Math.sqrt(total));
    const rows = Math.ceil(total / cols);

    const row = Math.floor(index / cols);
    const col = index % cols;

    // немного «размазываем» внутри ячейки
    const top = (row + Math.random() * 0.8) * (100 / rows);
    const left = (col + Math.random() * 0.8) * (100 / cols);

    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: "translate(-50%, -50%)",
    };
  };

  let numQuantity = isMobile() ? 7 : 22;

  return (
    <StyledWrapper className={`${styles.wrapper} transition-mask`}>
      {Array.from({ length: numQuantity }).map((_, i) => (
        <div
          key={i}
          style={randomPosition(i, numQuantity)}
          className="ai-matrix-loader"
        >
          {Array.from({ length: Math.floor(Math.random() * 6) + 1 }).map(
            (_, j) => (
              <div key={j} className="digit">
                {Math.random().toFixed()}
              </div>
            )
          )}
        </div>
      ))}
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .ai-matrix-loader {
    width: min-content;
    height: auto;
    position: absolute;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 5px;
  }

  .digit {
    color: #00ff88;
    font-family: var(--main-font);
    font-weight: 400;
    font-size: 38px;
    text-align: center;
    text-shadow: 0 0 5px #00ff88;
    animation: matrix-fall 2s infinite, matrix-flicker 0.5s infinite;
    opacity: 0;
  }

  .digit:nth-child(1) {
    animation-delay: 0.1s;
  }
  .digit:nth-child(2) {
    animation-delay: 0.3s;
  }
  .digit:nth-child(3) {
    animation-delay: 0.5s;
  }
  .digit:nth-child(4) {
    animation-delay: 0.7s;
  }
  .digit:nth-child(5) {
    animation-delay: 0.9s;
  }
  .digit:nth-child(6) {
    animation-delay: 1.1s;
  }
  .digit:nth-child(7) {
    animation-delay: 1.3s;
  }
  .digit:nth-child(8) {
    animation-delay: 1.5s;
  }

  .glow {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(
      circle,
      rgba(0, 255, 136, 0.1) 0%,
      transparent 70%
    );
    animation: matrix-pulse 2s infinite;
  }

  @keyframes matrix-fall {
    0% {
      transform: translateY(-50px) rotateX(90deg);
      opacity: 0;
    }
    20%,
    80% {
      transform: translateY(0) rotateX(0deg);
      opacity: 0.8;
    }
    100% {
      transform: translateY(50px) rotateX(-90deg);
      opacity: 0;
    }
  }

  @keyframes matrix-flicker {
    0%,
    19%,
    21%,
    100% {
      opacity: 0.8;
    }
    20% {
      opacity: 0.2;
    }
  }

  @keyframes matrix-pulse {
    0%,
    100% {
      opacity: 0.3;
    }
    50% {
      opacity: 0.7;
    }
  }
`;

export default SocCourseBg;
