## webpack+react 配置说明

##  开始
安装依赖  

	npm install

开启express服务，浏览器自动跳转到http://localhost:3000(open-browser-webpack-plugin插件与热更新有冲突，原因不明，暂时不支持自动跳转打开)

    npm run start
支持热更新+自动刷新

其他模板文件请在浏览器中访问：

	http://localhost:3000/pagea
自动映射到根目录下的view文件夹下的pagea.html文件，且访问时无需输入后缀名。
##  构建
运行

    npm run build

自动在build目录生成压缩后的js文件和css文件。已设置默认不打包react和react-dom库，css默认补全前缀

## 项目结构


```
.
├── app                            # 程序源文件
│   ├── common                     # 公共资源
│   │     ├── img       
│   │     ├── scss 
│   │     └── util     
│   │           
│   ├── resource                    # 资源文件
│   │     ├──── components          # 组件jsx
│   │     │      ├── Tips.scss       
│   │     │      ├── Tips.jsx  
│   │     │      └── img
│   │     │
│   │     └───── container           # 组件外包文件（将所有组件组合在一起）
│   │              └── App.jsx           
│   │             
│   │                                               
│   │
│   └── index.js           	     # 入口js（只引入外包App.jsx）
│        
│
├── client                      # 构建后的文件目录
│   ├── dist                    # bundle.js目录
│   │                
│   └── lib                     # 依赖的第三方库
      
│
├── index.html                 # 默认模板文件
│
├── view                        # 其他模板文件
│   ├── pagea.html                  
│   └── pageb.html             
│      
│
├── server                     # 模拟后端接口数据（待补充）
│      ├         
│      └──  test.json
│                                  
│
├── path.config.js           # 项目资源路径配置文件
│
├── webpack.config.js        # webpack 默认配置文件
│
├── webpack.dev.config.js    # webpack 开发配置文件
│
├── webpack.prod.config.js   # webpack 生产配置文件
│
└── doc                      # 项目文档

```

### 4 其他说明

1. `webpack-dev-server`经测试只能实现自动刷新，对css文件可以实现热更新，但js文件是全刷新。对于`webpack-dev-middleware + webpack-hot-middleware + express`同样也是如此。
2. 其实`webpack-dev-server`就是官方通过封装 `webpack-dev-middleware + webpack-hot-middleware + express` 实现的，通过直接调用中间件，可以实现更多的个性化定制。
3. 关于HMR(hot module replacement), 其实是需要loader支持的，css-loader支持热更新，而普通的js loader是不支持的，如：babel-loader, 但是react-hot-loader是支持热更新的。这就是为什么react可以实现热更新，普通开发实现不了的原因。浏览器报错信息也可以看到：模块已经更新，但是模块处理器不知道如何更新。  

2017-06-03 补充 ：  

1. 支持sass, 开启dev下的sourceMap
2. 修改start指令为：cross-env NODE_ENV=dev node server.js,解决atom下的terminal运行时环境变量总是prod的bug
3. 添加PubSub，用户简单情况下组件间的通信