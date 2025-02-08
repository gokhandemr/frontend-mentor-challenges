// Next
import {notFound} from "next/navigation";
// Services
import {fetchMediaDetails, fetchMediaVideos} from "@/services";
// Components
import Details from "@/components/single-page-details";
import Videos from "@/components/single-page-videos";

// SEO
export async function generateMetadata({params}) {
  const {slug, id} = await params;

  // fetch data
  const {title, name, overview} = await fetchMediaDetails(slug, id);

  return {
    title: title || name,
    description: overview,
  };
}

export default async function MediaSinglePage({params}) {
  const {slug, id} = await params;
  // slug "movie" veya "tv" değilse notFound()'a yönlendir.
  if (slug !== "movie" && slug !== "tv") return notFound();

  const [media, {results: videos}] = await Promise.all([fetchMediaDetails(slug, id), fetchMediaVideos(slug, id)]);
  // "media" yoksa notFound()'a yönlendir.
  if (!media.id) return notFound();

  // Videoların sadece "official" ve "Youtube" değerlerini içerenlerini ve ilk dört tanesini yakala.
  const filteredVideos = videos.filter((video) => video.official && video.site === "YouTube").slice(0, 4);

  return (
    <>
      <Details media={media} mediaType={slug} />
      <Videos filteredVideos={filteredVideos} />
    </>
  );
}
