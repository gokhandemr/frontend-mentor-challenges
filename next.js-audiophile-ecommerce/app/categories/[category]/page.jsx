import {notFound} from "next/navigation";
// Data
import data from "../../../data/index.json";
// Components
import CategoryPageTitle from "@/components/category-page-title";
import CategoryPageProduct from "@/components/category-page-product";
import Categories from "@/components/categories-menu";
import StoreDescription from "@/components/store-description";

export async function generateMetadata({params}) {
  const {category} = await params;
  return {
    title: category && category[0].toUpperCase() + category.slice(1),
  };
}

export default async function Category({params}) {
  const {category} = await params;
  const filterProducts = data.filter((product) => product.category == category.toLowerCase());

  if (filterProducts.length < 1) {
    notFound();
  }

  return (
    <>
      <CategoryPageTitle title={category} />
      <main>
        {filterProducts.reverse().map((product, index) => (
          <CategoryPageProduct product={product} key={index} />
        ))}
      </main>
      <Categories />
      <StoreDescription />
    </>
  );
}
