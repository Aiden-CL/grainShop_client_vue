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

创建本地仓库(有三个区)

创建远程仓库

将本地仓库和远程仓库关联起来

在本地库代码有更新推送(push)到远程仓库

远程仓库代码有更新拉取(pull)到本地仓库

如果先有远程仓库需git clone


