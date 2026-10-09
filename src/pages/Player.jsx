import { useParams, useSearchParams } from "react-router-dom";
import { getAnimeEpisodes } from "../api/axiosInstance";
import { useQuery } from "@tanstack/react-query";
import Loading from "../components/Loading";
import Buttons from "../components/Buttons";

export const Player = () => {
  const { id } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const currentEpisode = searchParams.get("episode") || 1;
  console.log("episode" + currentEpisode);
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["anime", id],
    queryFn: () => getAnimeEpisodes(id),
    staleTime: 5000,
  });

  const episodes = [
    ...(data?.local?.link !== undefined
      ? [{ ep: 1, src: data?.local?.link }]
      : []),
    ...(data?.local?.ep !== undefined
      ? data?.local?.ep.map((ep, i) => ({ ep: i + 2, src: ep.link }))
      : []),
  ];

  console.log("Episodes", episodes);
  console.log(episodes[parseInt(currentEpisode) - 1]);
  return (
    <div className=" bg-anime-bg">
      <div className="m-auto w-[90%] flex">
        <Buttons episodes={episodes} currentEpisode={currentEpisode} _id={id} />
        {/* <iframe src={episodes[currentEpisode + 1].src.replace("src=", "")} frameborder="0"></iframe> */}
        <div className="w-full max-w-5xl">
          <iframe
            src={episodes[parseInt(currentEpisode) - 1]?.src?.replace(
              "src=",
              "",
            )}
            frameborder="0"
            className="aspect-video w-full"
            allow="fullscreen"
          ></iframe>
        </div>
        {/* <div className="min-w-xs"></div> */}
      </div>
    </div>
  );
};
