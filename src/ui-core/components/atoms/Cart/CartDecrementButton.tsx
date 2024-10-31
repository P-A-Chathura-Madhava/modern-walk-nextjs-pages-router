import { FaMinus } from "react-icons/fa6";
import { Button } from "../../../../components/ui/button";
import { useCartContext } from "@/context/CartContext";

function CartDecrementButton({ ...props }) {
  const { decrementQty } = useCartContext();
  const { item } = props;

  const decrementQtyHandler = (product: any) => {
    decrementQty(product);
  };

  return (
    <Button
      className="flex items-center justify-center cursor-pointer h-icon-h-normal w-icon-w-normal hover:bg-custom-main rounded-icon py-icon-y px-icon-x bg-custom-background-white"
      onClick={() => {
        decrementQtyHandler(item);
      }}
    >
      <FaMinus className="text-black text-icon-md" />
    </Button>
  );
}

export default CartDecrementButton;
