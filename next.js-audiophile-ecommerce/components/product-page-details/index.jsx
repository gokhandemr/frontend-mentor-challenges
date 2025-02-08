// Style
import style from "./style.module.css";
// Components
import Features from "./features";
import InTheBox from "./in-the-box";

export default function ProductPageDetails({features, includes}) {
  return (
    <section className={style.container}>
      <Features features={features} />
      <InTheBox includes={includes} />
    </section>
  );
}
