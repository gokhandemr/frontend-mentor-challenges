'use client';
import style from './index.module.css';
import moonIcon from '@/public/icons/icon-moon.svg';
import sunIcon from '@/public/icons/icon-sun.svg';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function ThemeButton() {
  const [isDarkThemeActive, setIsDarkThemeActive] = useState<boolean>(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme') === 'active';
    setIsDarkThemeActive(storedTheme);
  }, []);

  useEffect(() => {
    const body = document.querySelector('body');
    const darkCodeTheme = document.getElementById('highlight-style');

    if (isDarkThemeActive) {
      localStorage.setItem('theme', 'active');
      // body etiketine data-type ekler
      if (body) body.setAttribute('data-type', 'dark-theme');

      // highlight github-dark temasını ekleme
      const link = document.createElement('link');
      link.id = 'highlight-style'; // Aynı dosyanın iki kez eklenmesini önlemek için ID belirle
      link.rel = 'stylesheet';
      link.href = 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.7.0/styles/github-dark.min.css';
      document.head.appendChild(link);
    } else {
      localStorage.removeItem('theme');
      // body etiketine eklenen data-type'ı silme
      if (body) body.removeAttribute('data-type');
      // highlight temeasını silme
      if (darkCodeTheme) darkCodeTheme.remove();
    }
  }, [isDarkThemeActive]);

  const handleClick = () => {
    setIsDarkThemeActive(!isDarkThemeActive);
  };

  return (
    <button className={`${style.themeButton} ${isDarkThemeActive ? style.darkThemeStyle : ''}`} onClick={handleClick}>
      <Image src={isDarkThemeActive ? sunIcon : moonIcon} alt='moon icon' width={17} height={17} />
    </button>
  );
}
