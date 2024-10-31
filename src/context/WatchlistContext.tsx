"use client";

import { ProductType } from "@/hooks/types/ProductType";
import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

const WatchlistContext = createContext<any>(undefined);

export const WatchlistWrapper = ({ children }: { children: React.ReactNode }) => {
    let [watchlist, setWatchlist] = useState([]);

    useEffect(() => {        
        setWatchlistToState();        
      }, []);
    
    //   Function : Watchlist set to state of Local Storage
      const setWatchlistToState = () => {
          
        setWatchlist(
            localStorage.getItem("watchlistItems")
              ? JSON.parse(localStorage.getItem("watchlistItems") as string)
              : []
          );            

      };

      const addItemWatchlist = async (product: ProductType) => {        
        let existsItemIndex = watchlist.findIndex(
          (item: any) => item.id === product?.id
        );
        if (existsItemIndex >= 0) {
          toast.error("This product already exists in the wishlist");
        } else {
          let buildItem = { ...product };
          watchlist?.push(buildItem);
          let stringArray = JSON.stringify(watchlist);
          localStorage.setItem("watchlistItems", stringArray);
          setWatchlistToState();
          toast.success("Added to Watchlist");
        }
      };

      const removeItemFromWatchlist = async (product: ProductType) => {
        let filteredItems = watchlist?.filter((item: any) => item?.id !== product?.id);
        watchlist = filteredItems;
        let stringArray = JSON.stringify(watchlist);
        localStorage.setItem("watchlistItems", stringArray);
        setWatchlistToState();
        toast.success("Removed from Watchlist");
      };

      const clearWatchlist = async (product: ProductType) => {
        watchlist = [];
        let stringArray = JSON.stringify(watchlist);
        localStorage.setItem("watchlistItems", stringArray);
        setWatchlistToState();
        toast.success("Watchlist Cleared");
      };

      return(
        <WatchlistContext.Provider value={{watchlist, addItemWatchlist, removeItemFromWatchlist, clearWatchlist}}>
            {children}
        </WatchlistContext.Provider>
      )
}

export function useWatchlistContext() {
    return useContext(WatchlistContext);
}