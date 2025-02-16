"use client";
import { useDispatch } from "react-redux";
import {
  addToCart,
  deleteFromCart,
  removeFromCart,
} from "@/app/_RTX/slices/cartSlice";
import { TCart } from "@/app/_RTX/slices/cartSlice";
import Image from "next/image";
import styled from "styled-components";
import { AppDispatch } from "@/app/_RTX/store/store";
import { MdDeleteForever } from "react-icons/md";
import Swal from "sweetalert2";
const CartCard = ({ item }: { item: TCart }) => {
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
  return (
    <StyledWrapper>
      <div className="card ">
        <div className="relative card-image">
          <Image
            fill
            style={{
              objectFit: "fill",
            }}
            sizes="100%"
            src={item.product_main_image_url}
            alt="ProductsImage"
          ></Image>
        </div>
        <div className="card-content">
          <div className="category line-clamp-1">
            {item.second_level_category_name}
          </div>
          <div className="heading line-clamp-3">
            {item.product_title}
            <div className="author"></div>
          </div>
          <div className="flex justify-between items-center">
            <div className="text-sm">
              Price : {item.target_sale_price}
              <span className="text-[8px]"> {item.sale_price_currency}</span>
            </div>
          </div>
          <div className="w-full mt-2 justify-center flex items-center gap-1">
            <button
              onClick={() => {
                if (
                  item.quantity !== undefined &&
                  item.quantity < 5 &&
                  item.quantity > 0
                ) {
                  Toast.fire({
                    icon: "success",
                    title: "Success,Added To Cart",
                  });
                } else {
                  Toast.fire({
                    icon: "error",
                    title: "Failed, Max quantity is 5",
                  });
                  return;
                }
                dispatch(addToCart(item));
              }}
              className="text-sm rounded-md  px-3 py-1 hover:scale-105 duration-200 bg-neutral-500 text-white font-bold"
            >
              +
            </button>
            <div className="text-sm w-[30px] h-[30px] flex items-center justify-center bg-gray-200">
              {item.quantity}
            </div>
            <button
              onClick={() => {
                if (
                  item.quantity !== undefined &&
                  item.quantity < 6 &&
                  item.quantity > 1
                ) {
                  Toast.fire({
                    icon: "success",
                    title: `Success,Quantity Decreased to ${item.quantity - 1}`,
                  });
                } else {
                  Toast.fire({
                    icon: "error",
                    title: "This product deleted from cart.",
                  });
                }
                dispatch(removeFromCart(item));
              }}
              className="text-sm  rounded-md  px-3 py-1 hover:scale-105 duration-200 bg-neutral-500 text-white font-bold"
            >
              -
            </button>
            <button
              onClick={() => {
                dispatch(deleteFromCart(item));
              }}
              className="text-2xl text-red-500 hover:-rotate-12 duration-200 p-2 bg-gray-100 shadow-sm rounded-full ml-4"
            >
              <MdDeleteForever />
            </button>
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .card {
    display: flex;
    align-items: center;
    width: 400px;
    background: white;
    padding: 0.4em;
    border-radius: 6px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  .card-image {
    background-color: rgba(0, 0, 0, 0.1);
    width: 200px;
    height: 150px;
    border-radius: 6px;
    flex-shrink: 0;
    margin-right: 10px;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }

  .card-image:hover {
    transform: scale(0.98);
    transition: transform 0.3s ease;
  }

  .card-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
  }

  .category {
    text-transform: uppercase;
    font-size: 0.7em;
    font-weight: 600;
    color: rgb(63, 121, 230);
    padding-bottom: 5px;
    text-align: left; /* Align text to the left */
  }

  .category:hover {
    cursor: pointer;
  }

  .heading {
    font-weight: 600;
    color: rgb(88, 87, 87);
    margin-bottom: 10px;
    text-align: left; /* Align text to the left */
  }

  .heading:hover {
    cursor: pointer;
  }

  .author {
    color: gray;
    font-weight: 400;
    font-size: 11px;
    text-align: left; /* Align text to the left */
  }
`;

export default CartCard;
