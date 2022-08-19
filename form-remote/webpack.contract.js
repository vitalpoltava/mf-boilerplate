const host = (typeof window === "undefined" && process.env.DEV_HOSTNAME) || "localhost"

module.exports = {
  moduleFederationPlugin: {
    name: "remoteform",
    file: {
      name: "formManifest",
      extension: "js",
    },
  },
  devServer: {
    host,
    port: 3002,
  },
}
