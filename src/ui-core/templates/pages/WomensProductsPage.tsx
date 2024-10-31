// import { useUser } from "@clerk/clerk-react";
// import { useNavigate } from "react-router-dom";
import useGetWomensProducts from "@/hooks/useGetWomensProducts";
import WomensProductsSection from "@/ui-core/layouts/WomensProductsSection";

function WomensProductsPage() {
//   const { isSignedIn } = useUser();
//   const navigate = useNavigate();

  const products = useGetWomensProducts();
  const productState = products.data;

//   if (!isSignedIn) {
//     navigate("/signin");
//   }

  return <WomensProductsSection {...{ productState }} />;
}

export default WomensProductsPage;
