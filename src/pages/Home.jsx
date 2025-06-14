import ExploreCategories from "../components/common/home/ExploreCategories";
import DealOfTheDay from "../components/common/home/DealOfTheDay";
import HeroSlider from "../components/common/home/HeroSlider";


const Home = () => {
  return (
    <div className="min-h-screen bg-[#f9f9f9] font-sans">
      <HeroSlider />
      <ExploreCategories />
      <DealOfTheDay />

    </div>
  );
}

export default Home;
