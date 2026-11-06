import RecentlyAddedAnime from "../components/RecentlyAddedAnime"
import HeroSection from "../components/HeroSection"
import Sort from "./Sort"
import { useEffect } from "react";
import { useTitle } from "../customeHooks/useTitle";

const Home = () => {
  useTitle()
  return (
    <section className="bg-[#06090f]">
        <HeroSection/>
        <RecentlyAddedAnime/>
        <Sort forHome = {true}/>
    </section>
  )
}

export default Home