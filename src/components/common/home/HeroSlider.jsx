import React, { useState, useEffect } from "react";
import { hero1, hero2, hero3 } from "../../../assets/images";

const heroImages = [hero1, hero2, hero3];

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
    <section className="w-full flex justify-between items-center px-30 py-10 gap-4 bg-[#f9f9f9] transition-all duration-500 ease-in-out max-lg:flex-col-reverse max-md:p-4">
      <div className="max-w-xl">
        <p className="text-purple-500 text-base mb-2">Flat 20% Off</p>
        <h1 className="text-[58px] font-bold text-gray-800 mb-4 max-md:text-2xl">
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
        <button className="btn-primary bg-transparent border border-primary text-primary hover:text-light w-1/3 max-md:w-auto">
          Shop Now
        </button>
      </div>
      <div className="relative w-[500px] h-[500px] max-md:w-full max-md:h-[300px]">
        {heroSlides.map((slide, idx) => (
          <img
            key={idx}
            src={slide.image}
            alt={`Slide ${idx + 1}`}
            className={`absolute top-0 left-0 w-full h-full object-contain transition-opacity duration-700 ${idx === currentSlide ? "opacity-100" : "opacity-0"
              }`}
          />
        ))}
      </div>
    </section>
  );
}
