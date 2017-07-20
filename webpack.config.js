var webpack=require('webpack');
var __PATH=require('./path.config.js');
//var glob = require('glob');
//node的glob模块允许你使用*等符号，来写一个glob规则，像在shell里一样，获取匹配对应规则的文件。


var config = process.env.NODE_ENV === 'prod' ? require('./webpack.prod.config.js') : require('./webpack.dev.config.js');

console.log('NODE_ENV is '+process.env.NODE_ENV);

config.module={
	loaders:[
       	{
	         test: /\.scss$/,
	         include: __PATH.APP,
	         exclude: /node_modules/,
	         loader: "style-loader!css-loader!postcss-loader!sass-loader"
       	},
    	{
	        test: /\.(png|jpg)$/,
	        include: __PATH.APP,
	        exclude: /node_modules/,
	        loader: 'url-loader'/*?limit=40000*/
  		},
  		{
		 	 test: /\.js[x]?$/,
		 	 include: __PATH.APP,
	         exclude: /node_modules/,
	         loader: 'react-hot-loader!babel-loader'
    	}
	]
};
config.output={
		path: __PATH.BUILD,
	    publicPath: __PATH.PUBLIC,
	    filename: __PATH.OUTPUT_NAME
	};
config.resolve = {
    extensions: ['.js', '.jsx'],
    alias: {
      //    "react":path.resolve(__dirname, 'client/lib/react.min.js'),
    }
  };
module.exports=config;
