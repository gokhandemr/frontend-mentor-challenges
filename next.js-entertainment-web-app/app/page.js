// Services
import {fetchMediaData} from "@/services";
// Components
import Trending from "@/components/trending";
import CardList from "@/components/card-list";

export default async function Home() {
  const [{results: trendingResults}, {results: recommendedResults}] = await Promise.all([fetchMediaData("day"), fetchMediaData("week")]);

  return (
    <>
      <Trending results={trendingResults} />
      <CardList title={"Recommended for you"} results={recommendedResults.slice(6, 20)} />
    </>
  );
}
