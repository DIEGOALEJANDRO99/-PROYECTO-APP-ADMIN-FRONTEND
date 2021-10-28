import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
<<<<<<< HEAD
import getProduct from '../views/getProduct.vue'
=======
import productUpdate from '../views/productUpdate.vue'
>>>>>>> 82f2a29d552135720f7d1a365e08abb345074ba2

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
<<<<<<< HEAD
  {
    path: '/GetProduct',
    name: 'GetProduct',
    component: getProduct
=======

  {
    path: '/productUpdate',
    name: 'productUpdate',
    component: productUpdate
>>>>>>> 82f2a29d552135720f7d1a365e08abb345074ba2
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
