import { ProductProp } from "../types/ProductProp";
import ProductCard from "./product-card/ProductCard";

function Products({ ...props }) {
  const { productState } = props;

  return (
    <div className="grid grid-cols-4 gap-10 mt-4 gap-y-8 font-poppins">
      {productState &&
        productState?.map((item: ProductProp, index: number) => {
          return (
            <ProductCard
              key={index}
              id={item?.id}
              title={item?.title}
              image={item?.image}
              price={item?.price}
              description={item?.description}
              category={item?.category}
            />
          );
        })}
    </div>
  );
}

export default Products;
