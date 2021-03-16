# grain_client项目说明书

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


### public文件夹 = 公共资源文件夹(不受webpack影响)

打包后最终会打包到dist文件夹下(`npm run build`) -> 不会通过webpack进行压缩 原封不动的拷贝到dist文件夹里

### 配置文件

.gitignore -> 用git托管时 不想被托管的文件需要配置 配置忽略文件

babel.config.js -> 可选的配置文件

src-assets:组件的公共静态资源 受webpack影响

src-components:公共非路由组件

src-pages/views:路由组件

### 项目配置

vue-cli配置参考：`https://cli.vuejs.org/zh/config/#vue-config-js`

vue.config.js -> 配置webpack在此文件夹中配置 脚手架和webpack交互的桥梁(webpack的补充文件)

@是目录src的绝对路径的别名 webpack内部配置好的
```js
import App from '@/App'
```
### git基本操作

创建本地仓库(工作区 暂存区 仓库区) `git init`

创建远程仓库 `new repository`

将本地仓库和远程仓库关联起来 `git remote add origin git@github.com:Aiden-CL/grainShop_client_vue.git`

在本地库代码有更新推送(push)到远程仓库 `git add .`+`git commit -m"commentByYourself"`+`git push -u origin master`

远程仓库代码有更新拉取(pull)到本地仓库 `git pull`

如果先有远程仓库需 `git clone "address" [filename]`

### 项目分析

静态组件拆分：定义 注册 使用

动态：初始化页面展示 交互

#### 静态页面

header和footer是非路由组件 中间部分是路由组件 一般变化的都是路由组件在单页面应用里

路由组件：点击切换 非路由组件：进入页面就有

切换时页面不刷新 请求数据通过ajax请求

路由组件和非路由组件的区别：
1. 注册时：非路由组件是注册在要使用的组件当中 路由组件是要在路由配置中注册的
2. 使用时：非路由组件使用注册的组件标签 路由组件使用声明式导航(router-link,router-view)和编程式导航来使用(push replace router-view)
3. 生命周期：路由组件在切换的时候 会销毁重建(keep-alive) 而非路由组件不会

##### 非路由组件

Header和Footer

##### 路由组件(pages) -> 路径和组件的映射关系

路由组件的注册过程：
1. 安装路由器 `npm i vue-router`
2. 引入并声明使用vue-router插件
3. 必须暴露路由器对象

登录

注册

首页

搜索

#### 函数的防抖和节流

按钮添加回调：10s点击按钮100次

正常执行：100次 每次都执行

函数防抖：把多次执行变为一次执行 前面所有的执行次数取消 只执行最后一次

函数节流：把多次执行变为少量执行 每秒执行一次 最后执行由100次变为10次 默认拖延执行(设置秒数之后才执行)
```js 
//是否在时间间隔之前执行函数 trailing 只写trailing时默认值为leading:true
//是否在时间间隔之后执行函数 leading
//默认值都是true
```

#### mock

生成随机数据 拦截ajax请求 将请求转发到本地



