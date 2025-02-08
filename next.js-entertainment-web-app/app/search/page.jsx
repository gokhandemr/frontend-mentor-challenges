// Services
import CardList from "@/components/card-list";
import {fetchSearchResults} from "@/services";

export default async function SearchPage({searchParams}) {
  const search = (await searchParams).s.trim();

  // Özel karakter ve boşluk kontrolü
  const regex = /^[a-zA-ZçÇğĞıİöÖşŞüÜ0-9\s:,.'-]*$/;
  if (search === "" || !regex.test(search)) return <p>Incorrect character usage, please try again without special characters</p>;

  // Fetch işlemi sonuçları
  const {results} = await fetchSearchResults(search);
  const filteredResults = results.filter((media) => media.media_type === "movie" || media.media_type === "tv");

  return <CardList title={`Found ${filteredResults.length} results for ‘${search}’`} results={filteredResults} />;
}
