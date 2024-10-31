import { Label } from "@/components/ui/label";

function CartItemQty({ ...props }) {
  const { item } = props;

  return (
    <Label className="flex items-center justify-center p-2 border rounded-lg border-slate-600 h-icon-h-normal w-icon-w-normal">
      {item?.qty}
    </Label>
  );
}

export default CartItemQty;
