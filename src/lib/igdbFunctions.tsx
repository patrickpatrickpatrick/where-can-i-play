import { postData } from "./apiFunctions";
import { BACKEND_URL } from './globals';

export const getGamesFromIgdb = (query: string): Awaited<Promise<any>> => {
  return postData(`${BACKEND_URL}games`, {
    query,
  }).then((data) => {
    return data;
  });
};

export const getGameFromIgdb = (id: string): Awaited<Promise<any>> => {
  return postData(`${BACKEND_URL}game/${id}`, {
    id,
  }).then((data) => {
    return data;
  });
};