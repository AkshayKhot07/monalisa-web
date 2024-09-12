"use client";

import classNames from "classnames";
import Link from "next/link";
import React, { useState, useRef, useCallback } from "react";

const FlashlightEffect = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isButtonVisible, setIsButtonVisible] = useState(false);
  const [seekHover, setSeekHover] = useState(false);
  const sectionRef = useRef(null);
  const buttonRef = useRef(null);
  const seekRef = useRef(null);

  const handleMouseMove = useCallback((e) => {
    if (sectionRef.current) {
      const rect = sectionRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      setMousePosition({ x, y });

      // Check if mouse is over button area
      if (buttonRef.current) {
        const buttonRect = buttonRef.current.getBoundingClientRect();
        const isOverButton =
          x >= buttonRect.left - rect.left &&
          x <= buttonRect.right - rect.left &&
          y >= buttonRect.top - rect.top &&
          y <= buttonRect.bottom - rect.top;
        setIsButtonVisible(isOverButton);
      }

      // Check if mouse is over seek text
      if (seekRef.current) {
        const seekRect = seekRef.current.getBoundingClientRect();
        const isOverSeekText =
          x >= seekRect.left - rect.left &&
          x <= seekRect.right - rect.left &&
          y >= seekRect.top - rect.top &&
          y <= seekRect.bottom - rect.top;
        setSeekHover(isOverSeekText);
      }
    }
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-white min-h-screen font-sans"
      onMouseMove={handleMouseMove}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(circle 9em at ${mousePosition.x}px ${mousePosition.y}px, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1))`,
        }}
      />
      <div className="relative z-10 p-4 min-h-screen flex flex-col items-center justify-center">
        <p className="text-base text-justify leading-7 mb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
          modi deserunt dolore iure animi aperiam, debitis optio quos quas?
          Sapiente corporis a illo labore assumenda est nam quisquam veniam rem
          voluptatum quis pariatur quae asperiores repellendus in similique,
          quibusdam dolorum optio incidunt laudantium! Iusto commodi odit ea
          sequi cupiditate alias obcaecati in qui, vero sunt sint maxime
          voluptatibus?
        </p>
        <p
          ref={seekRef}
          className={classNames(
            "text-center py-5 font-bold",
            seekHover ? "font-bold bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 text-transparent bg-clip-text bg-300% animate-gradient"
            : "text-[#171717]"
          )}
        >
          Seek And You Shall Find
        </p>
        <p className="text-base text-justify leading-7 mb-4">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam
          ducimus minus fugit, inventore amet mollitia. Illo fugiat magni
          pariatur maiores eum deserunt, similique amet! Dignissimos culpa fuga
          mollitia, maxime laborum cupiditate, nobis minus quisquam libero
          recusandae cum cumque consequatur vero esse quaerat odio quia eligendi
          porro unde! Sed veniam id odit?{" "}
          <span
            ref={buttonRef}
            className="relative inline-block mx-2"
            style={{ width: "100px", height: "40px" }}
          >
            {isButtonVisible && (
              <Link href={"/congratulations"} className="absolute w-max top-0 left-0  px-6 py-3 bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-semibold rounded-full shadow-lg hover:from-purple-600 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 transform hover:scale-105 transition duration-200 ease-in-out">
                Own Me
              </Link>
            )}
          </span>
        </p>
      </div>
    </section>
  );
};

export default FlashlightEffect;
