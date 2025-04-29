import { useEditorStore } from '@/zustand-stores/editor-store';
import { usePostStore } from '@/zustand-stores/post-store';
import { useThemeStore } from '@/zustand-stores/theme-store';

export default function DeleteModal() {
  const { currentPost, setCurrentPost, deleteModalOpen, setDeleteModalOpen } = useEditorStore();
  const { deletePost, posts } = usePostStore();
  const { isDarkMode } = useThemeStore();

  const handleClick = () => {
    deletePost(currentPost?.name || '');
    setCurrentPost(posts.filter((post) => post.name !== currentPost?.name)[0] || []);
    setDeleteModalOpen(false);
  };

  return (
    <div className={`${!deleteModalOpen && 'hidden'} w-full h-full z-100 fixed left-0 right-0 top-0 bottom-0 m-auto flex items-center justify-center`}>
      <div onClick={() => setDeleteModalOpen(false)} className='w-full h-full bg-[#000000bd] fixed left-0 right-0 top-0 bottom-0'></div>
      <div className={`${isDarkMode && 'bg-(--color-900) text-(--color-400)'} w-[343] flex flex-col p-[24] bg-(--color-100) text-(--color-500) relative z-150`}>
        <h4 className={`${isDarkMode && '!text-(--color-100)'}`}>Delete this document?</h4>
        <p className='mb-[16] text-[14px]'>
          Are you sure you want to delete the ‘welcome.md’ document and its contents?
          <br />
          This action cannot be reversed.
        </p>
        <button onClick={handleClick} className={`text-(--color-100) w-full h-[40] bg-(--orange) rounded-[4] text-sm hover:bg-(--orange-hover)`}>
          Confirm & Delete
        </button>
      </div>
    </div>
  );
}
