import { useState } from "react";
import { NavLink } from "react-router-dom";

const TAB_SIZE = 100;

const Buttons = ({ episodes, currentEpisode, _id }) => {
  const [activeTab, setActiveTab] = useState(0);
    
  const TotalEpisodes = episodes.length;
  const tabs = [];

  for (let start = 1; start <= TotalEpisodes; start += TAB_SIZE) {
    const end = Math.min(start + TAB_SIZE - 1, TotalEpisodes);
    tabs.push({ label: `${start}-${end}`, start, end });
  }

  const activeRange = tabs[activeTab];
  const currentTabEpisodes = episodes?.filter(
    (e) => e.ep >= activeRange.start && e.ep <= activeRange.end,
  );

  return (
    <aside>
      {tabs?.map((tab, i) => {
        return (
          <button
            key={i}
            onClick={() => setActiveTab(i)}
            className={` ${i === activeTab ? "bg-yellow-300" : "bg-red-500"}`}
          >
            {tab.label}
          </button>
        );
      })}
      <div>
        {currentTabEpisodes.map((episode) => {
          return (
            <NavLink
              to={`/AniPlayer/${_id}?episode=${episode.ep}`}
              className={
                currentEpisode == episode.ep ? "bg-red-200" : "bg-yellow-100"
              }
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
