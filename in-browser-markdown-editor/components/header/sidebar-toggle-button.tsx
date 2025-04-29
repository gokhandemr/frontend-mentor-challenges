import Image from 'next/image';
import closeIcon from '@/public/icons/icon-close.svg';
import menuIcon from '@/public/icons/icon-menu.svg';
import { useSidebarStore } from '@/zustand-stores/sidebar-store';

export default function SidebarToggleButton() {
  const { isSidebarOpen, setIsSidebarOpen } = useSidebarStore();

  return (
    <button onClick={setIsSidebarOpen} className='md:w-[72px] xs:w-[56px] h-[100%] flex items-center justify-center mr-[24] bg-(--color-700) hover:bg-(--orange)'>
      <Image src={isSidebarOpen ? closeIcon : menuIcon} alt='close icon' width={20} height={20} className='w-[20] h-[20]' />
    </button>
  );
}
