import FlashlightEffect from "@/components/FlashLightComponent";
import HeroSection from "@/components/HeroSection";
import InfiniteLoopPhotogrid from "@/components/InfiniteLoopPhotogrid";
import ScrollComponent from "@/components/ScrollComponent";

import ScrollCurtainSection from "@/components/ScrollCurtainSection";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <InfiniteLoopPhotogrid />
      <ScrollCurtainSection />
      <ScrollComponent />
      <FlashlightEffect />
    </div>
  );
}
