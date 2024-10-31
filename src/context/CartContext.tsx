"use client";

import { ProductType } from "@/hooks/types/ProductType";
import React, { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

// type Context = {hello: string}

const CartContext = createContext<any>(undefined);

export const CartWrapper = ({ children }: { children: React.ReactNode }) => {
  let [cart, setCart] = useState([]);
  let [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setCartToState();
  }, []);

  //   Function : Cart set to state of Local Storage
  const setCartToState = () => {
    setCart(
      localStorage.getItem("cartItems")
        ? JSON.parse(localStorage.getItem("cartItems") as string)
        : []
    );
  };

  const addItemToCart = async (product: ProductType) => {
    let existsItemIndex = cart.findIndex(
      (item: any) => item.id === product?.id
    );
    if (existsItemIndex >= 0) {
      cart[existsItemIndex].qty += 1;
    } else {
      let buildItem = { ...product };
      cart?.push(buildItem);
    }
    let stringArray = JSON.stringify(cart);
    localStorage.setItem("cartItems", stringArray);
    calculateTotalAmount();
    setCartToState();
    toast.success("Added to Cart");
  };

  const removeItemFromCart = async (product: ProductType) => {
    let filteredItems = cart?.filter((item: any) => item?.id !== product?.id);
    cart = filteredItems;
    let stringArray = JSON.stringify(cart);
    localStorage.setItem("cartItems", stringArray);
    calculateTotalAmount();
    setCartToState();
    toast.success("Removed from Cart");
  };

  const incrementQty = async (product: ProductType) => {
    let existsItemIndex = cart?.findIndex(
      (item: any) => item.id === product?.id
    );
    if (existsItemIndex >= 0) {
      cart[existsItemIndex].qty += 1;
      let stringArray = JSON.stringify(cart);
      localStorage.setItem("cartItems", stringArray);
    }
    calculateTotalAmount();
    setCartToState();
  };

  const decrementQty = async (product: ProductType) => {
    let existsItemIndex = cart?.findIndex(
      (item: any) => item.id === product?.id
    );
    if (existsItemIndex >= 0) {
      cart[existsItemIndex].qty -= 1;
      let stringArray = JSON.stringify(cart);
      localStorage.setItem("cartItems", stringArray);
    }
    if (cart[existsItemIndex].qty === 0) {
      cart.splice(existsItemIndex, 1);
    }
    setCartToState();
    calculateTotalAmount();
  };

  const clearCart = async () => {
    cart = [];
    let stringArray = JSON.stringify(cart);
    localStorage.setItem("cartItems", stringArray);
    setCartToState();
  };

  const calculateTotalAmount = async () => {
    const subTotal = cart?.reduce(
      (acc: any, item: any) => acc + item?.price * item.qty,
      0
    );
    setTotalAmount(Number(subTotal));
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        addItemToCart,
        removeItemFromCart,
        incrementQty,
        decrementQty,
        clearCart,
        calculateTotalAmount,
        totalAmount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export function useCartContext() {
  return useContext(CartContext);
}
