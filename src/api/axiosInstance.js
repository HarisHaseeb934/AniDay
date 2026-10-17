import axios from "axios";

const api = axios.create({
  baseURL: "https://anipub.org",
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

export const getSearchData = async (value) => {
  const response = await api.get(`/api/search/${value}`);
  return response?.data;
};

export const getLatest = async (currentPage = 1) => {
  const latestAnimeId = await api.get(`/api/getlast`);
  const idArray = Array.from({ length: latestAnimeId?.data }, (_, i) => i + 1);
  const Page = 20;
  const Pages = [];
  // for(let start = 1; start <= idArray.length; start += Page){
  //   let end = Math.min(start + Page - 1, idArray.length)
  //   Pages.push({start, end})
  // }
  for (let start = idArray.length; start > 0; start -= Page) {
    let end = start - Page + 1;
    Pages.push({ start, end });
  }
  // console.log(Pages)
  const activePage = Pages[currentPage - 1];
  // console.log(activePage)
  const currentPageIds = idArray.filter(
    (id) => id <= activePage.start && activePage.end <= id,
  );
  currentPageIds.sort((a, b) => b - a);

  const response = await Promise.all(
    currentPageIds.map(async (id) => await api.get(`/api/info/${id}`)),
  );
  return response.map((res) => res.data);
};

export const getSortData = async (filter) => {
  console.log(filter);
  const response = await api.get(`/api/sort`, { params: filter });
  return response.data;
};
