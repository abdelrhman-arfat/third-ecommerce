import React from "react";
import { LuTextSearch } from "react-icons/lu";

const InputSearch = () => {
  return (
    <div className="relative flex items-center group w-full sm:w-fit">
      <label className="absolute left-2 top-1/2 -translate-y-1/2 group-focus-within:top-0 group-focus-within:text-sm group-focus-within:text-hero-500 bg-white px-2 transition-all">
        Search
      </label>

      <input
        type="text"
        className="border-2 flex-grow xl:flex-grow-0 p-2  sm:min-w-fit md:min-w-[300px] xl:min-w-[450px] focus:outline-none rounded-md"
      />

      <button className="absolute top-1/2 right-0.5 -translate-y-1/2 bg-neutral-100 h-10 rounded-md w-10 flex items-center justify-center">
        <LuTextSearch />
      </button>
    </div>
  );
};

export default InputSearch;
