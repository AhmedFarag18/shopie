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
    <section className="bg-white py-16">
      <div className="container m-auto p-3">
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

        <div className="flex flex-col md:flex-row justify-center items-center gap-5 p-4 mt-10 bg-white">
          <div className="bg-[#fef0d7] relative w-full md:w-1/2  h-[300px] rounded-2xl overflow-hidden flex items-center justify-between p-6">
            <div className="absolute top-0 right-0 w-full h-full bg-[#fcd9a3] rotate-[-30deg] origin-top-right -translate-y-[60%] -translate-x-[10%]"></div>

            <div className="relative z-10 w-1/2 flex justify-center">
              <img src="src/assets/Blueberry - eCommerce/one.png" alt="Snacks" className="w-70 h-auto" />
            </div>

            <div className="relative z-10 w-1/2 space-y-3">
              <h2 className="text-lg font-semibold text-gray-800">Tasty Snack & Fast food</h2>
              <p className="text-sm text-gray-500">The flavour of something special</p>
              <button className="text-sm px-4 py-2 border border-gray-400 rounded hover:bg-gray-100">Shop Now</button>
            </div>
          </div>

          <div className="bg-[#ffdbe3] relative w-full md:w-1/2  h-[300px] rounded-2xl overflow-hidden flex items-center justify-between p-6">
            <div className="absolute top-0 right-0 w-full h-full bg-[#ffbfcf] rotate-[-30deg] origin-top-right -translate-y-[60%] -translate-x-[10%]"></div>

            <div className="relative z-10 w-1/2 flex justify-center">
              <img src="src/assets/Blueberry - eCommerce/two.png" alt="Fruits" className="w-70 h-auto" />
            </div>

            <div className="relative z-10 w-1/2 space-y-3">
              <h2 className="text-lg font-semibold text-gray-800">Fresh Fruits & Vegetables</h2>
              <p className="text-sm text-gray-500">A healthy meal for every one</p>
              <button className="text-sm px-4 py-2 border border-gray-400 rounded hover:bg-gray-100">Shop Now</button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
