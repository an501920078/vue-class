import Vue from 'vue'
import Router from 'vue-router'
import AllHome from '@/components/home/allhome.vue'
import Home from '@/components/home/home.vue'
import index from '@/components/home/index.vue'
import TableInfo from '@/components/home/TableInfo.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {path:'/',redirect:'/allhome/home'},
    {
      path: '/allhome',
      name: 'allhome',
      component: AllHome,
      children:[
        {
          path: '/allhome/home',
          name: 'home',
          component: Home
        },
        {
          path:"/allhome/index/:id",
          name:"index",
          component:index
        },
      ]
    },
    
    {
      path:"/tableinfo/:id",
      name:"tableinfo",
      component:TableInfo
    }
  ]
})
