import Vue from 'vue'
import Router from 'vue-router'
import Index from "@/components/index"
import List from "@/components/List"
import Search from "@/components/Search"
Vue.use(Router)
export default new Router({
  mode: 'history',
  routes: [
    {
      path:'/',
      redirect:'/recomment'
    },
    {
      path: '/recomment',
      name: 'Index',
      component: Index
    },{
      path: '/list',
      name: 'List',
      component: List
    },{
      path: '/search',
      name: 'Search',
      component: Search
    }]
})
