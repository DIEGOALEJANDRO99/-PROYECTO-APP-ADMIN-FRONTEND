import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import getProduct from '../views/getProduct.vue'
import productUpdate from '../views/productUpdate.vue'
import CreateProduct from '../views/createProduct.vue'
import deleteProduct from '../views/deleteProduct.vue'
import checkCreate from '../views/checkCreate.vue'
import getCheck from '../views/getCheck.vue'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/createProduct',
    name: 'createProduct',
    component: CreateProduct
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/getProduct',
    name: 'getProduct',
    component: getProduct
  },
  {
    path: '/productUpdate',
    name: 'productUpdate',
    component: productUpdate
  },
  {
    path: '/deleteProduct',
    name: 'deleteProduct',
    component: deleteProduct
  },
  {
    path: '/checkCreate',
    name: 'checkCreate',
    component: checkCreate
  },
  {
    path: '/getCheck',
    name: 'getCheck',
    component: getCheck
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
