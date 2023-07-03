import HeroComponent from "@/components/home/hero/HeroComponent";
import OurWorkComponent from "@/components/home/our-work/OurWorkComponent";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <HeroComponent />
      {/* Our Work */}
      <OurWorkComponent />
    </main>
  );
}
