export const getMicrofrontendUrls = () => Promise.resolve(() => [
  "http://localhost:3000/remoteEntry.js", // service-discovery
  "http://localhost:3004/remoteEntry.js", // host-app-1
  "http://localhost:3005/remoteEntry.js", // host-app-2
  "http://localhost:3001/remoteEntry.js", // list-remote
  "http://localhost:3002/remoteEntry.js", // form-remote
]);
