import Vue from 'vue'
import VueRouter from 'vue-router'


import Home from './components/Home'
import AddUser from './components/AddUser'
import DeleteUser from './components/DeleteUser'
import UpdateUser from './components/UpdateUser'
import SearchUser from './components/SearchUser'

Vue.use(VueRouter)

const routes  = [
    {path: '/', component: Home },
    { path: '/add', component: AddUser },
    { path: '/delete', component: DeleteUser },
    { path: '/update', component: UpdateUser },
    { path: '/search', component: SearchUser },
]

export default new VueRouter({
  mode: 'history',
  routes
})