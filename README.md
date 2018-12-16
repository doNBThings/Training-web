# training-web

## 介绍

培训系统前端项目，包含所有web端页面，页面跳转控制。通过ajax请求后端服务获取数据。

## 包含技术

- js框架：vuejs
- vue组件通信框架：vuex
- 前端路由框架：vue-router
- ajax框架：axios
- ui框架：element-ui （开发时使用的组件详见：http://element.eleme.io/#/zh-CN/component/installation）
- vue脚手架：vue-cli
- es6转换框架：babel
- 打包框架：webpack
- js语法检查框架：eslint

## 安装步骤

1. 安装node.js
2. 安装cnpm
3. 下载本项目
4. 在项目路径下执行 cnpm install（解释：自动下载项目依赖）
5. 在项目路径下执行 cnpm run dev（解释：启动前端项目）
6. 在浏览器中输入 http://localhost:8081
7. 注：开发时修改内容，不需重启，此框架会自动刷新，浏览器会自动变为最新的内容

## 开发方式
0. 第一次开发新模块需要配置，之后不需要（在config\index.js 中 proxyTable 配置模块请求的转发规则 如：/api/test1）
1. 在src\components\模块名 下新增.vue文件（如：src\components\test1\first.vue）
2. 在写ajax请求后端数据时注意要在后端请求的前面上加上 /api/模块名 （如：后端请求/first/all 在前端工程改为 /api/test1/first/all）
3. 在src\router\index.js 中routes配置路由规则(如：first)