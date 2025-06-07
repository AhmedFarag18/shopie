import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";


export default function ExploreCategories() {
  const categories = [
    {
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
    }
  ];



  const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 25,
    hours: 22,
    minutes: 11,
    seconds: 53
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prevTime => {
        let { days, hours, minutes, seconds } = prevTime;
        
        seconds--;
        if (seconds < 0) {
          seconds = 59;
          minutes--;
        }
        if (minutes < 0) {
          minutes = 59;
          hours--;
        }
        if (hours < 0) {
          hours = 23;
          days--;
        }
        if (days < 0) {
          clearInterval(timer);
          return { days: 0, hours: 0, minutes: 0, seconds: 0 };
        }
        
        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex items-center mt-4 md:mt-0">
      <div className="text-3xl font-bold bg-gray-100 px-4 py-2 rounded-lg">
        <span className="text-gray-800">{timeLeft.days}</span> Days
      </div>
      <div className="text-3xl font-bold mx-2">:</div>
      <div className="text-3xl font-bold bg-gray-100 px-4 py-2 rounded-lg">
        <span className="text-gray-800">{timeLeft.hours.toString().padStart(2, '0')}</span>
      </div>
      <div className="text-3xl font-bold mx-2">:</div>
      <div className="text-3xl font-bold bg-gray-100 px-4 py-2 rounded-lg">
        <span className="text-gray-800">{timeLeft.minutes.toString().padStart(2, '0')}</span>
      </div>
      <div className="text-3xl font-bold mx-2">:</div>
      <div className="text-3xl font-bold bg-gray-100 px-4 py-2 rounded-lg">
        <span className="text-gray-800">{timeLeft.seconds.toString().padStart(2, '0')}</span>
      </div>
    </div>
  );
};
return (
  
    <div>
      <section className="bg-white px-10 py-20 flex flex-col md:flex-row justify-center items-center gap-10">
        <div className="relative rounded-2xl overflow-hidden shadow-lg w-[400px] h-[400px] bg-gray-200">
          <img src="src/assets/Blueberry - eCommerce/category.jpg" className="w-full h-full object-cover" /> 
          <div className="absolute top-3 right-3 bg-black opacity-60 text-white text-xs px-2 py-1 rounded-full">
            50% Off
          </div>
        </div>

        <div className="w-full max-w-2xl">
          <h2 className="text-[64px] font-semibold text-gray-100 leading-[1.2] select-none mb-10">
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-gray-300 to-gray-200">
              Explore Categories
            </span>
          </h2>

          <Swiper
            modules={[Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 4 },
            }}
            autoplay={{ delay: 2000, disableOnInteraction: false }}>
            {categories.map((cat, idx) => (
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

      <section className="bg-white px-10 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-800">Day Of The Deal</h2>
              <p className="text-gray-500 mt-2">Don't wait. The time will never be just right.</p>
            </div>
            <CountdownTimer />
          </div>
        </div>
        <Swiper
          modules={[Autoplay]} 
          spaceBetween={20}
          slidesPerView={1}
          autoplay={{
            delay: 2000, 
            disableOnInteraction: false, 
          }}
          loop={true} 
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
        >
          <SwiperSlide>
            <div className="border rounded-lg p-4 hover:shadow-lg transition-shadow flex flex-col h-full">
              <div className="h-40  rounded-md mb-3 flex items-center justify-center">
                <img 
                  src="src/assets/Blueberry - eCommerce/back-1.jpg" 
                  alt="Mixed Fruits Chocolates" 
                  className="h-full object-contain"
                />
              </div>
              <div className="text-xs text-gray-500 mb-1">Chocos</div>
              <h3 className="font-medium text-gray-800">Mixed Fruits Chocolates</h3>
              <div className="flex justify-between items-center mt-2">
                <span className="text-gray-500 line-through">$80.00</span>
                <span className="font-bold text-purple-600">$20</span>
              </div>
              <div className="text-xs text-gray-500 mt-1">1 Pack</div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="border rounded-lg p-4 hover:shadow-lg transition-shadow flex flex-col h-full">
              <div className="h-40 rounded-md mb-3 flex items-center justify-center">
                <img 
                  src="src/assets/Blueberry - eCommerce/back-2.jpg" 
                  alt="Organic Apple Juice Pack" 
                  className="h-full object-contain"
                />
              </div>
              <div className="text-xs text-gray-500 mb-1">Julce</div>
              <h3 className="font-medium text-gray-800">Organic Apple Juice Pack</h3>
              <div className="flex justify-between items-center mt-2">
                <span className="font-bold text-purple-600">$15</span>
                <span className="text-xs text-gray-500">3 Left</span>
              </div>
              <div className="text-xs text-gray-500 mt-1">100 ml</div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="border rounded-lg p-4 hover:shadow-lg transition-shadow flex flex-col h-full">
              <div className="h-40  rounded-md mb-3 flex items-center justify-center">
                <img 
                  src="src/assets/Blueberry - eCommerce/back-3.jpg" 
                  alt="Mixed Almond nuts juice Pack" 
                  className="h-full object-contain"
                />
              </div>
              <div className="text-xs text-gray-500 mb-1">Juice</div>
              <h3 className="font-medium text-gray-800">Mixed Almond nuts juice Pack</h3>
              <div className="flex justify-between items-center mt-2">
                <span className="text-gray-500 line-through">$80.00</span>
                <span className="font-bold text-purple-600">$39</span>
              </div>
              <div className="text-xs text-gray-500 mt-1">250 g</div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="border rounded-lg p-4 hover:shadow-lg transition-shadow flex flex-col h-full ">
              <div className="h-40 rounded-md mb-3 flex items-center justify-center relative">
                <img 
                  src="src/assets/Blueberry - eCommerce/back-4.jpg" 
                  alt="Fresh Mango Slice Juice" 
                  className="h-full object-contain "
                />
              </div>
              <div className="text-xs text-gray-500 mb-1">Fruits</div>
              <h3 className="font-medium text-gray-800">Fresh Mango Slice Juice</h3>
              <div className="flex justify-between items-center mt-2">
                <span className="font-bold text-purple-600">$25</span>
              </div>
              <div className="text-xs text-gray-500 mt-1">100 ml</div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="border rounded-lg p-4 hover:shadow-lg transition-shadow flex flex-col h-full ">
              <div className="h-40 rounded-md mb-3 flex items-center justify-center relative">
                <img 
                  src="src/assets/Blueberry - eCommerce/back-5.jpg" 
                  alt="Fresh Mango Slice Juice" 
                  className="h-full object-contain "
                />
              </div>
              <div className="text-xs text-gray-500 mb-1">Snacks</div>
              <h3 className="font-medium text-gray-800">Ground Nuts Oil Pack 52g</h3>
              <div className="flex justify-between items-center mt-2">
                <span className="font-bold text-purple-600">$70</span>
              </div>
              <div className="text-xs text-gray-500 mt-1">52g</div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="border rounded-lg p-4 hover:shadow-lg transition-shadow flex flex-col h-full ">
              <div className="h-40 rounded-md mb-3 flex items-center justify-center relative">
                <img 
                  src="src/assets/Blueberry - eCommerce/back-6.jpg" 
                  alt="Fresh Mango Slice Juice" 
                  className="h-full object-contain "
                />
              </div>
              <div className="text-xs text-gray-500 mb-1">Snacks</div>
              <h3 className="font-medium text-gray-800"> Nuts Pack </h3>
              <div className="flex justify-between items-center mt-2">
                <span className="font-bold text-purple-600">$120</span>
              </div>
              <div className="text-xs text-gray-500 mt-1">250g</div>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>
    </div>
  );
}
