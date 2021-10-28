import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import getProduct from '../views/getProduct.vue'
import productUpdate from '../views/productUpdate.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/getProduct',
    name: 'GetProduct',
    component: getProduct
  },
  {
    path: '/productUpdate',
    name: 'ProductUpdate',
    component: productUpdate
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
