import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    redirect:'/login'
  },
  {
    path:'/login',
    component:()=>import("../components/login")
  },
  {
    path:"/index",
    component:()=> import("../views/index")
  },
  {
    path:'/information_center',
    component:()=>import("../views/information_center/center")
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
