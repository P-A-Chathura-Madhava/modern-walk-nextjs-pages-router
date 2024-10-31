import React from "react";
// Drawer Component
import { Button } from "../../../components/ui/button";
import {
  DrawerClose,
  DrawerContent,
  DrawerFooter,
} from "../../../components/ui/drawer";

// React Icons
import { IoMdArrowRoundBack } from "react-icons/io";
import CartDetails from "@/ui-core/templates/pages/CartDetails";
import CartDetailsPage from "@/ui-core/templates/pages/CartDetailsPage";

function CartDrawer() {
  return (
    <DrawerContent>
      <div className="bg-white">
        <DrawerFooter>
          <DrawerClose asChild>
            <Button
              variant="outline"
              className="flex items-center justify-center gap-2 font-bold font-poppins text-btn"
            >
              <IoMdArrowRoundBack /> Return
            </Button>
          </DrawerClose>
        </DrawerFooter>
      </div>
      {/* <CartDetails /> */}
      <CartDetailsPage />
    </DrawerContent>
  );
}

export default CartDrawer;
