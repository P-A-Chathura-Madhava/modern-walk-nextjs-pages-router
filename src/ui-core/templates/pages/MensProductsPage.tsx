// import { useUser } from "@clerk/clerk-react";
// import { useNavigate } from "react-router-dom";
import useGetMensProducts from "@/hooks/useGetMensProducts";
import MensProductsSection from "@/ui-core/layouts/MensProductsSection";

function MensProductsPage() {
  const products = useGetMensProducts();
  const productState = products.data;

  // const { isSignedIn } = useUser();
  // const navigate = useNavigate();

  // if (!isSignedIn) {
  //   navigate("/signin");
  // }

  return <MensProductsSection {...{ productState }} />;
}

export default MensProductsPage;
