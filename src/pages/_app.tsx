import { CartWrapper } from "@/context/CartContext";
import { WatchlistWrapper } from "@/context/WatchlistContext";
import TanstackProvider from "@/providers/TanstackProvider";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ClerkProvider, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import CompanyLogo from "@/ui-core/components/atoms/Navbar/CompanyLogo";
import { IoBookmarksOutline } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";
import SignIn from "@/ui-core/components/atoms/SignIn";
import { Button } from "@/components/ui/button";

// Drawer
import { Drawer, DrawerTrigger } from "@/components/ui/drawer";
import CartDrawer from "@/ui-core/components/organisms/CartDrawer";

const PUBLISHABLE_KEY: string | undefined =
  process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
        <CartWrapper>
          <WatchlistWrapper>
            <TanstackProvider>
              <header className="flex justify-between px-4 border-b-4 font-poppins">
                <Link href={"/"}>
                  <CompanyLogo />
                </Link>
                <div className="flex items-center">
                  <div className="flex gap-2 pr-4">
                    <UserButton />
                  </div>
                  <SignIn />
                  <Link
                    className="flex items-center justify-center gap-1 p-2 transition-all duration-300 rounded-icon hover:bg-slate-200"
                    href={"/watchlist"}
                  >
                    <IoBookmarksOutline className="text-xl" />
                  </Link>
                  <div>
                    <Drawer>
                      <DrawerTrigger asChild>
                        <Button className="flex items-center justify-center gap-1 p-2 transition-all duration-300 rounded-icon hover:bg-slate-200">
                          <FaShoppingCart className="text-xl" />
                        </Button>
                      </DrawerTrigger>
                      <CartDrawer />
                    </Drawer>
                  </div>
                </div>
              </header>

              <Component {...pageProps} />
            </TanstackProvider>
          </WatchlistWrapper>
        </CartWrapper>
      </ClerkProvider>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}
