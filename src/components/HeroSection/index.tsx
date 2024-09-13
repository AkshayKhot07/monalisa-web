"use client";

import {
  SLIDER1_BG,
  SLIDER1_EL1,
  SLIDER2_BG,
  SLIDER2_EL1,
} from "@/constants/images";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const HeroSection = () => {
  const HeroSectionSliderSettings = {
    autoPlayInterval: 8,
  };

  const [slideIndex, setSlideIndex] = useState(0);
  const slidesRef = useRef<(HTMLDivElement | null)[]>([]);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  //Run on initial load
  useEffect(() => {
    const autoPlayInterval = setTimeout(autoPlaySlider, 1000);
    return () => clearInterval(autoPlayInterval);
  }, []);

  // Set up the interval for autoplay
  useEffect(() => {
    intervalRef.current = setInterval(
      autoPlaySlider,
      HeroSectionSliderSettings.autoPlayInterval * 1000
    );

    // Set up the interval for autoplay
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  // Clear the existing interval and set up a new one when the slideIndex changes on arrow clicks -- Disabled
  /*
  useEffect(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    intervalRef.current = setInterval(
      autoPlaySlider,
      HeroSectionSliderSettings.autoPlayInterval * 1000
    );

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [slideIndex]);
*/

  const autoPlaySlider = () => {
    setSlideIndex((prevIndex) =>
      prevIndex >= slidesRef.current.length - 1 ? 0 : prevIndex + 1
    );
  };
  
  /*
  const handleSlideChange = (n: number) => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    setSlideIndex(
      (prevIndex) =>
        (prevIndex + n + slidesRef.current.length) % slidesRef.current.length
    );
  };
  */

  const scrollToSection = () => {
    const section = document.querySelector("#curtain-section");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="hero-section">
      <div className="relative">
        <div className="relative w-full h-[550px] overflow-hidden bg-black">
          {/* Slide 1 */}
          <div
            className={`absolute inset-0 transition-opacity duration-1000 ${
              slideIndex === 0 ? "opacity-100" : "opacity-0"
            }`}
            ref={(el) => {
              slidesRef.current[0] = el;
            }}
          >
            <div className="absolute w-full h-full">
              <Image
                src={SLIDER1_BG}
                layout="fill"
                style={{
                  transform: slideIndex === 0 ? "scale(1.06)" : "scale(1)",
                  transition: "transform 8s linear 0s",
                  transformOrigin: "0% 0%",
                }}
                alt="Background 1"
              />
            </div>
            <div className="container w-full h-full relative">
              <img
                src={SLIDER1_EL1}
                className="absolute top-[10%] right-[10%] w-auto h-[90%] md-custom-768-1199:right-[0%]"
                style={{
                  // transform: slideIndex === 0 ? "scale(1.12)" : "scale(0.5)",
                  transform: slideIndex === 0 ? "scale(1.12)" : "scale(0.75)",
                  transition: "transform 8s linear 0s",
                  // transformOrigin: "-25% -75%",
                  transformOrigin: "0% 0%",
                }}
                alt="Element 1"
              />
              <div className="absolute md:top-[30%] left-[10%] text-white w-[78%] top-[5%] md:w-[50%] z-[100] md-custom-768-1199:flex items-center md-custom-768-1199:top-[40%]">
                <h2 className="text-xl lg:text-6xl md-custom-768-1199:text-3xl">
                  <div className="inline-block text-[#FFFFFF] px-1 -mx-1 transition-shadow duration-500 ease-in-out hover:text-black hover:shadow-hover-custom group">
                    <span>
                      Objects on the screen appear closer than they are,{" "}
                    </span>
                    <span
                      onClick={() => scrollToSection()}
                      className="cursor-pointer"
                    >
                      <span className="group-hover:text-yellow-500">
                        have a close look!
                      </span>
                    </span>
                  </div>
                </h2>
              </div>
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
            <div className="absolute w-full h-full">
              <Image
                src={SLIDER2_BG}
                layout="fill"
                style={{
                  transform: slideIndex === 1 ? "scale(1.06)" : "scale(1)",
                  transition: "transform 8s linear 0s",
                  transformOrigin: "0% 0%",
                }}
                alt="Background 2"
              />
            </div>
            <div className="container w-full h-full relative">
              <img
                src={SLIDER2_EL1}
                className="absolute top-[10%] left-[10%] w-auto h-[90%]  md-custom-768-1199:left-[0%]"
                style={{
                  // transform: slideIndex === 1 ? "scale(1.12)" : "scale(0.5)",
                  transform: slideIndex === 1 ? "scale(1.12)" : "scale(0.75)",
                  transition: "transform 8s linear 0s",
                  // transformOrigin: "-25% -75%",
                  transformOrigin: "0% 0%",
                }}
                alt="Element 1"
              />
              <div className="absolute top-[5%] md:top-[30%] right-[10%] text-white w-[78%] md:w-[50%] z-[100]  md-custom-768-1199:flex items-center md-custom-768-1199:top-[40%]">
                <h2 className="text-xl lg:text-6xl md-custom-768-1199:text-3xl">
                  <div className="inline-block text-[#FFFFFF] px-1 -mx-1 transition-shadow duration-500 ease-in-out hover:text-black hover:shadow-hover-custom group">
                    <span>
                      Objects on the screen appear closer than they are,{" "}
                    </span>
                    <span
                      onClick={() => scrollToSection()}
                      className="cursor-pointer"
                    >
                      <span className="group-hover:text-yellow-500">
                        have a close look!
                      </span>
                    </span>
                  </div>
                </h2>
              </div>
            </div>
          </div>
        </div>

        {/* <button
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
        </button> */}
      </div>
    </section>
  );
};

export default HeroSection;
