const host = (typeof window === "undefined" && process.env.DEV_HOSTNAME) || "localhost"

module.exports = {
  moduleFederationPlugin: {
    name: "service",
    file: {
      name: "serviceManifest",
      extension: "js",
    },
  },
  devServer: {
    host,
    port: 3000,
  },
}
