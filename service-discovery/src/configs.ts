const Configs: Config = {
  LIST: {
    URL: "http://localhost:3001/listManifest.js",
    SCOPE: "remotelist",
    MODULE: "./RemoteList",
  },
  FORM: {
    URL: "http://localhost:3002/formManifest.js",
    SCOPE: "remoteform",
    MODULE: "./RemoteForm",
  },
  GET_TOKEN_URL: "http://localhost:3007/login",
}

export default Configs;
