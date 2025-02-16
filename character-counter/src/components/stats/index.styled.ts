import styled from 'styled-components';

export const StatsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 24px;
  @media (max-width: 767px) {
    flex-direction: column;
  }
`;

export const StatContainer = styled.div`
  width: calc(33.333% - 8px);
  margin-right: 16px;
  padding: 16px;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  border-radius: 12px;
  color: var(--neutral-900);

  & > h4 {
    font: var(--text-preset-1);
    margin-bottom: 8px;
    z-index: 10 ;
  }
  & > p {
    font: var(--text-preset-3);
    z-index: 10 ;
  }
  & > img {
    position: absolute;
    right: -10%;
  }
  & {
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  &:hover {
    transform: scale(1.01);
    box-shadow: 0 0 15px rgba(255, 255, 255, 0.3);
  }
  &:last-child {
    margin: 0;
  }
  @media (max-width: 767px) {
    width: 100%;
    margin-bottom: 16px;
    & > h4 {
      font: var(--text-preset-1-mobile);
    }
  }
`;
