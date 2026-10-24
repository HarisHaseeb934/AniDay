import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { getSortData } from "../api/axiosInstance";
import GenreButton from "../components/GenreButton";
import { NavLink, useParams } from "react-router-dom";
import AnimeCard from "../components/AnimeCard";
import Heading from "../components/Heading";
import Loading from "../components/Loading";

const Sort = ({ forHome = false, recommendation }) => {
  const { paramGenre } = useParams();
  const [ratefrom, setRateFrom] = useState(0);
  const [rateto, setRateto] = useState(10);
  const [page, setPage] = useState(1);

  const genre = paramGenre || recommendation;

  const {
    data = [],
    isLoading,
    isError,
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

  if (isLoading) return <Loading />;
  if (isError) return <p>Something Went Wrong</p>;

  const slicedData = forHome ? data[1]?.slice(0, 10) : data[1];
  return (
    <section className="bg-[#06090f] px-5">
      <div className="max-w-[90%] w-full mx-auto py-10">
        {!forHome && (
          <div className="text-anime-cyan flex items-center gap-5 justify-between">
            <div>
              <Heading text={"rating"} />
            </div>
            <div className="flex items-center gap-5">
              <select
                value={ratefrom}
                id="rateFrom"
                onChange={(e) => {
                  if (Number(e.target.value) > rateto) return;
                  setRateFrom(e.target.value);
                  setPage(1);
                }}
                className="px-3 py-1 bg-anime-cyan text-anime-text hover:bg-purple-500"
              >
                {Array.from({ length: 10 }, (_, i) => i + 1).map((val, i) => (
                  <option key={i} value={val}>
                    {val}
                  </option>
                ))}
              </select>
              <span>to</span>
              <select
                value={rateto}
                id="rateTo"
                onChange={(e) => {
                  if (Number(e.target.value) < ratefrom) return;
                  setRateto(e.target.value);
                  setPage(1);
                }}
                className="px-3 py-1 bg-anime-cyan text-anime-text hover:bg-purple-500"
              >
                {Array.from({ length: 10 }, (_, i) => i + 1).map((val, i) => (
                  <option key={i} value={val}>
                    {val}
                  </option>
                ))}
              </select>
            </div>
          </div>
        )}

        <Heading text={genre ? genre : "Recommendation"} />

        <ul className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 justify-items-center">
          {slicedData?.map((anime, i) => {
            const { Name, ImagePath, MALScore, _id } = anime;
            return (
              <li key={i} className="max-w-full w-full">
                <NavLink to={`/AniPlayer/${anime._id}?episode=1`}>
                  <AnimeCard
                    Name={Name}
                    Cover={ImagePath}
                    MALScore={MALScore}
                    _id={_id}
                  />
                </NavLink>
              </li>
            );
          })}
        </ul>

        {forHome ? (
          <div className="text-center mt-10">
            <NavLink
              to={genre ? `/sort/${genre}` : `/sort`}
              className={`text-anime-text bg-anime-cyan py-2 px-3 hover:bg-purple-500`}
            >
              View All
            </NavLink>
          </div>
        ) : !slicedData || slicedData?.length === 0 ? (
          <div className="flex justify-center items-center text-anime-cyan">
            No Anime Exists for this "{genre}"
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
