import { postData } from "./apiFunctions";

export const getArcades = (gameId: string): Awaited<Promise<any>> => postData("http://localhost:3000/arcades", {
    gameId
}).then((data) => {
    return data.results;
});