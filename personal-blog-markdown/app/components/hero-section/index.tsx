import SocialLinks from '../social-links';
import style from './index.module.css';

export default function HereSection() {
  return (
    <section className={style.container}>
      <h2>Hi, I’m Paulina 👋</h2>
      <p>
        I’m on a journey to become a front-end web developer. I love building little projects, trying out new coding techniques, and sharing what I learn along the way. When I’m not at my desk, you’ll find me reading, hiking through the mountains, or challenging myself on rock-climbing walls.
        <br />
        <br />I started this blog to document my progress, keep myself accountable, and hopefully inspire anyone else who’s learning to code. Welcome to my corner of the internet, and thanks for stopping by!
      </p>
      <SocialLinks />
    </section>
  );
}
