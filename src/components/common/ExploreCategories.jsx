import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

export default function ExploreCategories() {
  const categories =   [{
      title: "Vegetables",
      count: "485 items",
      image: "src/assets/Blueberry - eCommerce/1.svg",
      bg: "bg-pink-100",
    },
    {
      title: "Fruits",
      count: "291 items",
      image: "src/assets/Blueberry - eCommerce/2.svg",
      bg: "bg-green-100",
    },
    {
      title: "Cold Drinks",
      count: "48 items",
      image: "src/assets/Blueberry - eCommerce/3.svg",
      bg: "bg-purple-100",
    },
    {
      title: "Bakery",
      count: "8 items",
      image: "src/assets/Blueberry - eCommerce/4.svg",
      bg: "bg-yellow-100",
    },
     {
      title: "Fast Food",
      count: "15 items",
      image: "src/assets/Blueberry - eCommerce/5.svg",
      bg: "bg-pink-100",
    },
     {
      title: "Snacks",
      count: "140 items",
      image: "src/assets/Blueberry - eCommerce/6.svg",
      bg: "bg-green-100",
    },
  ]

  return (
    <section className="bg-white px-10 py-20 flex flex-col md:flex-row justify-center items-center gap-10">
      <div className="relative rounded-2xl overflow-hidden shadow-lg w-[400px] h-[400px] bg-gray-200">
        <img src="src/assets/Blueberry - eCommerce/category.jpg" className="w-full h-full object-cover" />
        <div className="absolute top-3 right-3 bg-black opacity-60 text-white text-xs px-2 py-1 rounded-full">
          50% Off
        </div>
      </div>
      <div className="w-full max-w-2xl">
        <h2 className="text-[64px] font-semibold ... mb-10">
          <span className="text-transparent bg-clip-text bg-gradient-to-br from-gray-300 to-gray-200">
            Explore Categories
          </span>
        </h2>
        <Swiper modules={[Autoplay]} spaceBetween={20} slidesPerView={1} breakpoints={{ 640:{slidesPerView:2},1024:{slidesPerView:4}}}
            autoplay={{ delay:2000, disableOnInteraction:false }}>
          {categories.map((cat, idx) => (
            <SwiperSlide key={idx}>
              <div className={`${cat.bg} rounded-xl p-4 flex flex-col items-center text-center`}>
                <img src={cat.image} alt={cat.title} className="w-20 h-20 mb-3 hover:scale-110" />
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
