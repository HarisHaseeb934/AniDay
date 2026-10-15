import { getLatest } from "../api/axiosInstance"
import AnimeDisplay from "../components/AnimeDisplay"
import HeroSection from "../components/HeroSection"

const Home = () => {
  return (
    <section className="bg-anine-bg">
        <HeroSection/>
        <AnimeDisplay genre = "recent" page = {1} getAnime = {getLatest}/>
    </section>
  )
}

export default Home