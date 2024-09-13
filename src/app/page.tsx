import FlashlightEffect from "@/components/FlashLightComponent";
import HeroSection from "@/components/HeroSection";
import InfiniteLoopPhotogrid from "@/components/InfiniteLoopPhotogrid";
import FactsComponent from "@/components/FactsComponent";


import ScrollCurtainSection from "@/components/ScrollCurtainSection";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <InfiniteLoopPhotogrid />
      <ScrollCurtainSection />
      <FactsComponent />
      <FlashlightEffect />
    </div>
  );
}
