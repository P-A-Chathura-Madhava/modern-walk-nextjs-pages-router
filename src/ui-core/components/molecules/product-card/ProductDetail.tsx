import ProductCardDescription from "../../atoms/ProductCard/ProductCardDescription";
import ProductCardPrice from "../../atoms/ProductCard/ProductCardPrice";

function ProductDetail({ ...props }) {
  const { price, description, category } = props;

  return (
    <div
      className={`rounded-2xl h-[80px] ${
        category === "women's clothing" ? "bg-[#ff5d84]" : "bg-[#2bd9af]"
      } px-4 font-poppins`}
    >
      <ProductCardPrice {...{ price }} />
      <ProductCardDescription {...{ description }} />
    </div>
  );
}

export default ProductDetail;
