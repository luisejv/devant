const withPlugins = require("next-compose-plugins");
const withImages = require("next-images");
const webpack = require("webpack");
module.exports = withPlugins([withImages], {
  webpack: (config) => {
    config.plugins.push(
      new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        "window.jQuery": "jquery",
      })
    );
    return config;
  },
});
