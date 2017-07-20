//定义了一些文件夹的路径
var path=require('path');
var __path={
	ENTRY: path.resolve(__dirname, 'app/resource/index.js'),
	APP: path.resolve(__dirname, 'app/'),
	COMPONENT : path.resolve(__dirname, 'app/resource/components/'),
	BUILD : path.resolve(__dirname, 'client/dist/'),
	OUTPUT_NAME:"bundle.js",
	PUBLIC:"/"
}

module.exports=__path;