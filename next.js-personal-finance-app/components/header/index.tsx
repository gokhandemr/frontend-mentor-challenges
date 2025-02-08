// Styles
import style from "./style.module.css";
// Components
import Nav from "./nav";
import Logo from "./logo";
import MinimizeButton from "./minimizeButton";

export default function Header() {
  return (
    <header className={style.container}>
      <Logo />
      <Nav />
      <MinimizeButton />
    </header>
  );
}
