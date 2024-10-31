import { useWatchlistContext } from "@/context/WatchlistContext";
import { CiBookmarkRemove } from "react-icons/ci";

function RemoveFromWatchlistButton({ ...props }) {
  const { removeItemFromWatchlist } = useWatchlistContext();
  const { product } = props;

  const removeFromWatchlist = () => {
    removeItemFromWatchlist(product);
  };

  return (
    <div
      className="flex items-center justify-center w-8 h-8 text-xl font-bold rounded-full hover:bg-slate-400"
      onClick={removeFromWatchlist}
    >
      <CiBookmarkRemove />
    </div>
  );
}

export default RemoveFromWatchlistButton;
