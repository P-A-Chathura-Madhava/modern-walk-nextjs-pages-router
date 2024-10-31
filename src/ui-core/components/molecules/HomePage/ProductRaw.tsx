import { ProductProp } from "../../types/ProductProp";
import ProductCard from "../product-card/ProductCard";

function ProductRaw({ ...props }) {
  const { productState } = props;

  return (
    <div className="flex justify-between align-middle font-poppins">
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

export default ProductRaw;