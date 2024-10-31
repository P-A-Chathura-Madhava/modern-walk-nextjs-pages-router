import useGetMixedProducts from "@/hooks/useGetMixedProducts";
import HomeSection from "@/ui-core/layouts/HomeSection";

function HomePage() {
  const products = useGetMixedProducts();
  const productState = products.data;

  return <HomeSection {...{ productState }} />;
}

export default HomePage;
