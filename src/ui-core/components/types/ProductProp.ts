export type ProductProp = {
  id: number;
  category: string | undefined;
  description: string | undefined;
  image: string | undefined;
  price: string | undefined;
  title: string | undefined;
  rating:
    | {
        count: number | undefined;
        rate: number | undefined;
      }
    | undefined;
};
