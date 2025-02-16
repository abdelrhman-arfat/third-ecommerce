import ProductsList from "./ProductsList";

const CategorySection = () => {
  return (
    <div className="py-4 my-2 w-full">
      <h1 className="text-2xl uppercase">Filter Products</h1>

      {/* show all products */}
      <div>
        <ProductsList />
      </div>
    </div>
  );
};

export default CategorySection;
