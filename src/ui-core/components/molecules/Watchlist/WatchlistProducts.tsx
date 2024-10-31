import { ProductProp } from "../../types/ProductProp";
import WatchlistProductCard from "./WatchlistProductCard";

function WatchlistProducts({ ...props }) {
  const { watchlist } = props;

  if (watchlist.length === 0) {
    return (
      <div className="flex items-center justify-center h-40 text-2xl font-bold font-poppins">
        <h2>Watchlist is Empty</h2>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-4 gap-10 mt-4 gap-y-8 font-poppins">
      {watchlist &&
        watchlist?.map((item: ProductProp, index: number) => {
          return (
            <WatchlistProductCard
              key={index}
              id={item?.id}
              title={item?.title}
              image={item?.image}
              price={item?.price}
              description={item?.description}
              color="bg-[#2bd9af]"
            />
          );
        })}
    </div>
  );
}

export default WatchlistProducts;
