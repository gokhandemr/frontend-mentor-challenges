import SubscribeSection from '@/app/components/subscribe-section';
import style from './page.module.css';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Newsletter Page',
};

export default function Newsletter() {
  return (
    <div className={style.container}>
      <h2>Newsletter</h2>
      <p>Want to stay updated on my latest articles, coding tutorials, and personal adventures? Sign up for my newsletter! It’s a simple way to keep track of new posts and occasional coding tips I discover. Just drop your email in the sign-up box, and I’ll send you updates whenever there’s something new to share.</p>
      <p>
        <strong>I’d love to have you along for the ride and also hear about your own journey!</strong>
      </p>

      <SubscribeSection />
    </div>
  );
}
