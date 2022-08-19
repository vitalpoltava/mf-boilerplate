type ModuleConfig = {
  URL: string,
  SCOPE: string,
  MODULE: string,
}

type Config = {
  LIST: ModuleConfig,
  FORM: ModuleConfig,
  GET_TOKEN_URL: string,
}

type TokenHttpResponse = {
  inputToken: string,
  authToken: string,
}

type Data = { [key: string]: string };
