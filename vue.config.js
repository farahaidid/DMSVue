const path = require("path");
const webpack = require("webpack");

module.exports = {
   publicPath: process.env.NODE_ENV == "production" ? "/" :  "/",
	transpileDependencies: [
      "vue-echarts",
      "resize-detector"
   ],
   configureWebpack: {
      resolve: {
         alias: {
            "vue$": "vue/dist/vue.esm.js",
            "@": path.resolve(__dirname, "src/"),
            Components: path.resolve(__dirname, "src/components/"),
            Constants: path.resolve(__dirname, "src/constants/"),
            Views: path.resolve(__dirname, "src/views/"),                
         },
         extensions: ["*", ".js", ".vue", ".json"]
      },
      plugins: [
            //jquery plugin
         new webpack.ProvidePlugin({
               $: "jquery",
               jquery: "jquery",
               "window.jQuery": "jquery",
               jQuery: 'jquery',
               Popper: ['popper.js', 'default']
         })
      ]
   }
}