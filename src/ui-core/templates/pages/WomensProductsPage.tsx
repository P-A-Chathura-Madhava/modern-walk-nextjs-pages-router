import useGetWomensProducts from "@/hooks/useGetWomensProducts";
import WomensProductsSection from "@/ui-core/layouts/WomensProductsSection";

function WomensProductsPage() {
  const products = useGetWomensProducts();
  const productState = products.data;

  return <WomensProductsSection {...{ productState }} />;
}

export default WomensProductsPage;
