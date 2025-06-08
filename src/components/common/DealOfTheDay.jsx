import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import CountdownTimer from "./CountdownTimer";
import ProductCard from "./ProductCard";

export default function DealOfTheDay() {
  const products = [
    {
      image: "src/assets/Blueberry - eCommerce/back-1.jpg",
      category: "Chocos",
      title: "Mixed Fruits Chocolates",
      oldPrice: "$100.00",
      price: "$20",
      extra: "1 Pack"
    },
    {
      image: "src/assets/Blueberry - eCommerce/back-2.jpg",
      category: "Julce",
      title: "Organic Apple Juice Pack",
      price: "$15",
      extra: "100 ml"
    },
    {
      image: "src/assets/Blueberry - eCommerce/back-3.jpg",
      category: "Juice",
      title: "Mixed Almond nuts juice Pack",
      oldPrice: "$80.00",
      price: "$39",
      extra: "250 g"
    },
    {
      image: "src/assets/Blueberry - eCommerce/back-4.jpg",
      category: "Fruits",
      title: "Fresh Mango Slice Juice",
      price: "$25",
      extra: "100 ml"
    },

     {
      image: "src/assets/Blueberry - eCommerce/back-5.jpg",
      category: "chips",
      title: "Mixed Fruits Chips",
      price: "$25",
      extra: "250g"
    },
     {
      image: "src/assets/Blueberry - eCommerce/back-6.jpg",
      category: "snacks",
      title: "Mixed Nuts Snacks",
      oldPrice: "$80.00",
      price: "$25",
      extra: "100g"
    },
  ];

  return (
    <section className="bg-white px-10 py-16">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-800">Day Of The Deal</h2>
            <p className="text-gray-500 mt-2">Don't wait. The time will never be just right.</p>
          </div>
          <CountdownTimer />
        </div>

        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
        >
          {products.map((p, i) => (
            <SwiperSlide key={i}>
              <ProductCard {...p} />
            </SwiperSlide>
          ))}
        </Swiper>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          <div className="bg-gradient-to-r from-orange-100 to-orange-200 rounded-lg p-8 flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-4 md:mb-0">
              <h3 className="text-xl font-bold text-gray-800 mb-2">Tasty Snack & Fast food</h3>
              <p className="text-gray-600 mb-4">The flavour of something special</p>
              <button className="px-4 py-2 bg-gradient-to-r from-red-400 from-10% to-orange-300 to-90% text-white rounded-md hover:bg-purple-700 
              transition-colors transition-transform duration-300 transform hover:scale-110">
                Shop Now
              </button>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <img src="src/assets/Blueberry - eCommerce/one.png"alt="Snacks" className="h-60 object-contain"/>
            </div>
          </div>

          <div className="bg-gradient-to-r from-pink-200 to-blue-100 rounded-lg p-8 flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-4 md:mb-0">
              <h3 className="text-xl font-bold text-gray-800 mb-2">Fresh Fruits & Vegetables</h3>
              <p className="text-gray-600 mb-4">A healthy meal for every one</p>
              <button className="px-4 py-2 bg-gradient-to-r from-pink-500 from-10% to-purple-400 to-90% text-white rounded-md hover:bg-green-700
               transition-colors transition-transform duration-300 transform hover:scale-110">
                Shop Now
              </button>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <img src="src/assets/Blueberry - eCommerce/two.png" alt="Fruits" className="h-60 object-contain"></img>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
