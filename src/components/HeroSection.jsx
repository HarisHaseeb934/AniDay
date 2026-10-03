import { Swiper, SwiperSlide } from "swiper/react";
import { getBig3 } from "../api/axiosInstance";
import { useQuery } from "@tanstack/react-query";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useRef } from "react";

const HeroSection = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["big3"],
    queryFn: getBig3,
  });

  const prevBtn = useRef(null);
  const nextBtn = useRef(null);

  return (
    <main className="relative">
      <div className="flex w-3xs bottom-7 sm:bottom-5 justify-between m-auto z-10 absolute left-1/2 -translate-x-1/2 px-2">
        <button
          ref={prevBtn}
          className="cursor-pointer hover:scale-105 transition-all ease-in duration-100 hover:bg-anime-cyan bg-blue-500/80 size-7 sm:size-10 rounded-full flex items-center justify-center text-white text-xl"
        >
          <IoIosArrowBack />
        </button>
        <button
          ref={nextBtn}
          className="cursor-pointer hover:scale-105 transition-all ease-in duration-100 hover:bg-anime-cyan bg-blue-500/80 size-7 sm:size-10 rounded-full flex items-center justify-center text-white text-xl"
        >
          <IoIosArrowForward />
        </button>
      </div>
      <Swiper
        modules={[Navigation, Autoplay, Pagination]}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = prevBtn.current;
          swiper.params.navigation.nextEl = nextBtn.current;
        }}
        navigation={{
          prevEl: prevBtn.current,
          nextEl: nextBtn.current,
        }}
        loop={true}
        pagination={true}
        autoplay={{ delay: 1000, disableOnInteraction: true }}
        className="h-[600px]"
      >
        {data?.map((data) => {
          console.log(data?.Cover)
          return (
            <SwiperSlide>
              <div
                className="bg-cover bg-center w-full h-full"
                style={{
                  backgroundImage: `url(${data?.Cover.startsWith("https://") ? data?.Cover : "https://4kwallpapers.com/images/walls/thumbs_3t/22064.jpg"})`,
                }}
              >
                hy
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </main>
  );
};

export default HeroSection;
