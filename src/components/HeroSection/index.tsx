"use client";

import {
  SLIDER1_BG,
  SLIDER1_EL1,
  SLIDER2_BG,
  SLIDER2_EL1,
} from "@/constants/images";
import { useRef, useState } from "react";

const HeroSection = () => {
  const fundSliderSettings = {
    autoPlayInterval: 8,
  };

  const [slideIndex, setSlideIndex] = useState(0);
  // Explicitly define the ref type as (HTMLDivElement | null)[]
  const slidesRef = useRef<(HTMLDivElement | null)[]>([]);

  //   useEffect(() => {
  //     const autoPlayInterval = setInterval(
  //       autoPlaySlider,
  //       fundSliderSettings.autoPlayInterval * 1000
  //     );
  //     return () => clearInterval(autoPlayInterval);
  //   }, [slideIndex]);

  const autoPlaySlider = () => {
    setSlideIndex((prevIndex) =>
      prevIndex >= slidesRef.current.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleSlideChange = (n) => {
    setSlideIndex(
      (prevIndex) =>
        (prevIndex + n + slidesRef.current.length) % slidesRef.current.length
    );
  };

  return (
    <section className="glider">
      <div className="relative">
        <div className="relative w-full h-[550px] overflow-hidden">
          {/* Slide 1 */}
          <div
            className={`absolute inset-0 transition-opacity duration-1000 ${
              slideIndex === 0 ? "opacity-100" : "opacity-0"
            }`}
            ref={(el) => {
              slidesRef.current[0] = el;
            }}
          >
            <img
              src={SLIDER1_BG}
              className="absolute w-full h-full"
              style={{
                transform: slideIndex === 0 ? "scale(1.06)" : "scale(1)",
                transition: "transform 8s linear 0s",
                transformOrigin: "0% 0%",
              }}
              alt="Background 2"
            />
            <img
              src={SLIDER1_EL1}
              className="absolute top-[10%] right-[10%] w-auto h-[90%]"
              style={{
                transform: slideIndex === 0 ? "scale(1.12)" : "scale(0.5)",
                transition: "transform 8s linear 0s",
                transformOrigin: "-25% -75%",
              }}
              alt="Element 3"
            />
            <div className="absolute top-[30%] left-[10%] text-[#22445b]">
              <h2 className="text-6xl">
                Objects on the screen appear closer then they are
              </h2>
              <p className="text-2xl">Catch me if you can</p>
            </div>
          </div>

          {/* Slide 2*/}
          <div
            className={`absolute inset-0 transition-opacity duration-1000 ${
              slideIndex === 1 ? "opacity-100" : "opacity-0"
            }`}
            ref={(el) => {
              slidesRef.current[1] = el;
            }}
          >
            <img
              src={SLIDER2_BG}
              className="absolute w-full h-full"
              style={{
                transform: slideIndex === 1 ? "scale(1.06)" : "scale(1)",
                transition: "transform 8s linear 0s",
                transformOrigin: "0% 0%",
              }}
              alt="Background 2"
            />
            <img
              src={SLIDER2_EL1}
              className="absolute top-[10%] right-[10%] w-auto h-[90%]"
              style={{
                transform: slideIndex === 1 ? "scale(1.12)" : "scale(0.5)",
                transition: "transform 8s linear 0s",
                transformOrigin: "-25% -75%",
              }}
              alt="Element 3"
            />
            <div className="absolute top-[30%] left-[10%] text-[#22445b]">
              <h2 className="text-6xl">
                Objects on the screen appear closer then they are
              </h2>
              <p className="text-2xl">Catch me if you can</p>
            </div>
          </div>
        </div>

        <button
          className="absolute top-1/2 transform -translate-y-1/2 left-0 p-4 text-white font-bold bg-black bg-opacity-50 hover:bg-opacity-80"
          onClick={() => handleSlideChange(-1)}
        >
          ❮
        </button>
        <button
          className="absolute top-1/2 transform -translate-y-1/2 right-0 p-4 text-white font-bold bg-black bg-opacity-50 hover:bg-opacity-80"
          onClick={() => handleSlideChange(1)}
        >
          ❯
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
