const host = (typeof window === "undefined" && process.env.DEV_HOSTNAME) || "localhost"

module.exports = {
  moduleFederationPlugin: {
    name: "remotelist",
    file: {
      name: "listManifest",
      extension: "js",
    },
  },
  devServer: {
    host,
    port: 3001,
  },
}
