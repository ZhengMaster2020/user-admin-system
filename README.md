# users-admin-system 用户管理系统 
<a href="https://github.com/vuejs/vue">
    <img src="https://img.shields.io/badge/vue-2.6.10-brightgreen.svg" alt="vue">
  </a>
<a href="https://github.com/ElemeFE/element">
    <img src="https://img.shields.io/badge/element--ui-2.11.1-brightgreen.svg" alt="element-ui">
  </a>
  <a href="https://github.com/vuejs/vue-router/releases/tag/v3.0.7">
    <img src="https://img.shields.io/badge/vue--router-3.0.7-brightgreen" alt="vue-router">
  </a>
  <a href="#">
    <img src="https://img.shields.io/github/license/mashape/apistatus">
  </a>
<a href="https://github.com/ZhengMaster2020/user-admin-system/releases">
  <img src="https://img.shields.io/github/release/ZhengMaster2020/user-admin-system" alt="github release">
</a>

<p >
  基于Vue 2.x + Element UI 完成的用户管理系统,管理用户的相关信息,可以进行用户相关信息的增删该查(CRUD)操作,对于刚入门Vue的小伙伴来说是一个比较系统比较好的加深知识理解与实践的项目.
</p>

## 技术栈

+ 本项目是基于Vue官方提供的脚手架工具[vue-cli 3.x](https://cli.vuejs.org/zh/)构建的
+ 框架: Vue 2.6
+ 前端路由: Vue-Router 3.0.7
+ 状态管理: Vuex 3.1.1
+ 组件库: [ElementUI 2.11.1](https://element.eleme.cn/#/zh-CN)
+ 网络请求库: [axios](https://github.com/axios/axios)以及 vue封装axios的库**vue-axios**
+ 数据模拟: [easy-mock](https://easy-mock.com/login)


## 实现功能
1.  - [x] 使用Element UI构建布局以及像页面以及组件的编写
2. 登录功能 
3. 使用RESTFul API获取easy-mock模拟数据等
4. 查看特定用户详情信息
5. 新增用户信息
6. 删除指定用户信息
7. 更新用户相关信息
8. 使用vue-router进行路由跳转以及实现SPA功能等相关功能
9. 使用vuex进行组件数据状态的管理
   
## 项目截图
### 登录
![loginImages](https://github.com/ZhengMaster2020/user-admin-system/blob/master/screenshots/user-admn-login.png)
### 所有用户信息界面
![allUsersImages](https://github.com/ZhengMaster2020/user-admin-system/blob/master/screenshots/user-admin-usermsg.png)
## 项目步骤
```
npm install
```

### 项目编译以及热更新
```
npm run serve
```

### 打包压缩项目
```
npm run build
```

### 测试项目
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
