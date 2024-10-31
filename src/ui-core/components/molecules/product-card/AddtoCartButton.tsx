import { useCartContext } from "@/context/CartContext";
import { FaShoppingCart } from "react-icons/fa";

function AddtoCartButton({ ...props }) {
  const { addItemToCart } = useCartContext();
  const { product } = props;

  // Add to Cart
  const addToCartHandler = () => {
    product.qty = 1;
    addItemToCart(product);
  };

  return (
    <div
      className="flex items-center justify-center text-xl w-icon-w-normal h-icon-h-normal rounded-icon hover:bg-slate-200"
      onClick={addToCartHandler}
    >
      <FaShoppingCart />
    </div>
  );
}

export default AddtoCartButton;
