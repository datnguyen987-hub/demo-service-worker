const path = require("path");
function resolve(dir) {
  return path.join(__dirname, dir);
}
module.exports = {
  pwa: {
    workbox: {
      config: {
        debug: true
      }
    },
    //workboxPluginMode: 'GenerateSW',
    workboxPluginMode: 'InjectManifest',
    workboxOptions: {
      swSrc: 'src/service-worker.js'
    }
  },
  productionSourceMap: false,
  outputDir: 'dist',
  configureWebpack: {

  },

  chainWebpack: config => {
    // config.resolve.alias.set("@$", resolve("src")).set("@views", resolve("src/views"));
    config.resolve.alias.set("@$", resolve("src"))
  },

  css: {
    loaderOptions: {
      less: {
        modifyVars: {},
        javascriptEnabled: true
      }
    }
  },
  assetsDir: "static",
  runtimeCompiler: true
};
