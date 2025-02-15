// Styled
import {useTheme} from 'styled-components';
import {HeaderContainer, ThemeButton} from './index.styled';
// Types
import {HeaderTypes} from '../../types';

export default function Header({setDarkTheme}: HeaderTypes) {
  const theme = useTheme();
  return (
    <HeaderContainer>
      <a href='/'>
        <img
          src={theme.logo}
          alt='logo'
        />
      </a>

      <ThemeButton
        onClick={() => setDarkTheme((prev) => !prev)}
        style={{backgroundColor: theme.themeButton.background}}
      >
        <img
          src={theme.themeButton.icon}
          alt='theme button icon'
        />
      </ThemeButton>
    </HeaderContainer>
  );
}
