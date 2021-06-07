import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
const Home = import ("views/cart/Cart") 
const Profile = import ('views/profile/Profile')
const Category = import ('views/category/Category')
const Cart = import ("views/cart/Cart")

const routes = [
  {
    path:'',
    redirect:'/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path:'/profile',
    component:Profile
  },
  {
    path:'/category',
    component:Category
  },
  {
    path:'/cart',
    component:Cart
  }
]

const router = new VueRouter({
  routes
})

export default router
