import { Label } from "@/components/ui/label";

function CartItemPrice({ ...props }) {
  const { price } = props;

  return (
    <Label className="font-bold text-blue-700 text-md" htmlFor="price">
      {price}
    </Label>
  );
}

export default CartItemPrice;
