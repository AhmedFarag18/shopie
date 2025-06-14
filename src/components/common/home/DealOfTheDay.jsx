import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import CountdownTimer from "./CountdownTimer";
import { useProducts } from "../../../hooks/useProducts";
import ProductsSkeleton from "../skeletons/ProductsSkeleton";
import ProductCard from "../ProductCard";
import { homeCards1, homeCards2 } from "../../../assets/images";

export default function DealOfTheDay() {
  const { products, loading, error } = useProducts()

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
          {loading ?
            <ProductsSkeleton length={3} />
            :
            error ?
              <p className="text-red-600 px-2 py-10">Somthing Went wrong Maybe: {error}</p>
              :
              products.length > 8 && products.slice(0, 8).map((p, i) => (
                <SwiperSlide key={i}>
                  <ProductCard product={p} />
                </SwiperSlide>
              ))
          }
        </Swiper>

        <div className="flex flex-col md:flex-row justify-center items-center gap-5 p-4 mt-10 bg-white">
          <div className="bg-[#fef0d7] relative w-full md:w-1/2  h-[300px] rounded-2xl overflow-hidden flex items-center justify-between p-6">
            <div className="absolute top-0 right-0 w-full h-full bg-[#fcd9a3] rotate-[-30deg] origin-top-right -translate-y-[60%] -translate-x-[10%]"></div>

            <div className="relative z-10 w-1/2 flex justify-center">
              <img src={homeCards1} alt="Snacks" className="w-70 h-auto" />
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
              <img src={homeCards2} alt="Fruits" className="w-70 h-auto" />
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
