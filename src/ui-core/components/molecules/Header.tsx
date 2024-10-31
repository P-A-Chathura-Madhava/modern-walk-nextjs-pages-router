"use client";
// import { Link } from "react-router-dom";
import { SignInButton, UserButton, useUser } from "@clerk/clerk-react";
import { IoBookmarksOutline } from "react-icons/io5";
// import { useAppSelector } from "../../../app/store";
import { FaShoppingCart } from "react-icons/fa";

// Shadcn Drawer Component
import { Button } from "../../../components/ui/button";
import CompanyLogo from "../atoms/Navbar/CompanyLogo";
import Link from "next/link";
import { DrawerTrigger } from "@/components/ui/drawer";
import { useAuth } from "@clerk/nextjs";
// import { auth } from "@clerk/nextjs/server";

function Header() {
  const data = useAuth();
  console.log(data);
  
    // const { isSignedIn } = useUser();
    // const detail = auth();

    // const { user } = useUser();
    // console.log(user);
    
  //   const watchlistState = useAppSelector(
  //     (state: any) => state.watchList.watchlistItems
  //   );
  //   const cartState = useAppSelector(
  //     (state: any) => state.cart?.cartItems.length
  //   );

  return (
    <div className="flex justify-between px-4 border-b-4 font-poppins">
      <Link href={"/"}>
        <CompanyLogo />
      </Link>
      <div className="flex items-center">
        <div className="flex gap-2 pr-4">
          {/* <span>{user?.firstName}</span> */}
          {/* <UserButton /> */}
        </div>
        {/* {!isSignedIn && (
          <SignInButton>
            <button className="w-20 h-full p-2 font-bold rounded-md hover:bg-slate-400">
              Sign In
            </button>
          </SignInButton>
        )} */}
        {/* {isSignedIn && (
          <div>
            <Link
              className="flex items-center justify-center gap-1 p-2 transition-all duration-300 rounded-icon hover:bg-slate-200"
              to={"/watchlist"}
            >
              <IoBookmarksOutline className="text-xl" />({watchlistState.length}
              )
            </Link>
          </div>
        )} */}
        {/* <div>
          <Link
            className="flex items-center justify-center gap-1 p-2 transition-all duration-300 rounded-icon hover:bg-slate-200"
            to={"/cart"}
          >
            <FaShoppingCart className="text-xl" />({cartState})
          </Link>
          <DrawerTrigger asChild>
            <Button
              className="flex items-center justify-center gap-1 p-2 transition-all duration-300 rounded-icon hover:bg-slate-200"
              variant="outline"
            >
              <FaShoppingCart className="text-xl" />
              ({cartState})
            </Button>
          </DrawerTrigger>
        </div> */}
      </div>
    </div>
  );
}

export default Header;
