import React from "react";
import RecentlyAddedAnime from "../components/RecentlyAddedAnime";

const Recent = () => {
  return (
    <div className="bg-[#06090f]">
      <RecentlyAddedAnime forHome={false} />
    </div>
  );
};

export default Recent;
