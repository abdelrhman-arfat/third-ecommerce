"use client";
import { RootState } from "@/app/_RTX/store/store";
import { useSelector } from "react-redux";
import CartCard from "./CartCard";

import SorryInCartSlider from "../sections/common/SorryInCartSlider";
const CartContainer = ({ isOpen }: { isOpen: boolean }) => {
  const cart = useSelector((s: RootState) => s.cart);
  return (
    <div
      className="absolute bg-neutral-200 shadow-md duration-200 w-[440px] pr-1 text-center overflow-y-auto rounded-md top-14 z-50 right-0"
      style={{
        height: isOpen ? "400px" : "0",
      }}
    >
      <div className="h-full py-5 flex flex-col items-center gap-3  w-[90%] mx-auto ">
        {cart.length > 0 ? (
          cart.map((cart, index) => <CartCard key={index} item={cart} />)
        ) : (
          <SorryInCartSlider to="#products" />
        )}
      </div>
    </div>
  );
};

export default CartContainer;
