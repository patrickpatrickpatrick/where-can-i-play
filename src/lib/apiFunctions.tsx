export const postData = async (url = "", data = {}, headers = {}) => {
  const response = await fetch(url, {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, *cors, same-origin
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
      ...headers
    },
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  });
  return response.json(); 
}