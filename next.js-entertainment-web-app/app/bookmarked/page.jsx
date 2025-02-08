"use client";
import {useEffect, useState} from "react";
// Components
import CardList from "@/components/card-list";

export default function BookmarkedPage() {
  const [movies, setMovies] = useState([]);
  const [tvSeries, setTvSeries] = useState([]);

  useEffect(() => {
    const storedList = JSON.parse(localStorage.getItem("myList")) || [];
    const moviesList = storedList.filter((movie) => movie.media_type == "movie");
    const tvSeriesList = storedList.filter((movie) => movie.media_type == "tv");
    setMovies(moviesList);
    setTvSeries(tvSeriesList);
  }, []);

  return (
    <>
      <CardList title={"Bookmarked Movies"} results={movies} />
      <CardList title={"Bookmarked TV Series"} results={tvSeries} />
    </>
  );
}
