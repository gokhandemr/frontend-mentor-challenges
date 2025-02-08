import {notFound} from "next/navigation";
// Data
import data from "@/data/index.json";
// Components
import GoBackButton from "@/components/go-back-button";
import ProductPageMain from "@/components/product-page-main";
import ProductPageDetails from "@/components/product-page-details";
import ProductPageGallery from "@/components/product-page-gallery";
import ProductPageOthers from "@/components/product-page-others";
import CategoriesMenu from "@/components/categories-menu";
import StoreDescription from "@/components/store-description";

export async function generateMetadata({params}) {
  const {product} = await params;
  const findProduct = await data.find((item) => item.slug == product && item);

  return {
    title: findProduct ? findProduct.name : "Product Not Found",
    description: findProduct ? findProduct.description : "Product Not Found",
  };
}

export default async function ProductPage({params}) {
  const {product} = await params;
  const filterProduct = await data.filter((item) => item.slug == product && item)[0];

  if (!filterProduct) {
    notFound();
  }

  return (
    <>
      <GoBackButton />
      <ProductPageMain name={filterProduct.name} image={filterProduct.image} isNew={filterProduct.new} description={filterProduct.description} price={filterProduct.price} slug={filterProduct.slug} />
      <ProductPageDetails features={filterProduct.features} includes={filterProduct.includes} />
      <ProductPageGallery gallery={filterProduct.gallery} name={filterProduct.name} />
      <ProductPageOthers others={filterProduct.others} />
      <CategoriesMenu />
      <StoreDescription />
    </>
  );
}
