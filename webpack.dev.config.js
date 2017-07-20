var webpack=require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');
var autoprefixer = require('autoprefixer');
var __PATH=require('./path.config.js');
var config={};
//开启sourceMap,方便调试
config.devtool = '#cheap-module-source-map';
config.entry=[ //利用中间件实现热更新，reload=true配置如果热更新失败，强制刷新页面
     'webpack-hot-middleware/client?',/*path=http://localhost:3000/__webpack_hmr&reload=true*/
    __PATH.ENTRY
  ];

config.plugins=[
    new webpack.HotModuleReplacementPlugin(),　　//webpack热替换插件  
    
    //new HtmlWebpackPlugin(),
    //补全前缀
    new webpack.LoaderOptionsPlugin({
      options: { // pass stuff to the loader
          postcss: [autoprefixer()]
      }
    }),
    new webpack.NoEmitOnErrorsPlugin(), //允许错误不打断程序
    
    new webpack.NamedModulesPlugin(),// prints more readable module names in the browser console on HMR updates
    //自动打开浏览器 跟热更新会出现冲突，原因未知~~
    /*new OpenBrowserPlugin({
    		url: 'http://localhost:3000'
		}),*/
]


module.exports=config