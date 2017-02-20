
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry:{
      
      "app" : "./src/app.js"
  } ,
  output: {
    filename: "./dist/[name].bundle.js"
  },
  
  module:{
    loaders:[
  		{
			test: /\.css$/,
			loader: 'style-loader!css-loader'
		},
        {
            test: /\.tpl\.html$/,
            loader: 'ng-cache-loader'
        },
        {
            test: /\.sass$/,
            loader: "style-loader!css-loader!sass-loader" // compiles Sass to CSS 
        },
        {
            test: /\.json$/,
            loader: 'file-loader?name=data/[name].[ext]'
        },
        {
            test: /\.(jpe?g|png|gif|svg|eot|woff|ttf|svg|woff2)$/,
            loader: "file-loader?name=[name].[ext]" 
        }
        ]
   },
   plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
        }),
    ],
    watch: true
};