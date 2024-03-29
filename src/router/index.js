import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import ManageUsers from '@/views/ManageUsers.vue'
import Products from '@/views/Products.vue'
import Materials from '@/views/Materials.vue'
import ProductCustoms from '@/views/ProductCustoms.vue'
import ManageOrders from '@/views/ManageOrders.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/users',
    name: 'ManageUsers',
    component: ManageUsers
  },
  {
    path: '/orders',
    name: 'ManageOrders',
    component: ManageOrders
  },
  {
    path: '/products',
    name: 'Products',
    component: Products
  },
  {
    path: '/materials',
    name: 'Materials',
    component: Materials
  },
  {
    path: '/custom',
    name: 'Customs',
    component: ProductCustoms
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
