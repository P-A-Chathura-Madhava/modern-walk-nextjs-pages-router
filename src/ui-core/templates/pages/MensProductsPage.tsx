import useGetMensProducts from "@/hooks/useGetMensProducts";
import MensProductsSection from "@/ui-core/layouts/MensProductsSection";

function MensProductsPage() {
  const products = useGetMensProducts();
  const productState = products.data;

  return <MensProductsSection {...{ productState }} />;
}

export default MensProductsPage;
