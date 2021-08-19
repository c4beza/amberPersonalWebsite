import VueRouter from 'vue-router'
import rightsidecolumn from "./components/rightside-column.vue";
import articleComp from "./components/article.vue";
var router = new VueRouter({
    routes:[
      {path:'/', redirect:'/home',component: rightsidecolumn},
      {path:'/article', component: articleComp},
      {path:'/home', component: rightsidecolumn},
    ],
    // linkActiveClass:'rightcolumn'
  })

  export default router;
