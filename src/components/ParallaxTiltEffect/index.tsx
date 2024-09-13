"use client";

import React, { useState, useEffect, useRef } from "react";

const ParallaxTiltEffect = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isActive, setIsActive] = useState(false);
  const [tiltValues, setTiltValues] = useState({
    rX: 0,
    rY: 0,
    bX: 50,
    bY: 80,
  });

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (event: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const offsetX = event.clientX - rect.left;
      const offsetY = event.clientY - rect.top;
      const w = container.offsetWidth;
      const h = container.offsetHeight;

      const X = (offsetX - w / 2) / 3 / 3;
      const Y = -(offsetY - h / 2) / 3 / 3;

      setTiltValues({
        rY: X,
        rX: Y,
        bX: 50 - Y / 4,
        bY: 80 - X / 4,
      });
    };

    const handleMouseEnter = () => setIsActive(true);
    const handleMouseLeave = () => {
      setIsActive(false);
      setTiltValues({ rX: 0, rY: 0, bX: 50, bY: 80 });
    };

    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseenter", handleMouseEnter);
    container.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseenter", handleMouseEnter);
      container.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  const imageUrl = "/images/monalisa/mona-pngframe.png";

  return (
    <div className="m-2 lg:m-8 transform perspective-[100rem] cursor-pointer">
      <div
        ref={containerRef}
        className={`w-[25rem] h-[25rem] lg:w-[30rem] lg:h-[30rem] rounded-[1.6rem] p-2 lg:p-16 flex items-end relative
          ${
            isActive
              ? "transition-none"
              : "transition-transform duration-600 ease-out"
          }
          before:content-[''] before:absolute before:inset-8  before:transition-all before:duration-300
          hover:before:inset-4
        `}
        style={{
          transform: `rotateX(${tiltValues.rX}deg) rotateY(${tiltValues.rY}deg)`,
        }}
      >
        <img
          src={imageUrl}
          alt={`Tilt effect`}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 ease-out"
          style={{
            transform: `translateX(${tiltValues.bX - 50}%) translateY(${
              tiltValues.bY - 80
            }%)`,
          }}
        />
        <div className="absolute inset-0" />{" "}
      </div>
    </div>
  );
};

export default ParallaxTiltEffect;
