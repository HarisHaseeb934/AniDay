import { keepPreviousData, useQuery } from "@tanstack/react-query";
import AnimeCard from "./AnimeCard";
import { NavLink } from "react-router-dom";
import { getLatest } from "../api/axiosInstance";
import { useEffect, useState } from "react";
import Heading from "./Heading";

const RecentlyAddedAnime = ({ forHome = true }) => {
  const [page, setPage] = useState(1);
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["animedisplay", { genre: "recent", page: page }],
    queryFn: () => getLatest(page),
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

  const slicedData = forHome ? data?.slice(0, 10) : data;
  return (
    <div className="max-w-[90%] mx-auto py-10">
      <Heading text={"RECENT"} />
      <ul className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 justify-items-center">
        {slicedData?.map((anime, i) => {
          return (
            <li key={i} className="w-full">
              <NavLink to={`/AniPlayer/${anime._id}?episode=1`}>
                <AnimeCard {...anime} />
              </NavLink>
            </li>
          );
        })}
      </ul>
      {forHome ? (
        <div className="text-center mt-10">
          <NavLink
            to={"/recent"}
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
    </div>
  );
};

export default RecentlyAddedAnime;
