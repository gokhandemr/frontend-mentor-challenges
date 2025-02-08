// Next
import Image from "next/image";
// Styles
import style from "./style.module.css";
// Components
import AddToBookmarkedButton from "../add-bookmarked-button";

export default function Details({media, mediaType}) {
  const {backdrop_path, poster_path, name, title, tagline, overview, vote_average, release_date, first_air_date, budget} = media;

  return (
    <section className={style.container}>
      <div className={style.backdrop}>
        <Image src={`https://image.tmdb.org/t/p/original/${backdrop_path ? backdrop_path : poster_path}`} alt={`${name || title} background`} fill priority quality={75} sizes="100vw" />
        {/* Add Bookmarked Button */}
        <AddToBookmarkedButton media={media} mediaType={mediaType} />
      </div>

      <div className={style.poster}>
        <Image src={`https://image.tmdb.org/t/p/original/${poster_path ? poster_path : backdrop_path}`} alt={`${name || title} poster`} fill priority quality={100} sizes="500px" />
      </div>

      <div className={style.details}>
        <h1>{`${name || title}`}</h1>
        {tagline !== "" && <p className={style.tagline}>{tagline}</p>}
        <p className={style.overview}>{overview}</p>
        <div className={style.detailsBottom}>
          <p>{`Rating: ${vote_average}`}</p>
          <p>{`Release Date: ${release_date || first_air_date}`}</p>
          {budget !== undefined && <p>Budget: ${new Intl.NumberFormat("en-US").format(budget)}</p>}
        </div>
      </div>
    </section>
  );
}
