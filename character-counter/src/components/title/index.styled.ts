import styled, { keyframes } from "styled-components";

const titleKeyframes = keyframes`
  from { opacity: 0; transform: translateY(-10px); }
  to { opacity: 1; transform: translateY(0); }
`;

export const TitleContainer = styled.section`
  width: 100%;
  margin-bottom: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${titleKeyframes} 1s ease-out;
`;

export const TitleH1 = styled.h1`
  width: 16ch;
  font: var(--text-preset-1);
  text-align: center;
  @media (max-width: 767px) {
    font: var(--text-preset-1-mobile);
  }
`;