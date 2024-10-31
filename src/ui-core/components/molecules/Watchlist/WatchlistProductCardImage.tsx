import CartProductCardHeading from "../../atoms/Cart/CartProductCardHeading";
import CartProductCardImage from "../../atoms/Cart/CartProductCardImage";
import RemoveFromWatchlistButton from "../../atoms/Watchlist/RemoveFromWatchlistButton";

function WatchlistProductCardImage({ ...props }) {
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
      <div className="flex justify-center items-center gap-2">
        <CartProductCardImage {...{ image }} />
        <div className="flex flex-col">
          <RemoveFromWatchlistButton {...{ product: product }} />
        </div>
      </div>
    </div>
  );
}

export default WatchlistProductCardImage;
