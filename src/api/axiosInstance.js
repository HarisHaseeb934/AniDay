import axios from "axios"

const api = axios.create({
    baseURL: 'https://anipub.xyz'
})

export const getBig3 = async() => {
    const responses = await Promise.allSettled([
        api.get("/api/info/one-piece"),
        api.get("/api/info/naruto"),
        api.get("/api/info/bleach"),
    ])
    return responses?.map(res => res.value.data)
}

export const getAnimeEpisodes = async(id) =>{
    const response = await api.get(`/v1/api/details/${id}`)
    return response?.data;
}