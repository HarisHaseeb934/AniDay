import { IoIosStar } from "react-icons/io";
import { FaClock } from "react-icons/fa";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { IoInformationCircle } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const EpisodeTab = ({ data, currentEpisode, language, setLanguage, _id }) => {
  const navigate = useNavigate();
  const handleNavigate = (value) => {
    navigate(`/AniPlayer/${_id}?episode=${parseInt(currentEpisode) + value}`);
  };
  return (
    <div className="bg-anime-surface text-anime-text flex flex-col gap-3 md:gap-5 px-5 py-7 ">
      <h1 className="text-lg md:text-2xl font-bold">{data?.local?.Name}</h1>
      <div className="flex gap-5 text-xs md:text-base">
        <span>Episode {currentEpisode}</span>
        <span className="flex items-center gap-1">
          <IoIosStar className="text-xl" />
          {data?.local?.MALScore}
        </span>
        <span className="flex items-center gap-1">
          <FaClock className="" />
          {data?.local?.Duration}
        </span>
      </div>
      <div className="flex gap-3 lg:gap-6 flex-wrap">
        <div className="flex gap-2">
          <button
            onClick={() => handleNavigate(-1)}
            disabled={parseInt(currentEpisode) <= 1}
            className="flex items-center gap-2 md:px-3 md:py-1 px-2 lg:px-5 lg:py-2 text-xs sm:text-sm bg-anime-primary hover:bg-purple-500 sm:rounded-md"
          >
            <FaArrowLeftLong />
            Previous Episode
          </button>
          <button
            onClick={() => handleNavigate(+1)}
            disabled = {parseInt(currentEpisode) >= data?.local?.epCount}
            className="flex items-center gap-2 md:px-3 md:py-1 px-2 lg:px-5 lg:py-2 text-xs sm:text-sm bg-anime-cyan hover:bg-purple-500 sm:rounded-md"
          >
            Next Episode
            <FaArrowRightLong />
          </button>
        </div>

        <div className="bg-[#262639] flex rounded-md">
          <button
            onClick={() => setLanguage("sub")}
            className={`${language === "sub" ? "bg-anime-primary" : "hover:bg-anime-text/20"} text-xs sm:text-sm px-2 md:px-3 md:py-1 rounded-md lg:px-5 lg:py-2`}
          >
            Sub
          </button>
          <button
            onClick={() => setLanguage("dub")}
            className={`${language === "dub" ? "bg-anime-primary" : "hover:bg-anime-text/20"} text-xs sm:text-sm px-2 md:px-3 md:py-1 rounded-md lg:px-5 lg:py-2`}
          >
            Dub
          </button>
        </div>

        <button className="flex items-center gap-1 hover:bg-anime-text/20 px-2 md:px-3 md:py-1  lg:px-5 lg:py-2 text-sm rounded-md font-bold">
          <IoInformationCircle className="text-anime-text text-xl" />
          Details
        </button>
      </div>
    </div>
  );
};

export default EpisodeTab;
