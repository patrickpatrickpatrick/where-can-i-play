import { postData } from "./apiFunctions";

const API_URL = "https://api.igdb.com/v4/";

export const getIgdbToken = (client_id: string, client_secret: string): Promise<string> => fetch(
    `https://id.twitch.tv/oauth2/token?client_id=${client_id}&client_secret=${client_secret}&grant_type=client_credentials`,
    {
        method: "POST"
    }
)
.then(data => data.json())
.then(json => json["access_token"]);

export const getGamesFromIgdb = (accessToken: string, clientId: string, query: string): Awaited<Promise<any>> => postData("http://localhost:3000/game", {
    accessToken,
    clientId,
    query,
}).then((data) => {
    return data;
});