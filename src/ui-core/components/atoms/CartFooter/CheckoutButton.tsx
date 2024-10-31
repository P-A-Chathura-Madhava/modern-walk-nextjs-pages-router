import { Button } from "../../../../components/ui/button";

function CheckoutButton() {
  return (
    <Button className="bg-blue-700 rounded-btn pt-btn-t pb-btn-b px-btn-x h-btn-normal w-btn-normal disabled:bg-custom-primary-custom-inverse-hover hover:bg-white selection:bg-custom-primary-custom-selected hover:text-blue-700">
      <span className="font-btn text-btn">CHECKOUT</span>
    </Button>
  );
}

export default CheckoutButton;
