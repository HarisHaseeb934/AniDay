import SearchBox from "../components/SearchBox";

const Header = () => {
  return (
    <header className="bg-anime-surface">
      <nav className="px-6 py-3 flex items-center justify-between sm:justify-normal">
        <div className="flex items-center gap-3">
          <div className="aspect-square">
            <img src="bg-remove.png" alt="Voyager" className="w-7 sm:w-9 md:w-13 flex-1" />
          </div>
          <div>
            <h1 className="text-anime-text font-heading font-extrabold text-md sm:text-lg md:text-2xl">
              Ani<span className="text-anime-cyan">Day</span>
            </h1>
            <p className="text-slate-200 text-[10px] sm:text-[13px] tracking-[3px] md:text-[16px] md:tracking-[5px] leading-2.5">Voyager</p>
          </div>
        </div>

        <SearchBox/>
      </nav>
    </header>
  );
};

export default Header;
