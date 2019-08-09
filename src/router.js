import Vue from 'vue'
import VueRouter from 'vue-router'


import Home from './components/Home'
import AllUsers from './components/AllUsers'
import AddUser from './components/AddUser'
import UpdateUser from './components/UpdateUser'
import SearchUser from './components/SearchUser'
import Login from './components/Login'
import Admin from './components/Admin'
import AdminMsg from './components/AdminMsg'
import AdminSetting from './components/AdminSetting'
import UserDetail from './components/UserDetail'
import NotFound from './components/NotFound'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    alias: 'home',
    component: Home,
    redirect: '/all',
    children: [{
        path: '/all',
        name: 'all',
        component: AllUsers,
      },
      {
        path: '/add',
        component: AddUser
      },
      {
        path: '/update',
        component: UpdateUser,
        children:[
          { 
            path: '/update/:uid',
            name: 'update',
            component: UpdateUser,

           }
        ]
      },
      {
        path: '/search',
        component: SearchUser
      },
      {
        path: '/admin',
        component: Admin,
        children: [{
          path: '/admin/msg',
          name: 'AdminMsg',
          component: AdminMsg
        },
        {
          path: '/admin/set',
          component: AdminSetting
        }]
      },
      {
        path: '/user/:uid',
        name: 'user',
        component: UserDetail,
      },
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
  }, 
  {
    path: '*',
    component: NotFound,
  }
]

export default new VueRouter({
  mode: 'history',
  routes
})