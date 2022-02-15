import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com";

export const fetchApi = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      "x-rapidapi-host": "bayut.p.rapidapi.com",
      "x-rapidapi-key": "fdb344ac5cmsh13abfe6878f9443p1d3e96jsna75b6543c843",
    },
  });
  return data;
};
