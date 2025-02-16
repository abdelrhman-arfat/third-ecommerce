"use client";

import ProductCard from "./ProductCard";
import { fetchProducts } from "@/app/_RTX/slices/productsSlice";
import { AppDispatch, RootState } from "@/app/_RTX/store/store";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CardSkeleton from "../common/CardSkeleton";
import Sorry from "../common/Sorry";
import AllCategories from "../common/AllCategories";
const ProductsList = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { products, loading } = useSelector((s: RootState) => s.products);
  const cat_id = useSelector((s: RootState) => s.cat_id);
  useEffect(() => {
    try {
      dispatch(fetchProducts(cat_id));
    } catch (error) {
      console.log("Error fetching products", error);
      return;
    }
  }, [cat_id, dispatch]);
  return (
    <>
      <div id="products" className="mt-3 flex gap-5 items-center categories-div flex-wrap">
        <AllCategories />
        <h1 className="text-xl capitalize bg-hero-400 text-white rounded-md py-1 px-2">
          Products count : {products.length || 0}
        </h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5 mt-10">
        {loading ? (
          Array.from({ length: 5 }).map((_, index) => (
            <CardSkeleton key={index} />
          ))
        ) : Array.isArray(products) ? (
          products.map((item, index) => <ProductCard key={index} item={item} />)
        ) : (
          <Sorry />
        )}
      </div>
    </>
  );
};

export default ProductsList;
