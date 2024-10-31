import { FaPlus } from "react-icons/fa6";
import { Button } from "../../../../components/ui/button";
import { useCartContext } from "@/context/CartContext";

function CartIncrementQtyButton({ ...props }) {
  const { incrementQty } = useCartContext();
  const { item } = props;

  const incrementQtyHandler = (product: any) => {
    incrementQty(product);
  };

  return (
    <Button
      className="flex items-center justify-center cursor-pointer h-icon-h-normal w-icon-w-normal hover:bg-custom-main rounded-icon py-icon-y px-icon-x bg-custom-background-white"
      onClick={() => {
        incrementQtyHandler(item);
      }}
    >
      <FaPlus className="text-black text-icon-md" />
    </Button>
  );
}

export default CartIncrementQtyButton;
