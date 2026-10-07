import { FaPlay } from "react-icons/fa";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { NavLink } from "react-router-dom";

const HeroSectionMaterial = ({Name, Duration, Aired, epCount, DescripTion, _id}) => {
  return (
    <div className="relative flex p-8 sm:p-10 md:p-15 z-20 sm:w-xl flex-col gap-2 sm:gap-3 md:gap-4 lg:gap-5">
        <p className="border bg-anime-bg border-anime-cyan rounded-2xl w-[70px] sm:w-[120px] pr-1 text-[8px] sm:text-xs py-1 text-center text-anime-cyan font-bold">🔥 BIG 3</p>
        <h1 className="text-anime-text font-bold text-xl sm:text-2xl md:text-4xl lg:text-5xl font-heading">{Name}</h1>
        <div className="flex gap-3">
            <span className="text-anime-cyan border border-anime-cyan py-1 px-2 text-[8px] sm:text-xs rounded-lg font-semibold bg-anime-bg">{Duration}</span>
            <span className="text-anime-cyan border border-anime-cyan py-1 px-2 text-[8px] sm:text-xs rounded-lg font-semibold bg-anime-bg">{Aired}</span>
            <span className="text-anime-cyan border border-anime-cyan py-1 px-2 text-[8px] sm:text-xs rounded-lg font-semibold bg-anime-bg">EP {epCount}</span>
        </div>
        <p className=" relative z-20 line-clamp-[3/5] text-xs md:text-sm text-slate-300">{DescripTion.length > 200 ? DescripTion.slice(0,250) + "...": DescripTion}</p>
        <div className="flex gap-4">
            <NavLink to={`/AniPlayer/${_id}?episode=1`} className="cursor-pointer text-white font-bold bg-anime-cyan px-4 md:px-7 py-1 md:py-2 lg:py-3 rounded-3xl text-[10px] sm:text-sm flex items-center gap-2"><FaPlay/> Watch Now</NavLink>
            {/* <button></button> */}
            <button className="cursor-pointer text-white font-bold px-4 md:px-7 py-1 md:py-2 lg:py-3 rounded-3xl text-[10px] sm:text-sm border flex items-center gap-2"><IoMdInformationCircleOutline className="text-lg"/>Details</button>
        </div>
    </div>
  )
}

export default HeroSectionMaterial