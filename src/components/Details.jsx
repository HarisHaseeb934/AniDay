import { IoInformationCircle } from "react-icons/io5";
import { GrNotes } from "react-icons/gr";

const Details = ({ data }) => {
  return (
    <section className="w-full max-w-[90%] m-auto bg-anime-surface text-anime-text px-5 py-7 mt-5">
      <h1 className="flex items-center gap-1 text-2xl font-bold">
        <IoInformationCircle className="text-anime-cyan text-2xl" />
        Details
      </h1>
      <p className="font-bold text-anime-text/80">
        Synonyms:
        <span className="text-anime-text font-normal text-sm"> {data?.local.Synonyms}</span>
      </p>
      <p className="font-bold text-anime-text/80">
        Aired:
        <span className="text-anime-text font-normal text-sm"> {data?.local.Aired}</span>
      </p>
      <p className="font-bold text-anime-text/80">
        Premiered:
        <span className="text-anime-text font-normal text-sm"> {data?.local.Premiered}</span>
      </p>
      <p className="font-bold text-anime-text/80">
        Duration:
        <span className="text-anime-text font-normal text-sm"> {data?.local.Duration}</span>
      </p>
      <p className="font-bold text-anime-text/80">
        Status:
        <span className="text-anime-text font-normal text-sm"> {data?.local.Status}</span>
      </p>
      <p className="font-bold text-anime-text/80"> 
        Rating:
        <span className="text-anime-text font-normal text-sm"> {data?.local.MALScore}</span>
      </p>
      <p className="font-bold text-anime-text/80">
        Studios: 
        <span className="text-anime-text font-normal text-sm"> {data?.local.Studios}</span>
      </p>
      <p className="font-bold text-anime-text/80">
        Producers: 
        <span className="text-anime-text font-normal text-sm"> {data?.local.Producers}</span>
      </p>
      <div className="flex gap-2 flex-wrap">
        <span className="text-anime-text font-normal text-sm ">Genres:</span>{" "}
         {data?.local.Genres.map((genre, i) => (
          <button key={i} className="bg-anime-cyan rounded-2xl px-2 font-semibold">{genre}</button>
        ))}
      </div>
      <div className="mt-5">
        <h2 className="flex items-center gap-1 text-2xl font-bold">
          <GrNotes className="text-anime-cyan text-xl " />
          Synopsis
        </h2>
        <p className="text-sm">{data?.local.DescripTion}</p>
      </div>
    </section>
  );
};

export default Details;
