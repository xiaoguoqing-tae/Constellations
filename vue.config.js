module.exports = {
  publicPath: './',
  devServer: {
    disableHostCheck: true,
    proxy: {
      "/api": {
        target: "http://localhost:5555",
        changeOrigin: true,
        ws: true,
        secure: false,
        pathRewrite: {
          '^/api': '' 
        }
      },
    },
    overlay: {
      warnings: false,
      errors: false
    }
  },
  lintOnSave: false
}
