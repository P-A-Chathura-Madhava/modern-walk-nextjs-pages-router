import { ProductType } from "@/hooks/types/ProductType";
import axios, { AxiosResponse } from "axios";
import { toast } from "react-toastify";

const URL1: string = "https://fakestoreapi.com/products/category/";
const URL2: string = "https://fakestoreapi.com/products/";

export const getMensProducts = async (): Promise<ProductType[]> => {
  const loadingState = toast.loading("Data Loading", {position:"top-center"});
  const response: AxiosResponse<ProductType[]> = await axios.get<ProductType[]>(
    `${URL1}men's%20clothing`
  );
  toast.update(loadingState, {render: "Data Successfully Loaded", type: "success", isLoading: false, autoClose: 2000, position:"top-center"});
  return response.data;
};

export const getWomensProducts = async (): Promise<ProductType[]> => {
  const loadingState = toast.loading("Data Loading", {position:"top-center"});
  const response: AxiosResponse<ProductType[]> = await axios.get<ProductType[]>(
    `${URL1}women's%20clothing`
  );
  toast.update(loadingState, {render: "Data Successfully Loaded", type: "success", isLoading: false, autoClose: 2000, position:"top-center"});
  return response.data;
};

export const getMixedProducts = async (): Promise<ProductType[]> => {
  const loadingState = toast.loading("Data Loading", {position:"top-center"});
  const mens: AxiosResponse<ProductType[]> = await axios.get<ProductType[]>(
    `${URL1}men's%20clothing?limit=2`
  );
  const mensData = mens.data;
  const womens: AxiosResponse<ProductType[]> = await axios.get<ProductType[]>(
    `${URL1}women's%20clothing?limit=2`
  );
  const womensData: ProductType[] = womens.data;
  const data: ProductType[] = mensData.concat(womensData);
  toast.update(loadingState, {render: "Data Successfully Loaded", type: "success", isLoading: false, autoClose: 2000, position:"top-center"});
  return data;
};
