"use client";
import { RootState } from "@/app/_RTX/store/store";
import { useSelector } from "react-redux";
import CartCard from "../../navbar/CartCard";
import SorryInCartSlider from "../common/SorryInCartSlider";

export const CartList = () => {
  const cart = useSelector((s: RootState) => s.cart);
    return (
    <div className="w-full grid grid-cols-1 xl:grid-cols-2 gap-4">
      {cart.length > 0 ? (
        cart.map((item, index) => <CartCard key={index} item={item} />)
      ) : (
        <h1>
          <SorryInCartSlider to={"/"} />
        </h1>
      )}
    </div>
  );
};
