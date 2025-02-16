"use client";
import { fetchCategory } from "@/app/_RTX/slices/categoriesSlice";
import { AppDispatch, RootState } from "@/app/_RTX/store/store";
import { changeCatId } from "@/app/_RTX/slices/categoryIdSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
const AllCategories = () => {
  const { categories } = useSelector((s: RootState) => s.categories);
  const catid = useSelector((s: RootState) => s.cat_id);
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(fetchCategory());
  }, [dispatch]);
  return (
    <div className="flex items-center gap-1 shadow-sm">
      <label className="text-hero-400" htmlFor="cate">
        Categories:
      </label>
      <select
        value={catid}
        onChange={(e) => {
          dispatch(changeCatId(Number(e.target.value)));
        }}
        name="cate"
        className="rounded-sm p-1 shadow-sm w-44"
      >
        {categories.map((category) => (
          <option key={category.category_id} value={category.category_id}>
            {category.category_name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default AllCategories;
