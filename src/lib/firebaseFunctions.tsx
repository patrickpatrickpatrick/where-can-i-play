import { postData } from "./apiFunctions";
import { BACKEND_URL } from './globals';

export const getArcades = (gameId: string): Awaited<Promise<any>> => postData(`${BACKEND_URL}arcades`, {
    gameId
}).then((data) => {
    return data.results;
});