import StarRating from "./StarRating";
import { FaHeart } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import useFavourites from "../customeHooks/useFavourites";

const AnimeCard = ({ Name, Cover, DescripTion = "", MALScore, _id }) => {
  const { favourties, setFavourites } = useFavourites();
  const isFavourite = favourties.some((anime) => anime._id === Number(_id));

  const handleFavourites = () => {
    if (isFavourite) {
      setFavourites((prev) => prev.filter((anime) => anime._id !== _id));
    } else {
      setFavourites((prev) => [
        ...prev,
        { Name, Cover, DescripTion: DescripTion, MALScore, _id },
      ]);
    }
  };

  return (
    <div className="rounded-xl relative overflow-hidden group hover:-translate-y-1 transition-all duration-300 ease-in-out hove:li hover:border-anime-cyan hover:border">
      <div className="absolute inset-0 bg-gradient-to-t from-cyan-300 to-slate-50 opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-20"></div>
      <button
        className={`absolute right-2 z-10 top-2 bg-anime-bg rounded-full flex items-center justify-center p-2 cursor-pointer`}
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          handleFavourites();
        }}
      >
        {isFavourite ? (
          <FaHeart className="text-anime-primary text-lg" />
        ) : (
          <CiHeart className="text-anime-primary text-lg" />
        )}
      </button>
      <div className="h-[250px] overflow-hidden">
        <img
          src={Cover}
          alt=""
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src = "fallback.png";
          }}
          className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-300 ease-in-out"
        />
      </div>
      <div className="px-2 py-3 bg-[#000000]">
        <h2 className="line-clamp-1 font-bold text-anime-text text-sm">
          {Name}
        </h2>
        <div className="flex gap-2">
          <p className="text-anime-gold text-sm">{MALScore}</p>
          <p>
            <StarRating
              initialRating={MALScore / 2}
              readOnly={true}
              size={12}
            />
          </p>
        </div>
        <p className="line-clamp-2 text-anime-text/50 text-xs">{DescripTion}</p>
      </div>
    </div>
  );
};

export default AnimeCard;
