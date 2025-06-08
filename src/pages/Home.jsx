import ExploreCategories from "../components/common/ExploreCategories";
import DealOfTheDay from "../components/common/DealOfTheDay";
import HeroSlider from "../components/common/HeroSlider";


const Home = () => {
  return (
    <div className="min-h-screen bg-[#f9f9f9] font-sans">
      <HeroSlider />
      <ExploreCategories />
      <DealOfTheDay />

      {/* <div className="fixed right-0 bottom-10 rotate-90 w-20 h-20 text-xs bg-primary text-gray-400">
        Go to top
      </div> */}
    </div>
  );
}

export default Home;
