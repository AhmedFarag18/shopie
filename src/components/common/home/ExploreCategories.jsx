import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { categoriesHome } from "./CategoriesData";
import { homeNewsletterImg } from "../../../assets/images";

export default function ExploreCategories() {

  return (
    <section className="bg-white px-10 py-20 flex flex-col md:flex-row justify-center items-center gap-10 max-md:p-3">
      <div className="relative rounded-2xl overflow-hidden shadow-lg w-1/3 h-150 bg-gray-200 max-md:w-full max-md:h-auto">
        <img src={homeNewsletterImg} className="w-full h-full object-cover" />
        <div className="absolute top-3 right-3 bg-black opacity-60 text-white text-xs px-2 py-1 rounded-full">
          50% Off
        </div>
      </div>
      <div className="w-2/3 max-md:w-full">
        <h2 className="text-[64px] font-semibold leading-[1.2] select-none mb-10 max-md:text-4xl">
          <span className="text-transparent bg-clip-text bg-gradient-to-br from-gray-50 to-gray-300">
            Explore Categories
          </span>
        </h2>
        <Swiper modules={[Autoplay]} spaceBetween={20} slidesPerView={1} breakpoints={{ 640: { slidesPerView: 2 }, 1024: { slidesPerView: 4 } }}
          autoplay={{ delay: 2000, disableOnInteraction: false }}>
          {categoriesHome.map((cat, idx) => (
            <SwiperSlide key={idx}>
              <div className={`${cat.bg} rounded-xl p-4 flex flex-col items-center text-center`}>
                <img src={cat.image} alt={cat.title} className="w-20 h-20 object-contain mb-3 transition-transform duration-300 transform hover:scale-110" />
                <p className="text-gray-700 font-medium">{cat.title}</p>
                <p className="text-xs text-gray-500 mt-1">{cat.count}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>


      </div>
    </section>

  );
}
