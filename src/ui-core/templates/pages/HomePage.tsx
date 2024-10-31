import { useCartContext } from "@/context/CartContext";
import useGetMixedProducts from "@/hooks/useGetMixedProducts";
import HomeSection from "@/ui-core/layouts/HomeSection";

function HomePage() {
  // const {cart} = useCartContext();
  // console.log("Context : ", cart);
  
  const products = useGetMixedProducts();
  const productState = products.data;
  
  // console.log(productState);
  

  return <HomeSection {...{ productState }} />;
}

export default HomePage;
