import { useEffect } from "react";
// import { useAppDispatch, useAppSelector } from "../../../app/store";
// import { calculateTotalAmount } from "../../../feature/cart/cartSlice";
import CartFooter from "../../layouts/CartFooter";
import CartItem from "../../components/molecules/Cart/CartItem";
// import CartProductsCount from "../../components/atoms/CartDetails/CartProductsCount";
// import BackToHomeButton from "../../components/atoms/cart/BackToHomeButton";
import CartHeading from "@/ui-core/components/atoms/Cart/CartHeading";
import CartTableHeading from "@/ui-core/components/atoms/Cart/CartTableHeading";
import { useCartContext } from "@/context/CartContext";

function CartDetails() {
    // const {calculateTotalAmount, totalAmount} = useCartContext();
    // console.log("Total Amount : ", totalAmount);
    
//   const dispatch = useAppDispatch();
//   const productState = useAppSelector((state: any) => state?.cart?.cartItems);

//   const cartTotalAmount = useAppSelector(
//     (state: any) => state?.cart?.cartTotalAmount
//   );

  // useEffect(() => {
  //   calculateTotalAmount();
  // }, []);

  return (
    <div className="font-poppins">
      <div className="container mx-auto mt-2 px-60">
        <div className="flex justify-between">
          <div className="w-[72%]">
            <CartHeading {...{ title: "Cart" }} />
            <div className="h-64 overflow-scroll overflow-x-hidden scroll-auto">
              <div className="flex">
                <CartTableHeading
                  {...{ width: "60", title: "Product Details" }}
                />
                <CartTableHeading {...{ width: "20", title: "Quantity" }} />
                <CartTableHeading {...{ width: "20", title: "Price" }} />
              </div>

              {/* Cart Item */}
              {/* {productState.map((item: any, index: number) => {
                return <CartItem {...{ item: item }} />;
              })} */}
            </div>
          </div>
          <div className="w-[20%]">
            <CartHeading {...{ title: "Order Summary" }} />
            <div className="flex justify-between">
              <CartTableHeading {...{ title: "ITEMS" }} />
              {/* <CartProductsCount {...{ productState: productState }} /> */}
            </div>
            <div className="flex justify-between">
              <h4 className="text-sm font-bold">Total Amount</h4>
              <h4 className="text-sm font-bold text-red-800">
                {/* {totalAmount.toFixed(2)} */}
              </h4>
            </div>
          </div>
        </div>
        {/* <BackToHomeButton /> */}
      </div>
      <CartFooter />
    </div>
  );
}

export default CartDetails;
