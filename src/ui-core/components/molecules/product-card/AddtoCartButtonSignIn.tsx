import { useRouter } from "next/navigation";
import { FiShoppingCart } from "react-icons/fi";

function AddtoCartButtonSignIn() {
  const router = useRouter();

  return (
    <div
      className="flex items-center justify-center text-xl w-icon-w-normal h-icon-h-normal rounded-icon hover:bg-slate-200"
      onClick={() => router.push("/signin")}
    >
      <FiShoppingCart />
    </div>
  );
}

export default AddtoCartButtonSignIn;
