import Slider from "../components/common/Slider";
import Navbar from "../components/layout/Navbar";
import ExploreCategories from "../components/common/ExploreCategories";
import DealOfTheDay from "../components/common/DealOfTheDay";
import CountdownTimer from "../components/common/CountdownTimer";
import HeroSlider from "../components/common/HeroSlider";
import ProductCard from "../components/common/ProductCard"; 


const Home = () => {
  return (
    <div className="min-h-screen bg-[#f9f9f9] font-sans">
      <Navbar />
      <Slider />
      <ExploreCategories />
      <DealOfTheDay />
      <CountdownTimer />
      <HeroSlider />
<ProductCard />

        
      <div className="fixed right-0 bottom-10 rotate-90 text-xs text-gray-400">
        Scroll Page
      </div>
    </div>
  );
}

export default Home;