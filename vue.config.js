module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: '@import "@/assets/theme/main.scss";'
      }
    }
  }
}
