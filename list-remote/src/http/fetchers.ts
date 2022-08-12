import Config from "../configs";
let authToken = "";

export const setToken = (token: string) => authToken = token;
export const getBooks = () => fetch(Config.GET_BOOKS_URL, {
  headers: {
    "Authorization": `Bearer ${authToken}`
  },
}).then((res) => res.json());
