import { getLatest } from "../api/axiosInstance"
import AnimeDisplay from "../components/AnimeDisplay"
import HeroSection from "../components/HeroSection"

const Home = () => {
  return (
    <section className="bg-[#06090f]">
        <HeroSection/>
        <AnimeDisplay genre = "recent" page = {1} getAnime = {getLatest}/>
    </section>
  )
}

export default Home