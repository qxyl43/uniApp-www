# uni-app-base

## 项目构建

* 通过HBuilderX可视化界面创建的（HBuilderX：[官方IDE下载地址](http://www.dcloud.io/hbuilderx.html)）
``` bash
|-- api 与后端交互的接口
|-- common 存放公共资源文件
|-- components 组件文件存放目录，放可复用的组件
|-- pages 业务页面文件存放目录
|-- store 存放vuex相关文件
|-- static 存放应用引用静态资源（如图片、视频等）的地方，注意：静态资源只能存放于此
    |-- mp-wexin
	|	|-- a.png
    |-- a.png      
|-- main.js
|-- App.vue 应用配置，用来配置App全局样式以及监听应用的生命周期
|-- manifest.json 配置应用名称、appid、logo、版本等打包信息
|-- pages.json 配置页面路由、导航条、选项卡等页面类信息
|-- uni.scss
```

* 通过vue-cli命令行方式快速创建的【注意：可以用vue-cli脚手架创建项目，但是不能开发App，只能发布小程序和H5。开发APP必须使用HBX软件】
 ``` bash
 |-- dist -> 存放通过build编译的各个平台代码
 |-- node_modules 项目依赖包模块
 |-- public 放置的为公共文件，比如index.html文件，为项目的生成模板，我们写的vue的代码，在webpack打包项目的时候，最后都会基于该模板转换为浏览器可读的三大件：html+javascript+css    
 |-- src 存放通过HBuilderX可视化界面创建的的所有目录，为源码目录
 |-- .gitignore git上传需要忽略的文件格式
 |-- babel.config.js ES6语法编译配置
 |-- package.json 项目基本信息
 |-- package-lock.json 锁定安装时的包的版本号，并且需要上传到git，以保证其他人在npm install时大家的依赖能保证一致
 |-- postcss.config.js postcss-loader 的配置文件名，通过js对 CSS 进行处理
 |-- README.md 项目说明
 ```
## [项目运行](https://uniapp.dcloud.io/quickstart?id=%E8%BF%90%E8%A1%8Cuni-app)
* 介绍了多平台运行步骤
* 运行遇到的问题以及解决方法

## [官方网站](https://uniapp.dcloud.io)
* 介绍uni-app如何使用和项目基本框架
* uni-app可使用条件编译


## uni-app的UI框架 
* [uni-app内置组件,与微信内置组件相同](https://ext.dcloud.net.cn/)
* [扩展组件](https://uniapp.dcloud.io/component/README) 将组件复制到component文件夹中。
  [扩展组件支持单个从插件市场下载，也支持npm整体引入uni ui](http://ext.dcloud.net.cn/plugin?id=55)
  * 注意事项：
  * uni-ui 目前支持编译到：H5、App、小程序
  * 可以使用 npm 的安装使用方式，也可下载相关组件直接使用，组件下载地址见上表
  * uni-ui 不支持使用 Vue.use() 的方式安装
  * uni-ui 依赖 scss，若是 HBuilderX 中创建的 uni-app 项目，需要在 HBuilderX 中安装 scss 插件；如果是使用 cli 创建的 uni-app 项目，需要安装 node-sass 和 sass-loader
* [更多的ui框架](https://ext.dcloud.net.cn)

## 安装插件
* 通过HBuilderX可视化界面创建的，使用HBuilderX 菜单栏 -> 工具 -> 插件安装
* 通过vue-cli命令行方式快速创建的，使用npm安装依赖包，将依赖包复制到项目中使用

## [uni-app与HTML的区别](https://www.jianshu.com/p/2160b8193282)
