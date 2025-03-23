import { TitleSectionTypes } from '@/types';
import style from './index.module.css';

export default function TitleSection({ title, description }: TitleSectionTypes) {
  return (
    <section className={style.container} style={description ? { marginBottom: '0' } : {}}>
      <h2 className={style.title} style={description ? { marginBottom: '6px' } : {}}>{title}</h2>
      {description && <p className={style.description}>{description}</p>}
    </section>
  );
}
