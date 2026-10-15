import {
  replace,
  useLocation,
  useParams,
  useSearchParams,
} from "react-router-dom";
import { getAnimeEpisodeAndDetail } from "../api/axiosInstance";
import { useQuery } from "@tanstack/react-query";
import Loading from "../components/Loading";
import Buttons from "../components/Buttons";

import { useEffect, useState } from "react";
import EpisodeTab from "../components/EpisodeTab";
import Details from "../components/Details";

export const Player = () => {
  const { hash } = useLocation();
  const [language, setLanguage] = useState("sub");
  const { id } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();

  const currentEpisode = searchParams.get("episode") || 1;

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["anime", id],
    queryFn: () => getAnimeEpisodeAndDetail(id),
    staleTime: 5000,
  });

  console.log(data);

  useEffect(() => {
    
    if(hash){
      setTimeout(() => {
        const id = hash.replace("#","")
        const element = document.getElementById(id)
        console.log(element)

        element.scrollIntoView({
          behavior: "smooth",
        })
      },100)


    }
  }, [hash])

  const episodes = [
    ...(data?.local?.link !== undefined
      ? [{ ep: 1, src: data?.local?.link }]
      : []),
    ...(data?.local?.ep !== undefined
      ? data?.local?.ep.map((ep, i) => ({ ep: i + 2, src: ep.link }))
      : []),
  ];

  const episode = episodes[parseInt(currentEpisode) - 1]?.src?.replace(
    "src=",
    "",
  );
  const episodeLang = episode?.replace(/sub|dub/g, language);

  console.log(data);

  return (
    <div className=" bg-anime-bg">
      <div className="m-auto w-full max-w-[90%] flex flex-col md:flex-row ">
        <Buttons episodes={episodes} currentEpisode={currentEpisode} _id={id} />
        <div className="w-full  order-1 md:order-2">
          <iframe
            src={episodeLang}
            frameborder="0"
            className="aspect-video w-full"
            allow="fullscreen"
          ></iframe>
          <EpisodeTab
            data={data}
            currentEpisode={currentEpisode}
            language={language}
            setLanguage={setLanguage}
            _id={id}
          />
        </div>
      </div>
      <Details data={data} />
    </div>
  );
};
