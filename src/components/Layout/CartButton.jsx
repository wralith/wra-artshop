import React from "react";
import { HiOutlineShoppingCart } from "react-icons/hi";

//TODO Display only icon and popover when hover

export const CartButton = () => {
  return (
    <button className="bg-gray-800 rounded-full p-2 hover:animate-pulse flex flex-row items-center gap-2">
      <span className="text-3xl mx-2">
        <HiOutlineShoppingCart />
      </span>
      <span>Your Cart</span>
      <span className="w-8 rounded-full bg-orange-400 z-5 mx-2">
        3
      </span>
    </button>
  );
};
