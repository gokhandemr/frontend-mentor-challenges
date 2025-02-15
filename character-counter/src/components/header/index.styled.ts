import styled, {keyframes} from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 50px;
  @media (max-width: 1023px) {
    padding: 16px 0;
    margin-bottom: 40px;
  }
  @media (max-width: 767px) {
    padding: 16px 0;
  }
`;

const themeButtonKeyframes = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const ThemeButton = styled.button`
  width: 44px;
  height: 44px;
  color: var(--neutral-100);
  border: 0;
  border-radius: 8px;
  cursor: pointer;
  &:hover img {
    animation: ${themeButtonKeyframes} 4s linear infinite;
  }
`;
