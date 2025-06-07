import { BrowserRouter, Route, Routes } from "react-router";
import { Toaster } from "react-hot-toast";
import { routes } from "./routes/routing";
import MainLayout from "./components/layout/MainLayout";
import HeroSlider from "./components/common/HeroSlider";
import ExploreCategories from "./components/common/ExploreCategories";
import DealOfTheDay from "./components/common/DealOfTheDay";

function App() {
  return (
    <>
      <Toaster />
      <BrowserRouter>
        <MainLayout>
           <HeroSlider />
      <ExploreCategories />
      <DealOfTheDay />
      <div className="min-h-screen bg-[#f9f9f9] font-sans"> </div>
      <div className="fixed right-0 bottom-10 rotate-90 text-xs text-gray-400">Scroll Page</div>

            <Routes>
              {routes.map((route, i) => (
                <Route key={i} path={route.path} element={route.element} />
              ))}
            </Routes>
        </MainLayout>
      </BrowserRouter>

    </>
  );
}

export default App;
