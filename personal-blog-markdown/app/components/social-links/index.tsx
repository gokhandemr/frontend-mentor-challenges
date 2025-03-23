import Link from 'next/link';
import style from './index.module.css';
import Image from 'next/image';
import xIcon from '@/public/icons/logo-x.svg';
import githubIcon from '@/public/icons/logo-github.svg';
import linkedinIcon from '@/public/icons/logo-linkedin.svg';
import frontendmentorIcon from '@/public/icons/logo-frontend-mentor.svg';

export default function SocialLinks({ isFooter }: { isFooter?: boolean }) {
  const socials = [
    { platformIcon: xIcon, platformHref: '' },
    { platformIcon: githubIcon, platformHref: '' },
    { platformIcon: linkedinIcon, platformHref: '' },
    { platformIcon: frontendmentorIcon, platformHref: '' },
  ];
  return (
    <div className={`${style.container} ${isFooter ? style.footerStyle : ''}`}>
      {socials.map(({ platformIcon, platformHref }, index) => (
        <Link key={index} href={platformHref} className={style.social}>
          <Image src={platformIcon} alt='social link' width={16} height={16} />
        </Link>
      ))}
    </div>
  );
}
