import { useQuery } from "@tanstack/react-query";
import AnimeCard from "./AnimeCard";

const AnimeDisplay = ({ genre, page, getAnime }) => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["animedisplay", { genre, page }],
    queryFn: () => getAnime(1),
  });
  if (!isLoading) {
    console.log(data);
  }
  const slicedData = data?.slice(0, 10);
  return (
    <section className="max-w-[90%] w-full m-auto">
      <div className="flex">
        <h1 className="relative bg-gradient-to-br from-cyan-100 to-cyan-700 bg-clip-text text-transparent text-3xl font-bold before:content-[''] before:absolute before:-left-3 before:rounded-xl before:bottom-2 before:w-1.5 before:h-6 before:bg-anime-cyan">
          RECENT
        </h1>
      </div>
      <ul className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 justify-items-center">
        {slicedData?.map((anime, i) => {
          console.log(anime);
          return (
            <li>
              <AnimeCard key={i} {...anime} />
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default AnimeDisplay;
