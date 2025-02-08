// Next
import Image from "next/image";
import Link from "next/link";
// Styles
import style from "./style.module.css";
// Icons
import iconMovie from "@/public/icons/icon-category-movie.svg";
import iconTv from "@/public/icons/icon-category-tv.svg";
// Components
import CardHover from "./card-hover";
import AddToBookmarkedButton from "@/components/add-bookmarked-button";

export default function Card({isTrending, media}) {
  const {id, name, title, original_name, original_title, first_air_date, release_date, backdrop_path, poster_path, vote_average, media_type} = media;

  return (
    <article className={`${style.container} ${isTrending ? style.trendingCard : ""}`}>
      <div className={style.imageContanier}>
        <Image src={`https://image.tmdb.org/t/p/original/${backdrop_path ? backdrop_path : poster_path}`} alt={`${name || title} - ${original_name || original_title}`} fill sizes="470px" quality={100} />
        <Link href={`${media_type}/${id}`}>
          <CardHover />
        </Link>
      </div>
      <div className={style.details}>
        <p>
          <span>{(first_air_date || release_date)?.slice(0, 4)}</span>
          <span>
            <Image src={media_type == "movie" ? iconMovie : iconTv} alt="media type icon" width={12} height={12} />
            {media_type[0].toUpperCase() + media_type.slice(1)}
          </span>
          <span>{vote_average.toFixed(1)}</span>
        </p>
        {isTrending ? <h2>{name || title}</h2> : <h6>{name || title}</h6>}
      </div>
      <AddToBookmarkedButton media={media} />
    </article>
  );
}
