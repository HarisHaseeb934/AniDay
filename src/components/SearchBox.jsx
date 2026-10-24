import { useEffect, useRef, useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { useDebounce } from "../customeHooks/useDebounce";
import { useQuery } from "@tanstack/react-query";
import { getSearchData } from "../api/axiosInstance";
import { RxCross2 } from "react-icons/rx";
import AnimeCard from "./AnimeCard";
import { NavLink, useNavigate } from "react-router-dom";

const SearchBox = () => {
  const [search, setSearch] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const modalRef = useRef(null);
  const debounce = useDebounce(search.trim(), 500);

  const navigate = useNavigate();

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["search", debounce],
    queryFn: () => getSearchData(debounce),
    enabled: !!debounce,
  });

  const handleSearch = (e) => {
    setIsOpen(false);
    setSearch("");
  };

  useEffect(() => {
    const handleModal = (e) => {
      if (modalRef && !modalRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleModal);
    return () => {
      document.removeEventListener("mousedown", handleModal);
    };
  });

  const handleNavigate = (id) => {
    setIsOpen(false);
    navigate(`/AniPlayer/${id}?episode=1`);
  };

  return (
    <div
      className="px-1 relative py-1 sm:m-auto sm:w-sm md:w-lg lg:w-xl"
      ref={modalRef}
    >
      <form
        action=""
        className="flex items-center border-anime-muted border bg-anime-bg rounded-3xl px-1 py-1 sm:m-auto"
      >
        <input
          type="text"
          className="text-anime-text text-[10px] sm:text-xs md:text-sm outline-none text-sm pl-3 sm:pl-4 w-full"
          placeholder="Search anime..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onFocus={() => setIsOpen(true)}
        />
        {search && (
          <button
            className="p-1 size-5 sm:size-7 flex items-center justify-center bg-anime-cyan rounded-full"
            onClick={handleSearch}
            type="button"
          >
            <RxCross2 className="text-lg text-anime-text  " />
          </button>
        )}
        {/* <button
          className="p-1 size-5 sm:size-7 flex items-center justify-center bg-anime-cyan rounded-full ml-2"
          type="submit"
        >
          <IoIosSearch className="text-lg text-anime-text  " />
        </button> */}

        <div className="p-1 size-5 sm:size-7 flex items-center justify-center bg-anime-cyan rounded-full ml-2">
          <IoIosSearch className="text-lg text-anime-text  " />
        </div>
      </form>
      {isOpen && debounce && (
        <div className="absolute w-full z-20 bg-anime-bg rounded-2xl">
          {!isLoading && !isError && data?.found === false && (
            <p className="p-6 text-center text-anime-text text-[10px] sm:text-xs md:text-sm">
              No result's found for this '{debounce}'
            </p>
          )}
          {data?.length > 0 && (
            <ul className="max-h-100 overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-anime-surface [&::-webkit-scrollbar-thumb]:bg-anime-cyan [&::-webkit-scrollbar-thumb]:rounded-2xl [&::-webkit-scrollbar-thumb]:h-10">
              {data?.map((res, i) => (
                <li key={i} className="p-4 hover:bg-anime-surface">
                  <button
                    className="flex items-center gap-5"
                    onClick={() => handleNavigate(res?.Id)}
                  >
                    <div className="aspect-square">
                      <img
                        src={res?.Image}
                        className="w-[50px] h-[70px] object-cover"
                        loading={i < 4 ? "eager" : "lazy"}
                        fetchpriority={i < 4 ? "high" : "low"}
                      />
                    </div>
                    <p className="text-anime-text text-[10px] sm:text-xs md:text-sm line-clamp-3">
                      {res?.Name}
                    </p>
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchBox;
