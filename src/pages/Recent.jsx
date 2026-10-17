import React from "react";
import RecentlyAddedAnime from "../components/RecentlyAddedAnime";

const Recent = () => {
  return (
    <section className="bg-[#06090f]">
      <RecentlyAddedAnime forHome={false} />
    </section>
  );
};

export default Recent;
