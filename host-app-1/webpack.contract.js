const host = (typeof window === "undefined" && process.env.DEV_HOSTNAME) || "localhost"

module.exports = {
  moduleFederationPlugin: {
    name: "host",
    file: {
      name: "hostManifest",
      extension: "js",
    },
    remote: {
      service: process.env.SERVICE_URL || "service@http://localhost:3000/serviceManifest.js",
    },
  },
  devServer: {
    host,
    port: 3004,
  },
}
