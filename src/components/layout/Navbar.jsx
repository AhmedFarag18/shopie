import React, { useState, useEffect } from "react";
import { FaRegUser, FaRegHeart, FaShoppingCart, FaSearch } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import "swiper/css/autoplay";

const heroImages = [
  "src/assets/Blueberry - eCommerce/hero-1.png",
  "src/assets/Blueberry - eCommerce/hero-2.png",
  "src/assets/Blueberry - eCommerce/hero-3.png"
];

const heroSlides = [
  {
    image: heroImages[0],
    title: "Warm up your day with fresh fruits"
  },
  {
    image: heroImages[1],
    title: "Healthy choices for your family"
  },
  {
    image: heroImages[2],
    title: "Explore our best offers"
  }
];
function ExploreCategories() {
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
    },
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

    <Swiper
      modules={[Autoplay]} // استخدام Autoplay فقط
      spaceBetween={20}
      slidesPerView={1}
      autoplay={{
        delay: 3000, // التمرير كل 3 ثواني
        disableOnInteraction: false, // الاستمرار في التمرير حتى عند التفاعل
      }}
      loop={true} // إعادة التشغيل تلقائياً عند الانتهاء
      breakpoints={{
        640: { slidesPerView: 2 },
        1024: { slidesPerView: 4 },
      }}
    >
      {/* Chocos */}
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
            <span className="text-gray-500 line-through">$830.00</span>
            <span className="font-bold text-purple-600">$20</span>
          </div>
          <div className="text-xs text-gray-500 mt-1">1 Pack</div>
        </div>
      </SwiperSlide>

      {/* Julce */}
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

      {/* Juice */}
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

      {/* Fruits */}
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
              <img src="src/assets/Blueberry - eCommerce/two.png" alt="Fruits" className="h-60 object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
);
  }

export default function BlueBerryLandingPage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-[#f9f9f9] font-sans">
      <header className="flex justify-between items-center p-4 shadow-sm bg-white">
        <div className="flex items-center space-x-2">
          <img src="src/assets/Blueberry - eCommerce/logo.png" alt="Blue Berry Logo" className="h-10" />
        </div>

        <div className="flex items-center border border-gray-300 rounded-md px-2">
          <select className="bg-transparent px-2 py-1 text-sm outline-none">
            <option>Vegetables</option>
            <option>Fruits</option>
            <option>Dairy</option>
            <option>Snacks</option>
            <option>Drinks</option>
            <option>Bakery</option>
          </select>
          <input
            type="text"
            placeholder="Search products..."
            className="px-2 py-1 w-64 outline-none text-sm bg-transparent"
          />
          <FaSearch className="text-gray-500" />
        </div>

        <div className="flex items-center space-x-6 text-sm">
          <div className="flex items-center space-x-1 cursor-pointer">
            <FaRegUser /> <span>Login</span>
          </div>
          <div className="flex items-center space-x-1 cursor-pointer">
            <FaRegHeart /> <span> Wish List</span>
          </div>
          <div className="flex items-center space-x-1 cursor-pointer">
            <FaShoppingCart /> <span> Cart</span>
          </div>
        </div>
      </header>

      <nav className="flex items-center space-x-6 px-6 py-2 text-sm text-gray-600 border-b">
        <button className="border p-1 rounded text-[#6c7fd8]">☰</button>
        <span className="cursor-pointer">Home</span>
        <span className="cursor-pointer">Categories</span>
        <span className="cursor-pointer">Products</span>
        <span className="cursor-pointer">Pages</span>
        <span className="cursor-pointer">Blog</span>
        <span className="cursor-pointer">Offers</span>
      </nav>

      <section className="flex justify-between items-center px-40 py-20 gap-4 transition-all duration-500 ease-in-out">
        <div className="max-w-xl">
          <p className="text-purple-500  text-base mb-2">Flat 20% Off</p>
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            {heroSlides[currentSlide].title.split(" ").map((word, idx) => (
              <React.Fragment key={idx}>
                {word === "Warm" || word === "Healthy" || word === "Explore" ? (
                  <span className="text-[rgb(99, 102, 241)]">{word}</span>
                ) : (
                  word
                )}{" "}
              </React.Fragment>
            ))}
          </h1>
          <button className="px-4 py-2 border border-gray-400 rounded background  hover:bg-purple-600 text-sm text-gray-800 hover:text-white transition-colors duration-300">
            Shop Now
          </button>
        </div>
        <div className="relative w-[500px] h-[500px]">
          {heroSlides.map((slide, index) => (
            <img
              key={index}
              src={slide.image}
              alt={`Slide ${index + 1}`}
              className={`absolute top-0 left-0 w-full h-full object-contain transition-opacity duration-700 ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
        </div>
      </section>

      <ExploreCategories />

      <div className="fixed right-0 bottom-10 rotate-90 text-xs text-gray-400">Scroll Page</div>
    </div>
  );
}