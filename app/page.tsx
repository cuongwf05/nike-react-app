import Hero from "@/components/Hero";
import Spotlight from "@/components/Spotlight";
import Trending from "@/components/Trending";
import FooterCuong from "@/components/FooterCuong";

export default function Home() {
  return (
    <>
      <Hero />
      <Trending />
      <Spotlight />
      <FooterCuong />
    </>
  );
}