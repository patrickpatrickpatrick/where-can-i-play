import { postData } from "./apiFunctions";

export const getArcades = (gameId: string): Awaited<Promise<any>> => postData("http://localhost:3005/arcades", {
    gameId
}).then((data) => {
    return data.results;
});