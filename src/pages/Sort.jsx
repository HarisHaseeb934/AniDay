import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { getSortData } from "../api/axiosInstance";
import GenreButton from "../components/GenreButton";
import { NavLink, useParams } from "react-router-dom";
import AnimeCard from "../components/AnimeCard";
import Heading from "../components/Heading";

const Sort = ({ forHome = false }) => {
  const { genre } = useParams();
  const [ratefrom, setRateFrom] = useState(0);
  const [rateto, setRateto] = useState(10);
  const [page, setPage] = useState(1);

  const {
    data = [],
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["sort", { genre, ratefrom, rateto, page }],
    queryFn: () => getSortData({ genre, ratefrom, rateto, page }),
    placeholderData: keepPreviousData,
    staleTime: 1000 * 60 * 60,
    gcTime: 1000 * 60 * 60 * 2,
  });

  useEffect(() => {
    window.scrollTo({
      behavior: "smooth",
      top: 0,
      left: 0,
    });
  }, [page]);

  const slicedData = forHome ? data[1]?.slice(0, 10) : data[1];
  console.log(slicedData);
  return (
    <section className="bg-[#06090f] px-5">
      <div className="max-w-[90%] w-full mx-auto py-10">
        {!forHome && (
          <div className="text-anime-cyan">
            <select
            value={ratefrom}
              onChange={(e) => {
                if(Number(e.target.value) > rateto) return 
                setRateFrom(e.target.value);
                setPage(1);
              }}
            >
              {Array.from({ length: 10 }, (_, i) => i + 1).map((val, i) => (
                <option key={i} value={val}>
                  {val}
                </option>
              ))}
            </select>
            <select
            value={rateto}
              onChange={(e) => {
                if(Number(e.target.value) < ratefrom) return 
                setRateto(e.target.value);
                setPage(1);
              }}
            >
              {Array.from({ length: 10 }, (_, i) => i + 1).map((val, i) => (
                <option key={i} value={val}>
                  {val}
                </option>
              ))}
            </select>
          </div>
        )}

        <Heading text = {genre ? genre : 'All Anime'}/>

        <ul className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 justify-items-center">
          {slicedData?.map((anime, i) => {
            const { Name, ImagePath, MALScore } = anime;
            return (
              <li key={i}>
                <NavLink to={`/AniPlayer/${anime._id}?episode=1`}>
                  <AnimeCard
                    Name={Name}
                    Cover={ImagePath}
                    MALScore={MALScore}
                  />
                </NavLink>
              </li>
            );
          })}
        </ul>

        {forHome ? (
          <div className="text-center mt-10">
            <NavLink
              to={"/sort"}
              className={`text-anime-text bg-anime-cyan py-2 px-3 hover:bg-purple-500`}
            >
              View All
            </NavLink>
          </div>
        ) : (
          <div className="flex items-center justify-center text-white gap-5 mt-10">
            <button
              onClick={() => setPage((prev) => prev - 1)}
              disabled={page <= 1}
              className="flex items-center gap-2 px-3 py-1 sm:px-4 bg-anime-primary hover:bg-purple-500"
            >
              Prev
            </button>
            <p>{page}</p>
            <button
              onClick={() => setPage((prev) => prev + 1)}
              className="flex items-center gap-2 px-3 py-1 sm:px-4 bg-anime-cyan hover:bg-purple-500"
            >
              Next
            </button>
          </div>
        )}
      {!forHome && <GenreButton />}
      </div>

    </section>
  );
};

export default Sort;
