import { postData } from "./apiFunctions";
import { BACKEND_URL } from './globals';
import { ArcadeWithAddress } from "./types";

export const getArcades = (gameId: number): Promise<ArcadeWithAddress[]> => postData(`${BACKEND_URL}arcades`, {
    gameId
}).then((data: ArcadeWithAddress[]) => {
    return data;
});