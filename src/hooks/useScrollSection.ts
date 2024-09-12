import { useEffect, useRef, useState } from "react";

function useScrollSection() {
  const divRef = useRef<HTMLDivElement>(null);
  const [scrollPercent, setScrollPercent] = useState<number>(0);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const element = divRef.current;

      if (element && scrollY - element.offsetTop > 0) {
        const scrolledHeight = scrollY - element.offsetTop;
        const totalHeight = element.offsetHeight;

        setScrollPercent((scrolledHeight / totalHeight) * 100);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (scrollPercent < 25) {
      setCurrent(0);
    } else if (scrollPercent < 50) {
      setCurrent(1);
    } else if (scrollPercent < 75) {
      setCurrent(2);
    } else {
      setCurrent(3);
    }
  }, [scrollPercent]);

  return { divRef, current, scrollPercent };
}

export default useScrollSection;