import { Button } from "@/components/ui/button";
import Image from "next/image"
import HeroSection from "@/components/shared/HeroSection";
import ProblemSection from "@/components/shared/ProblemSection";
import VideoDisplay from "@/components/shared/VideoDisplay";
import SolutionSection from "@/components/shared/SolutionSection";

export default function Home() {
  return (
    <div className="mt-24">
      <HeroSection></HeroSection>
      <VideoDisplay></VideoDisplay>
      <ProblemSection></ProblemSection>
      <SolutionSection></SolutionSection>
    </div>
  );
}
