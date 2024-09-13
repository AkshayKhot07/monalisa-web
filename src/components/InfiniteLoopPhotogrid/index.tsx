"use client";

import { monalisaImagesStrip } from "@/constants/data";
import { InfiniteLooper } from "./InfiniteLooper";
import Image from "next/image";

const InfiniteLoopPhotogrid = () => {
  return (
    <>
      <InfiniteLooper speed={0.5} direction="right">
        <div className="flex gap-2 bg-black pt-2">
          <div className="w-[8px] h-[8px] bg-white"></div>
          <div className="w-[8px] h-[8px] bg-black"></div>
        </div>
      </InfiniteLooper>
      <InfiniteLooper speed={30} direction="right">
        <div className="flex gap-2 p-2 bg-black">
          {monalisaImagesStrip?.map((item) => (
            <div key={item} className="relative w-[200px] h-[200px]">
              <Image src={item} layout="fill" alt="image-grid" />
            </div>
          ))}
        </div>
      </InfiniteLooper>
      <InfiniteLooper speed={0.5} direction="right">
        <div className="flex gap-2 bg-black pb-2">
          <div className="w-[8px] h-[8px] bg-white"></div>
          <div className="w-[8px] h-[8px] bg-black"></div>
        </div>
      </InfiniteLooper>
    </>
  );
};

export default InfiniteLoopPhotogrid;
