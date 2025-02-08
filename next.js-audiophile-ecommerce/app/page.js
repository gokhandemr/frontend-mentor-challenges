// Components
import Banner from "@/components/banner";
import Categories from "@/components/categories-menu";
import FeaturedProducts from "@/components/featured-products";
import StoreDescription from "@/components/store-description";

export default function Home() {
  return (
    <>
      <Banner />
      <Categories />
      <FeaturedProducts />
      <StoreDescription />
    </>
  );
}
