export type ProductType = {
  id: number | undefined;
  category: string | undefined;
  description: string | undefined;
  image: string | undefined;
  price: number | undefined;
  title: string | undefined;
  rating:
    | {
        count: number | undefined;
        rate: number | undefined;
      }
    | undefined;
};
