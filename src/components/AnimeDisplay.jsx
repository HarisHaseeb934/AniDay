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
  return (
    <section>
      <ul className="flex flex-wrap">
        {data?.map((anime, i) => {
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
