import ItemImage from "../../atoms/Cart/ItemImage";
import CartItemTitle from "../../atoms/Cart/CartItemTitle";
import CartItemDescription from "../../atoms/Cart/CartItemDescription";
import CartRemoveItemButton from "../../atoms/Cart/CartRemoveItemButton";
import CartItemQty from "../../atoms/Cart/CartItemQty";
import CartIncrementQtyButton from "../../atoms/Cart/CartIncrementQtyButton";
import CartDecrementButton from "../../atoms/Cart/CartDecrementButton";
import CartItemPrice from "../../atoms/Cart/CartItemPrice";

function CartItem({ ...props }) {
  const { item } = props;

  return (
    <div className="flex pt-4">
      {/* Product Details */}
      <div className="flex gap-6 w-[60%]">
        {/* Cart Item */}
        <ItemImage {...{ image: item.image }} />
        <div>
          <CartItemTitle {...{ title: item.title }} />
          <CartItemDescription {...{ description: item.description }} />
          <CartRemoveItemButton {...{ item: item }} />
        </div>
      </div>

      {/* Quantity */}
      <div className="w-[20%] flex justify-center items-center gap-2">
        <CartItemQty {...{ item: item }} />
        <CartIncrementQtyButton {...{ item: item }} />
        <CartDecrementButton {...{ item: item }} />
      </div>

      <div className="w-[20%]">
        <CartItemPrice {...{ price: item.price }} />
      </div>
    </div>
  );
}

export default CartItem;
