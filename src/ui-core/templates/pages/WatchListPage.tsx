// "use client";
// import { useAppSelector } from "../../../app/store";
import WishlistProducts from "@/ui-core/components/molecules/Watchlist/WatchlistProducts";
import ClearWatchlistButton from "../../components/atoms/Watchlist/ClearWatchlistButton";

import { useWatchlistContext } from "@/context/WatchlistContext";

function WatchlistPage() {
  const {watchlist} = useWatchlistContext();
  const buttonState = watchlist.length !== 0;
  
  // console.log(watchlist);
  
//   const productState = useAppSelector(
//     (state: any) => state.watchList.watchlistItems
//   );

  return (
    <div className="container mx-auto mt-2 px-60 font-poppins">
      <div className="flex justify-between">
        <h2 className="text-xl font-bold">Watch List</h2>
        {buttonState && 
        <ClearWatchlistButton />
        }
      </div>
      <WishlistProducts {...{ watchlist }} />
    </div>
  );
}

export default WatchlistPage;
