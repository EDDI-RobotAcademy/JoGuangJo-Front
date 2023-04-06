const { defineConfig } = require('@vue/cli-service');
const port = process.env.VUE_APP_PORT || 8080;

module.exports = defineConfig({
  lintOnSave: false,
  transpileDependencies: [
    'vuetify'
  ],
  devServer: {
    port: port,
  }
});
