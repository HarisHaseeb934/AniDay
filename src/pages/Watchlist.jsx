import { NavLink } from "react-router-dom";
import Heading from "../components/Heading";
import useFavourites from "../customeHooks/useFavourites";
import AnimeCard from "../components/AnimeCard";

const Watchlist = () => {
  const { favourties, setFavourites } = useFavourites();
  return (
    <section className="bg-[#06090f] min-h-100">
      <div className="max-w-[90%] mx-auto py-10 ">
        <Heading text={"RECENT"} />
        <ul className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 justify-items-center">
          {favourties?.map((anime, i) => {
            return (
              <li key={i} className="w-full">
                <NavLink to={`/AniPlayer/${anime._id}?episode=1`}>
                  <AnimeCard {...anime} />
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Watchlist;
