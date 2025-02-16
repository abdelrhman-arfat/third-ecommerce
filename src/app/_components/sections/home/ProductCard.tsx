"use client";
import { CiHeart } from "react-icons/ci";
import { TProducts } from "@/app/_RTX/types/TProducts";
import { useDispatch } from "react-redux";
import { addToCart } from "@/app/_RTX/slices/cartSlice";
import { AppDispatch } from "@/app/_RTX/store/store";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { getStars } from "@/app/func/getStars";
import Swal from "sweetalert2";
const ProductCard = ({ item }: { item: TProducts }) => {
  const Toast = Swal.mixin({
    toast: true,
    position: "top-start",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    },
  });

  const dispatch = useDispatch<AppDispatch>();
  const [isLoved, setIsLoved] = useState(false);
  const [number, setNumber] = useState(0);
  return (
    <div className="relative min-w-[200px] bg-neutral-100 rounded-md p-1 min-h-[300px]">
      {/* iamges */}
      <div className="relative p-1">
        <div className="absolute shadow-md top-0 left-0 w-[40px] flex items-cetner justify-center h-[40px] bg-hero-500 text-white px-1 py-2">
          {item.discount}
        </div>
        <button
          onClick={() => setIsLoved((p) => !p)}
          className={` rounded-full shadow-md  h-10 w-10 absolute p-2 top-1 right-1 flex items-center justify-center ${
            isLoved ? "bg-red-500 text-white " : "text-red-500 bg-red-100"
          }

          `}
        >
          <CiHeart className="text-2xl font-bold" />
        </button>
        <Image
          src={item.product_main_image_url}
          alt="product image"
          style={{ objectFit: "cover" }}
          width={200}
          height={300}
          className="h-[250px] rounded-xl flex-1 w-full"
        ></Image>
      </div>
      {/* iamges */}
      <div className=" px-4 py-3">
        <h1 className="line-clamp-3 py-1 my-1">{item.product_title}</h1>
        {/* Price & Rates*/}
        <div className="flex w-full gap-3 items-center justify-between">
          <p className=" sm:text-[11px] md:text-sm">
            Price : {item.sale_price}{" "}
            <span className="text-[8px]">{item.original_price_currency}</span>
          </p>
          {getStars(parseFloat(item.evaluate_rate))}
        </div>
        {/* Price & Rates*/}

        {/* Buttons & actions*/}
        <div className="w-full flex-col xl:flex-row flex gap-3 items-center justify-between my-4">
          <Link
            target="_blank"
            className="px-2 py-1 w-full xl:w-fit text-center  text-[16px] sm:text-[12px] md:text-sm bg-neutral-800 text-white hover:bg-neutral-700 duration-200 rounded-md"
            href={item.shop_url}
          >
            Buy Now
          </Link>
          <button
            className="buy-btn  w-full xl:w-fit text-[16px] sm:text-[12px] md:text-sm"
            onClick={() => {
              if (number < 5) {
                Toast.fire({
                  icon: "success",
                  title: "Success,Added To Cart",
                });
                setNumber((prev) => prev + 1);
              } else {
                Toast.fire({
                  icon: "error",
                  title: "Faild ,Max quantity is 5",
                });
              }
              dispatch(addToCart({ ...item, quantity: 1 }));
            }}
          >
            Add To Cart{" "}
            {number > 0 && (
              <span className="text-hero-400 ml-2 bg-white text-[10px] px-2 py-1 rounded-full">
                {number}
              </span>
            )}
          </button>
        </div>
        {/* Buttons & actions*/}
      </div>
    </div>
  );
};

export default ProductCard;
