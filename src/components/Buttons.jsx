import { useState } from "react";
import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

const TAB_SIZE = 100;

const Buttons = ({ episodes, currentEpisode, _id }) => {
  const [activeTab, setActiveTab] = useState(0);

  const totalEpisodes = episodes.length;
  const tabs = [];

  for (let start = 1; start <= totalEpisodes; start += TAB_SIZE) {
    const end = Math.min(start + TAB_SIZE - 1, totalEpisodes);
    tabs.push({ label: `${start} - ${end}`, start, end });
  }

  const activeRange = tabs[activeTab];
  const currentTabEpisodes = episodes?.filter(
    (e) => e.ep >= activeRange.start && e.ep <= activeRange.end,
  );

  return (
    <aside className="w-full md:w-2xs bg-[#0a0c11] p-5 order-2 md:order-1">
      <h1 className="text-anime-text font-bold my-2 flex items-center gap-1 "><GiHamburgerMenu className="text-sky-700 text-xl"/>Episode</h1>
      <div className="flex overflow-x-auto [&::-webkit-scrollbar]:h-1 [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-track]:bg-anime-surface [&::-webkit-scrollbar-thumb]:bg-anime-cyan gap-2 my-3">
        {tabs?.map((tab, i) => {
          return (
            <button
              key={i}
              onClick={() => setActiveTab(i)}
              className={` ${i === activeTab ? "bg-anime-cyan" : "bg-anime-surface"} text-nowrap text-white px-3 text-sm py-1 font-semibold rounded-xs`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>
      <div className="grid grid-cols-5 gap-2 rounded-lg">
        {currentTabEpisodes.map((episode, i) => {
          return (
            <NavLink
              key={i}
              to={`/AniPlayer/${_id}?episode=${episode.ep}`}
              className={`${currentEpisode == episode.ep ? "bg-anime-cyan" : "bg-anime-surface"} text-white text-xs flex items-center p-1 justify-center font-semibold`}
            >
              {episode.ep}
            </NavLink>
          );
        })}
      </div>
    </aside>
  );
};

export default Buttons;
