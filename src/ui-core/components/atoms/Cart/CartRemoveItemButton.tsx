// import { useAppDispatch } from "../../../../app/store";
import { useCartContext } from "@/context/CartContext";
import { Button } from "../../../../components/ui/button";
// import { removeFromCart } from "../../../../feature/cart/cartSlice";

function CartRemoveItemButton({ ...props }) {
  const {removeItemFromCart} = useCartContext();
  const { item } = props;

//   const dispatch = useAppDispatch();

  const removeItemFromCartHandler = (product: any) => {
    removeItemFromCart(product);
  };

  return (
    <Button
      className="p-1 text-xs font-bold text-red-800 transition-all duration-300 bg-white border border-custom-danger-red rounded-btn cursor-pointer hover:bg-custom-danger-red h-[24px]"
      onClick={() => removeItemFromCartHandler(item)}
    >
      Remove
    </Button>
  );
}

export default CartRemoveItemButton;
