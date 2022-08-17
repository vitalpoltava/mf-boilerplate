export const getMicrofrontendUrls = () => Promise.resolve(() => [
  "http://localhost:3000/remoteEntry.js", // root
  "http://localhost:3004/remoteEntry.js", // host-list
  "http://localhost:3005/remoteEntry.js", // host-alt
  "http://localhost:3001/remoteEntry.js", // list-remote
  "http://localhost:3003/remoteEntry.js", // login-remote
]);
