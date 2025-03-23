'use client';
import style from './index.module.css';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import openIcon from '@/public/icons/icon-menu.svg';
import closeIcon from '@/public/icons/icon-menu-close.svg';
import { usePathname } from 'next/navigation';

export default function MobileButton() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    const main = document.querySelector('main');
    if (isOpen) {
      if (main) main.style.paddingTop = '200px';
    } else {
      if (main) main.removeAttribute('style');
    }
  }, [isOpen]);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <button className={`${style.mobileButton} ${isOpen ? style.closeButtonStyle : ''}`} onClick={handleClick}>
      <Image src={isOpen ? closeIcon : openIcon} alt='mobile close button' width={20} height={20} />
    </button>
  );
}
