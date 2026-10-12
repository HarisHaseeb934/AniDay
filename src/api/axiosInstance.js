import axios from "axios";

const api = axios.create({
  baseURL: "https://anipub.xyz",
});

export const getBig3 = async () => {
  const responses = await Promise.allSettled([
    api.get("/api/info/one-piece"),
    api.get("/api/info/naruto"),
    api.get("/api/info/bleach"),
  ]);
  return responses?.map((res) => res.value.data);
};

export const getAnimeEpisodes = async (id) => {
  const response = await api.get(`/v1/api/details/${id}`);
  return response?.data;
};

export const getAnimeDetails = async (id) => {
  const response = await api.get(`/anime/api/details/${id}`);
  return response?.data;
};

export const getAnimeEpisodeAndDetail = async (id) => {
  const response = await Promise.all([
    api.get(`/v1/api/details/${id}`),
    api.get(`/anime/api/details/${id}`),
  ]);
  const obj = response?.reduce((acc, res) => {
    acc = {
      ...acc,
      ...res?.data,
      local: { ...acc?.local, ...res?.data?.local },
    };
    return acc;
  }, {});

  return obj;
};
