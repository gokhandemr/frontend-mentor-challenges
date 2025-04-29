'use client';

import deleteIcon from '@/public/icons/icon-delete.svg';
import { useEditorStore } from '@/zustand-stores/editor-store';
import Image from 'next/image';

export default function DeleteButton() {
  const { setDeleteModalOpen } = useEditorStore();

  const handleClick = () => {
    setDeleteModalOpen(true);
  };

  return (
    <button onClick={handleClick} className='mr-[24]'>
      <Image src={deleteIcon} alt='delete icon' width={18} height={20} className='hover:sepia-[40]' />
    </button>
  );
}
