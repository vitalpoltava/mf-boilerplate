import Config from "@/configs";

let authToken = "";

export const updateAuthToken = (token$: IterableIterator<LoginResponse>) => token$ && token$.next().value;
export const setToken = (token: string) => authToken = token;
export const getBooks = () => fetch(Config.GET_BOOKS_BFF_URL,
  {headers: {"Authorization": `Bearer ${authToken}`},})
  .then((res) => res.json());
