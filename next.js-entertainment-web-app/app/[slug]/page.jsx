// Next
import {notFound} from "next/navigation";
// Services
import {fetchCategoryMedia} from "@/services";
// Components
import CardList from "@/components/card-list";

export default async function CategoryPage({params}) {
  const slug = (await params).slug;

  if (slug !== "movie" && slug !== "tv") {
    notFound();
  }
  const {results} = await fetchCategoryMedia(slug);

  return <CardList title={slug == "movie" ? "Movies" : "TV Series"} results={results} />;
}
