import Link from "next/link";
import CategoriesCard from "./CategoriesCard";

function CategoriesRaw() {
  return (
    <div className="flex justify-between mt-3 align-middle font-poppins">
      <Link href={"/mens-products"}>
        <CategoriesCard clothType={"Men's Clothing"} color={"bg-[#2bd9af]"} />
      </Link>
      <Link href={"/womens-products"}>
        <CategoriesCard clothType={"Women's Clothing"} color={"bg-[#ff5d84]"} />
      </Link>
    </div>
  );
}

export default CategoriesRaw;
