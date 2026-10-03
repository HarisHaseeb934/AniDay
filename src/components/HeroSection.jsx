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

  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <main className="relative">
      <div className="flex w-3xs bottom-7 sm:bottom-5 justify-between m-auto z-10 absolute left-1/2 -translate-x-1/2 px-2">
        <button
          ref={prevRef}
          className="cursor-pointer hover:scale-105 transition-all ease-in duration-100 hover:bg-blue-500 bg-blue-500/60 size-7 sm:size-10 rounded-full flex items-center justify-center text-white text-xl"
        >
          <IoIosArrowBack />
        </button>
        <button
          ref={nextRef}
          className="cursor-pointer hover:scale-105 transition-all ease-in duration-100 hover:bg-blue-500 bg-blue-500/60 size-7 sm:size-10 rounded-full flex items-center justify-center text-white text-xl"
        >
          <IoIosArrowForward />
        </button>
      </div>
       
    </main>
  );
};

export default HeroSection;
