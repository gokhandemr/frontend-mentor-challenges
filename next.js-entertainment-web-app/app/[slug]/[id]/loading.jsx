// Components
import CardListLoading from "@/components/card-list/loading";
import DetailsLoading from "@/components/single-page-details/loading";

export default function Loading() {
  return (
    <>
      <DetailsLoading />
      <CardListLoading count={4} />
    </>
  );
}
