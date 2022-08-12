import {BehaviorSubject} from "rxjs";

const Config = {
  LIST_URL: "http://localhost:3001/remoteEntry.js",
  LOGIN_FORM_URL: "http://localhost:3003/remoteEntry.js",
  LOGIN_FORM: {
    Card: "Card",
    Popup: "Popup",
  }
}

export const AppState = {
  token$: new BehaviorSubject<string>("No token"),
  isLoggedIn: false,
  loginFormType: Config.LOGIN_FORM.Popup,
}

export default Config;
