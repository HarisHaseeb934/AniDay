import { useEffect, useState } from "react";

export const useLocalStorage = (key, initailValue) => {
  const [favourties, setFavourites] = useState(() => {
    try {
      const items = localStorage.getItem(key);
      return items ? JSON.parse(items) : initailValue;
    } catch (error) {
      console.log(error);
      return initailValue;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(favourties));
    } catch (error) {
      console.log(error);
    }
  }, [key, favourties]);

  return [favourties, setFavourites];
};
