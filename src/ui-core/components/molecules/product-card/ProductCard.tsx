import ProductCardImage from "./ProductCardImage";
import ProductDetail from "./ProductDetail";

function ProductCard({ ...props }) {
  const { id, title, image, price, description, category } = props;

  return (
    <div
      className={`w-[170px] h-[224px] rounded-2xl shadow-black shadow-3xl cursor-pointer hover:shadow-4xl transition-all duration-300 pt-2 font-poppins`}
    >
      <ProductCardImage {...{ id, title, image, price, description }} />
      <ProductDetail {...{ price, description, category }} />
    </div>
  );
}

export default ProductCard;
