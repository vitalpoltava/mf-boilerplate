const Config: { [key: string]: any } = {
  REMOTE_NAME: "Books List App",
  DEFAULT_APP: "HOST_LIST",
  APPS: {
    HOST_LIST: {
      NAME: "Main List App",
      URL: "http://localhost:3004/remoteEntry.js",
    },
    HOST_ALT: {
      NAME: "Alt List App",
      URL: "http://localhost:3005/remoteEntry.js",
    },
  }
}

export default Config;
