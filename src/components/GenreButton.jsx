import { NavLink } from "react-router-dom";
import Heading from "./Heading";

const GENRES = [
  "Action",
  "Adventure",
  "Comedy",
  "Drama",
  "Fantasy",
  "Horror",
  "Mystery",
  "Romance",
  "Sci-Fi",
  "Slice Of Life",
  "Sports",
  "Supernatural",
  "Thriller",
  "Psychological",
  "Isekai",
  "Mecha",
  "Music",
  "School",
  "Shounen",
  "Seinen",
];
const GenreButton = () => {
  return (
    <div className="my-5">
      <Heading text={"Browser Genre"} />
      <div className=" bg-anime-cyan/5 p-5 rounded-2xl border border-anime-cyan/60">
        <div className="flex flex-wrap gap-2">
          {GENRES.map((genre, i) => {
            return (
              <NavLink
                key={i}
                to={`/sort/${genre}`}
                className={`px-3 py-2 text-anime-cyan/60 rounded-3xl text-[8px] sm:text-xs md:text-sm border border-anime-cyan/60 hover:text-anime-text`}
              >
                {genre}
              </NavLink>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default GenreButton;
