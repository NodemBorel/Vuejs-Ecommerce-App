import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/products',
      name: 'products',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ProductsView.vue')
    },
    {
      path: '/product-details',
      name: 'product-details',

      component: () => import('../views/Product-DetailsView.vue')
    },
    {
      path: '/cart',
      name: 'cart',
  
      component: () => import('../views/CartView.vue')
    },
    {
      path: '/account',
      name: 'account',
      
      component: () => import('../views/AccountView.vue')
    },
  ]
})

export default router
