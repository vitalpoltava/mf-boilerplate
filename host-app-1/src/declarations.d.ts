declare module "service/Utils";
declare module "service/Configs";

type Events = {
  EXT_FORM_SENT: string,
  EXT_LOGIN_SENT: string,
  EXT_BUTTON_CLICK: string,
  UPDATE_AUTH_TOKEN: string,
}

type TokenHttpResponse = {
  inputToken: string,
  authToken: string,
}

type Data = { [key: string]: string };
