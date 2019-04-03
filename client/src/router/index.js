import Vue from "vue";
import Router from "vue-router";
import Index from "@/components/index";
import List from "@/components/List";
import Search from "@/components/Search";
import Toplist from "@/components/toplist";
import IndexList from "@/components/indexlist";
Vue.use(Router);
export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      redirect: "/recomment"
    },
    {
      path: "/recomment",
      name: "Index",
      component: Index
    },
    {
      path: "/list",
      name: "List",
      component: List
    },
    {
      path: "/search",
      name: "Search",
      component: Search
    },
    {
      path: "/toplist",
      name: "Toplist",
      component: Toplist
    },
    {
      path: "/indexlist",
      name: "IndexList",
      component: IndexList
    },
    {
      path: "*",
      redirect: "/recomment"
    }
  ]
});
