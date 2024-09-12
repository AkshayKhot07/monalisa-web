"use client";
import { useEffect, useRef } from "react";
import "./ScrollCurtainSection.css"

const ScrollCurtainSection = () => {
  const curtainSectionRef = useRef<HTMLDivElement>(null);
  const curtainWrapperRef = useRef<HTMLDivElement>(null);
  const leftCurtainRef = useRef<HTMLImageElement>(null);
  const rightCurtainRef = useRef<HTMLImageElement>(null);
  //   const [scrollPercent, setScrollPercent] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      const curtainSection = curtainSectionRef.current;
      const curtainWrapper = curtainWrapperRef.current;
      const leftCurtain = leftCurtainRef.current;
      const rightCurtain = rightCurtainRef.current;

      if (curtainSection && curtainWrapper && leftCurtain && rightCurtain) {
        // Get the position of the curtain section relative to the page
        const sectionTop = curtainSection.offsetTop;
        const sectionHeight = curtainWrapper.clientHeight;
        const currentScroll = window.scrollY;

        // Start animation only when section is in view
        if (
          currentScroll >= sectionTop &&
          currentScroll <= sectionTop + sectionHeight
        ) {
          const top = currentScroll - sectionTop;
          const percent = (top / sectionHeight) * 100;

          // Apply the translation to the curtains based on scroll
          leftCurtain.style.transform = `translateX(-${Math.min(
            percent >= 98 ? 100 : percent,
            100
          )}%)`;
          rightCurtain.style.transform = `translateX(${Math.min(
            percent >= 98 ? 100 : percent,
            100
          )}%)`;

          //   setScrollPercent(percent);
        } else if (currentScroll < sectionTop) {
          // Reset the curtains to their initial positions if the scroll is above the section
          leftCurtain.style.transform = "translateX(0%)";
          rightCurtain.style.transform = "translateX(0%)";
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
    id="curtain-section"
      ref={curtainSectionRef}
      className="curtain-section relative w-full h-[300vh]" // Increased height to ensure enough scroll room
    >
      <div
        ref={curtainWrapperRef}
        className="curtain-wrapper w-full h-[100vh] sticky top-0 z-[20] overflow-hidden flex"
      >
        <div className="curtain-animate w-full h-full relative flex items-center justify-center">

          <div className="w-full h-full relative flex items-center justify-center dots-background">
            <img
              src="/images/monalisa/mona-pngframe.png"
              alt=""
              className="w-[700px] hover-img"
            />
          </div>

          
          <img
            ref={leftCurtainRef}
            src="/images/curtains/left-curtain.png"
            alt=""
            className="w-[60%] top-0 left-0 absolute h-full overflow-hidden z-[99]"
          />
          <img
            ref={rightCurtainRef}
            src="/images/curtains/right-curtain.png"
            alt=""
            className="w-[60%] top-0 right-0 absolute h-full overflow-hidden z-[99]"
          />
        </div>
      </div>
    </div>
  );
};

export default ScrollCurtainSection;
