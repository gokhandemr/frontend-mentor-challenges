'use client';
import darkPattern from '@/public/icons/pattern-dark.svg';
import lightPattern from '@/public/icons/pattern-light.svg';
import Image from 'next/image';
import { useState } from 'react';
import { useEffect } from 'react';
import style from './index.module.css'

export default function BackgroundShapes() {
  const [isDarkTheme, setIsDarkTheme] = useState<boolean>(false);

  useEffect(() => {
    const body = document.body.hasAttribute('data-type') || false;
    if (body) return setIsDarkTheme(true);
    setIsDarkTheme(false);
  }, []);

  return (
    <div className={style.container}>
      <Image src={isDarkTheme ? darkPattern : lightPattern} alt='background shape' width={423} height={423} />
      <Image src={isDarkTheme ? darkPattern : lightPattern} alt='background shape' width={423} height={423} />
    </div>
  );
}
