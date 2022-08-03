import Config from "../configs";

export const getBooks = () => fetch(Config.GET_BOOKS_URL).then((res) => res.json());
