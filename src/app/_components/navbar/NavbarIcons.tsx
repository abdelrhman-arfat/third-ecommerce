"use client";
import { useState } from "react";
import { CiShoppingCart } from "react-icons/ci";
import CartContainer from "./CartContainer";
const NavbarIcons = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="relative">
      <CiShoppingCart
        onClick={() => {
          setIsOpen((p) => !p);
        }}
        className={`hidden md:flex hover:text-green-600  ${
          isOpen && "text-green-600 rotate-180 scale-105"
        } duration-300 cursor-pointer md:text-3xl  `}
      />
      <CartContainer isOpen={isOpen} />
    </div>
  );
};

export default NavbarIcons;
