import { useQuery } from "@tanstack/react-query";
import { ProductType } from "./types/ProductType";
import { getWomensProducts } from "@/services/productService";

const useGetWomensProducts = () => {
  return useQuery<ProductType[]>({
    queryKey: ["womensProducts"],
    queryFn: () => getWomensProducts(),
  });
};

export default useGetWomensProducts;
