// Style
import style from "./style.module.css";

export default function Features({features}) {
  return (
    <div className={style.featuresContainer}>
      <h3 className="heading-h3">FEATURES</h3>
      {features && features.split("\n\n").map((text, index) => <p key={index}>{text}</p>)}
    </div>
  );
}
