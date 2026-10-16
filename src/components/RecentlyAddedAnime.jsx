import { useQuery } from "@tanstack/react-query";
import AnimeCard from "./AnimeCard";
import { NavLink } from "react-router-dom";
import { getLatest } from "../api/axiosInstance";
import { useState } from "react";

const RecentlyAddedAnime = ({forHome = true}) => {
  const [page, setPage] = useState(1);
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["animedisplay", { genre: "recent", page: page }],
    queryFn: () => getLatest(page),
  });
  const slicedData = forHome? data?.slice(0, 10) : data;
  return (
    <section className="max-w-[90%] w-full mx-auto py-10">
      <div className="flex py-5">
        <h1 className="relative bg-gradient-to-br from-cyan-100 to-cyan-700 bg-clip-text text-transparent text-lg md:text-3xl font-bold before:content-[''] before:absolute before:-left-2 md:before:-left-3 before:rounded-xl before:bottom-2 before:w-1 md:before:w-1.5 before:h-3 md:before:h-6 before:bg-anime-cyan">
          RECENT
        </h1>
      </div>
      <ul className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 justify-items-center">
        {slicedData?.map((anime, i) => {
          console.log(anime);
          return (
            <li>
              <NavLink to={`/AniPlayer/${anime._id}?episode=1`}>
                <AnimeCard key={i} {...anime} />
              </NavLink>
            </li>
          );
        })}
      </ul>
      {
        !forHome && <div className="flex items-center justify-center text-white">
          <button onClick={() => setPage(prev => prev - 1)} disabled = {page <= 1}>Prev</button>
          <p>{page}</p>
          <button onClick={() => setPage(prev => prev + 1)}>Next</button>
        </div>
      }
    </section>
  );
};

export default RecentlyAddedAnime;
