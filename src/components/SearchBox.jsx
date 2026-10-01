import { IoIosSearch } from "react-icons/io";

const SearchBox = () => {
  return (
    <form
      action=""
      className="flex items-center border-anime-muted border bg-anime-bg rounded-3xl px-1 py-1 sm:m-auto"
    >
      <input
        type="text"
        className="text-anime-text text-[10px] sm:text-xs md:text-sm outline-none text-sm pl-3 sm:pl-4 sm:w-sm md:w-lg lg:w-xl"
        placeholder="Search anime..."
      />
      <button className="p-1 size-5 sm:size-7 flex items-center justify-center bg-anime-cyan rounded-full">
        <IoIosSearch className="text-lg text-anime-text  " />
      </button>
    </form>
  );
};

export default SearchBox;
