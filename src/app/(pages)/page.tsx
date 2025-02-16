import CategorySection from "../_components/sections/home/CategorySection";
import HeroSection from "../_components/sections/home/HeroSection";

export default function Home() {
  return (
    <div className="w-full">
      <HeroSection />
      <CategorySection />
    </div>
  );
}
