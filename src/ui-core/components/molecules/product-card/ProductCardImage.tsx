"use client";
import { useAuth } from "@clerk/nextjs";
import CartProductCardHeading from "../../atoms/Cart/CartProductCardHeading";
import CartProductCardImage from "../../atoms/Cart/CartProductCardImage";
import AddtoCartButton from "./AddtoCartButton";
import AddtoWatchlistButton from "./AddtoWatchlistButton";
import AddtoCartButtonSignIn from "./AddtoCartButtonSignIn";

function ProductCardImage({ ...props }) {
  const { isSignedIn } = useAuth();
  const { id, title, image, price, description, color } = props;

  const product: any = {
    id,
    title,
    image,
    price,
    description,
    color,
  };

  return (
    <div className="cardImageDiv font-poppins">
      <div className="overflow-hidden">
        <CartProductCardHeading {...{ title }} />
      </div>
      <div className="flex gap-2 justify-center items-center">
        <CartProductCardImage {...{ image }} />
        <div className="flex flex-col gap-4">
          {isSignedIn && <AddtoWatchlistButton {...{ product: product }} />}
          {isSignedIn === false ? (
            <AddtoCartButtonSignIn />
          ) : (
            <AddtoCartButton {...{ product: product }} />
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductCardImage;
