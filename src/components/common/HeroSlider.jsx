import React, { useState, useEffect } from "react";

const heroImages = [
  "src/assets/Blueberry - eCommerce/hero-1.png",
  "src/assets/Blueberry - eCommerce/hero-2.png",
  "src/assets/Blueberry - eCommerce/hero-3.png"
];

const heroSlides = [
  { image: heroImages[0], title: "Warm up your day with fresh fruits" },
  { image: heroImages[1], title: "Healthy choices for your family" },
  { image: heroImages[2], title: "Explore our best offers" }
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="flex justify-between items-center px-40 py-20 gap-4 bg-[#f9f9f9] transition-all duration-500 ease-in-out">
      <div className="max-w-xl">
        <p className="text-purple-500 text-base mb-2">Flat 20% Off</p>
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          {heroSlides[currentSlide].title.split(" ").map((word, idx) => (
            <React.Fragment key={idx}>
              {["Warm", "Healthy", "Explore"].includes(word) ? (
                <span className="text-[rgb(99,102,241)]">{word}</span>
              ) : (
                word
              )}{" "}
            </React.Fragment>
          ))}
        </h1>
        <button className="px-4 py-2 border border-gray-400 rounded hover:bg-[rgb(99,102,241)] text-sm text-gray-800 hover:text-white transition-colors duration-300">
          Shop Now
        </button>
      </div>
      <div className="relative w-[500px] h-[500px]">
        {heroSlides.map((slide, idx) => (
          <img
            key={idx}
            src={slide.image}
            alt={`Slide ${idx + 1}`}
            className={`absolute top-0 left-0 w-full h-full object-contain transition-opacity duration-700 ${
              idx === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
