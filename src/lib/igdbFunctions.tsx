const API_URL = "https://api.igdb.com/v4/";

async function postData(url = "", data = {}) {
    const response = await fetch(url, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data), // body data type must match "Content-Type" header
    });

    return response.json(); 
}

export const getIgdbToken = (client_id: string, client_secret: string): Promise<string> => fetch(
    `https://id.twitch.tv/oauth2/token?client_id=${client_id}&client_secret=${client_secret}&grant_type=client_credentials`,
    {
        method: "POST"
    }
)
.then(data => data.json())
.then(json => json["access_token"]);

export const getGame = (accessToken: string, clientId: string, query: string): Awaited<Promise<any>> => postData("http://localhost:3005/game", {
    accessToken,
    clientId,
    query,
}).then((data) => {
    return data;
});