import Image from "next/image";
import Camp from "./ui/home/camp/camp";
import Features from "./ui/home/features/features";
import Guide from "./ui/home/guide/guide";
import Hero from "./ui/home/hero/hero";
import Stats from "./ui/home/stats/stats";
import Team from "./ui/home/team/team";
import Partners from "./ui/home/partners/partners";

export default function Home() {
  return (
    <>
    <Hero />
    <Camp />
    <Guide />
    <Stats />
    <Partners />
    <Team />
    <Features />
    </>
  );
}
