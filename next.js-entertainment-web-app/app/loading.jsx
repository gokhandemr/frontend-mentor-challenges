// Components
import CardListLoading from "@/components/card-list/loading";
import TrendingLoading from "@/components/trending/loading";

export default function Loading() {
  return (
    <>
      <TrendingLoading />
      <CardListLoading />
    </>
  );
}
