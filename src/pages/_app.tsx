// import { GlobalProvider } from "@/providers/GlobalProvider";
import { CartWrapper } from "@/context/CartContext";
import {
  useWatchlistContext,
  WatchlistWrapper,
} from "@/context/WatchlistContext";
import TanstackProvider from "@/providers/TanstackProvider";
import "@/styles/globals.css";
import Header from "@/ui-core/components/molecules/Header";
import type { AppProps } from "next/app";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import Link from "next/link";
import CompanyLogo from "@/ui-core/components/atoms/Navbar/CompanyLogo";
import { IoBookmarksOutline } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";
import SignIn from "@/ui-core/components/molecules/SignIn";
// import { DrawerTrigger } from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { Dialog } from "@radix-ui/react-dialog";

// Drawer
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import CartDrawer from "@/ui-core/components/organisms/CartDrawer";

// console.log("App Started");
// Import your publishable key
const PUBLISHABLE_KEY: string | undefined =
  process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY;
// console.log("Publishable Key : ", PUBLISHABLE_KEY);

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
              {/* Header */}
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
                    {/* <Link
                      className="flex items-center justify-center gap-1 p-2 transition-all duration-300 rounded-icon hover:bg-slate-200"
                      href={"/cart"}
                    >
                      <FaShoppingCart className="text-xl" />
                    </Link> */}
                            <Drawer>
                    <DrawerTrigger asChild>
            <Button
              className="flex items-center justify-center gap-1 p-2 transition-all duration-300 rounded-icon hover:bg-slate-200"
            >
              <FaShoppingCart className="text-xl" />
            </Button>
          </DrawerTrigger>
                      {/* <DrawerTrigger>Open</DrawerTrigger> */}
                      <CartDrawer />
                      {/* <DrawerContent>
                        <DrawerHeader>
                          <DrawerTitle>Are you absolutely sure?</DrawerTitle>
                          <DrawerDescription>
                            This action cannot be undone.
                          </DrawerDescription>
                        </DrawerHeader>
                        <DrawerFooter>
                          <Button>Submit</Button>
                          <DrawerClose>
                            <Button variant="outline">Cancel</Button>
                          </DrawerClose>
                        </DrawerFooter>
                      </DrawerContent> */}
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
