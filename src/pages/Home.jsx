import RecentlyAddedAnime from "../components/RecentlyAddedAnime"
import HeroSection from "../components/HeroSection"
import Sort from "./Sort"

const Home = () => {
  return (
    <section className="bg-[#06090f]">
        <HeroSection/>
        <RecentlyAddedAnime/>
        <Sort forHome = {true}/>
    </section>
  )
}

export default Home