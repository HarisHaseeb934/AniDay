import { createContext, useContext } from "react";
import { useLocalStorage } from "./useLocalStorage";

const FavouritesContext = createContext(null);

export const Favourites = ({ children }) => {
  const [favourties, setFavourites] = useLocalStorage("favourites", []);
  return <FavouritesContext value={{favourties, setFavourites}}>{children}</FavouritesContext>;
};

export const useFavourites = () => {
  const context = useContext(FavouritesContext);
  if (context === null) {
    throw new Error("Component Must be in Favourite Context");
  }
  return context;
};

export default useFavourites;
