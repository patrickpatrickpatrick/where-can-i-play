import { postData } from "./apiFunctions";

const API_URL = "https://api.igdb.com/v4/";

export const getGamesFromIgdb = (query: string): Awaited<Promise<any>> => {
  return postData("http://localhost:3000/game", {
    query,
  }).then((data) => {
    return data;
  });
};