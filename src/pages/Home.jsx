import RecentlyAddedAnime from "../components/RecentlyAddedAnime"
import HeroSection from "../components/HeroSection"

const Home = () => {
  return (
    <section className="bg-[#06090f]">
        <HeroSection/>
        <RecentlyAddedAnime/>
    </section>
  )
}

export default Home