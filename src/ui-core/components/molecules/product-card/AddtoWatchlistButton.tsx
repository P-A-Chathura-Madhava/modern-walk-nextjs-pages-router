import { useWatchlistContext } from "@/context/WatchlistContext";
import { FaRegBookmark } from "react-icons/fa6";

function AddtoWatchlistButton({ ...props }) {
  const { addItemWatchlist } = useWatchlistContext();
  const { product } = props;

  // Add to Watch list
  const addToItemWatchlist = () => {
    addItemWatchlist(product);
  };

  return (
    <div
      className="flex items-center justify-center text-xl w-icon-w-normal h-icon-h-normal rounded-icon hover:bg-slate-200"
      onClick={addToItemWatchlist}
    >
      <FaRegBookmark />
    </div>
  );
}

export default AddtoWatchlistButton;
