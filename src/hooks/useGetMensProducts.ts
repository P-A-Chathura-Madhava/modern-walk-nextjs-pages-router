import { useQuery } from "@tanstack/react-query";
import { getMensProducts } from "@/services/productService";
import { ProductType } from "./types/ProductType";

const useGetMensProducts = () => {
  return useQuery<ProductType[]>({
    queryKey: ["mensProducts"],
    queryFn: () => getMensProducts(),
  });
};

export default useGetMensProducts;
