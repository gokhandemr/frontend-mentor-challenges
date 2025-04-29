'use client';
import LightMode from '@/public/icons/icon-light-mode.svg';
import DarkMode from '@/public/icons/icon-dark-mode.svg';
import Image from 'next/image';
import { useThemeStore } from '@/zustand-stores/theme-store';

export default function ThemeSwitcher() {
  const { isDarkMode, setIsDarkMode } = useThemeStore();

  return (
    <div className='absolute left-[24] bottom-[24] flex items-center justify-center'>
      <Image src={DarkMode} alt='icon' unoptimized width={16} height={16} className={`w-[16] h-[16] ${!isDarkMode && 'brightness-200'}`} />
      <label className='inline-block relative w-[48] h-[24] ml-[8px] mr-[8px] cursor-pointer'>
        <input type='checkbox' onClick={setIsDarkMode} className='w-[0] h-[0] opacity-0' />
        <span className={`w-[100%] h-[100%] inline-flex bg-(--color-600) rounded-xl`}></span>
        <span className={`w-[12] h-[12] rounded-[50%] bg-(--color-100) absolute left-[6px] top-[6px] z-10 transition delay-75 ${isDarkMode && 'transform-[translateX(26px)]'}`}></span>
      </label>
      <Image src={LightMode} alt='icon' unoptimized width={16} height={16} className={`w-[16] h-[16] ${isDarkMode && 'brightness-200'}`} />
    </div>
  );
}
