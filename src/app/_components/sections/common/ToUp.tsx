"use client";
import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

const ToUp = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <button
      style={{
        display: isVisible ? "flex" : "none",
      }}
      onClick={() => {
        window.scrollTo({ top: 3, behavior: "smooth" });
      }}
      className="z-50 flex items-center justify-center bg-secon rounded-full fixed bottom-5 right-2 w-[40px] h-[40px]"
    >
      <FaArrowUp className="text-2xl text-white" />
    </button>
  );
};

export default ToUp;
