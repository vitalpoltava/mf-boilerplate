const Config = {
  LIST_URL: "http://localhost:3001/remoteEntry.js",
  LOGIN_FORM_URL: "http://localhost:3003/remoteEntry.js",
  EXT_FORM_URL: "http://localhost:3002/remoteEntry.js",
  GET_TOKEN_URL: "http://localhost:3007/login",
  LOGIN_FORM: {
    Card: "Card",
    Popup: "Popup",
  }
}

export const AppState = {
  token$: undefined,
  isLoggedIn: false,
  loginFormType: Config.LOGIN_FORM.Card,
}

export default Config;
