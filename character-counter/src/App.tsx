// React
import {useEffect, useState} from 'react';
// Styled
import {ThemeProvider} from 'styled-components';
import {GlobalStyle} from './global-style.ts';
// Components
import Header from './components/header';
import Title from './components/title/index.tsx';
import TextArea from './components/text-area/index.tsx';
import LetterDensity from './components/letter-density/index.tsx';
import Stats from './components/stats/index.tsx';

function App() {
  const [darkTheme, setDarkTheme] = useState<boolean>(
    localStorage.getItem('dark-theme') ? JSON.parse(localStorage.getItem('dark-theme')!) : true
  );
  // Text Area States
  const [textAreaValue, setTextAreaValue] = useState<string>('');
  const [excludeSpaces, setExcludeSpaces] = useState<boolean>(false);

  useEffect(() => localStorage.setItem('dark-theme', JSON.stringify(darkTheme)), [darkTheme]);

  const theme = {
    background: darkTheme ? '../src/assets/images/bg-dark-theme.png' : '../src/assets/images/bg-light-theme.png',
    logo: darkTheme ? '../src/assets/images/logo-dark-theme.svg' : '../src/assets/images/logo-light-theme.svg',
    color: darkTheme ? 'var(--neutral-100)' : 'var(--neutral-900)',
    themeButton: {
      icon: darkTheme ? '../src/assets/images/icon-sun.svg' : '../src/assets/images/icon-moon.svg',
      background: darkTheme ? 'var(--neutral-700)' : 'var(--neutral-100)',
    },
    textArea: {
      color: darkTheme ? 'var(--neutral-200)' : 'var(--neutral-700)',
      background: darkTheme ? 'var(--neutral-700)' : 'var(--neutral-100)',
      borderColor: darkTheme ? 'var(--neutral-600)' : 'var(--neutral-200)',
    },
    progressBar: {
      background: darkTheme ? 'var(--neutral-700)' : 'var(--neutral-100)',
    },
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header setDarkTheme={setDarkTheme} />
      <main>
        <Title text='Analyze your text in real-time.' />
        <TextArea
          textAreaValue={textAreaValue}
          setTextAreaValue={setTextAreaValue}
          excludeSpaces={excludeSpaces}
          setExcludeSpaces={setExcludeSpaces}
        />
        <Stats
          textAreaValue={textAreaValue}
          excludeSpaces={excludeSpaces}
        />
        <LetterDensity textAreaValue={textAreaValue} />
      </main>
    </ThemeProvider>
  );
}

export default App;
