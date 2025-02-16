import React from "react";
import { RiStarSFill } from "react-icons/ri";

const CardSkeleton = () => {
  return (
    <div className="relative min-w-[200px]  min-h-[300px]">
      <div className="w-full h-[250px] bg-gray-500 animate-pulse"></div>
      <h1 className="w-[97%] bg-gray-500 animate-pulse my-1 py-3"></h1>
      <h1 className="w-[90%] bg-gray-500 animate-pulse my-1 py-3"></h1>
      <h1 className="w-[80%] bg-gray-500 animate-pulse my-1 py-3"></h1>
      <div className="flex w-full justify-between gap-3">
        <p className="w-1/3 bg-gray-500 animate-pulse my-1 py-3"></p>
        <div className="flex gap-0.5 bg-white px-2 rounded-md py-1 justify-around">
          {Array.from({ length: 5 }).map((_, index) => {
            return (
              <RiStarSFill
                className="text-gray-600 animate-pulse text-sm"
                key={index}
              />
            );
          })}
        </div>
      </div>

      <div className="flex justify-between">
        <h1 className="w-[30%] rounded-md bg-gray-500 animate-pulse my-1 py-3"></h1>
        <h1 className="w-[30%] rounded-md bg-gray-500 animate-pulse my-1 py-3"></h1>
      </div>
    </div>
  );
};

export default CardSkeleton;
