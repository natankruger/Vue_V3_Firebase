import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

// General
import Home from '@/views/Home.vue'

// Product
import ProductNewPage from '@/views/product/New.vue'
import ProductListPage from '@/views/product/List.vue'

// Movement
import MovementNewPage from '@/views/movement/New.vue'
import MovementListPage from '@/views/movement/List.vue'

// Report
import RevenueByProductPage from '@/views/report/RevenueByProduct.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/product/new',
    name: 'ProductNewPage',
    component: ProductNewPage
  },
  {
    path: '/products',
    name: 'ProductListPage',
    component: ProductListPage
  },
  {
    path: '/movement/new',
    name: 'MovementNewPage',
    component: MovementNewPage
  },
  {
    path: '/movements',
    name: 'MovementListPage',
    component: MovementListPage
  },
  {
    path: '/revenue_by_product',
    name: 'RevenueByProductPage',
    component: RevenueByProductPage
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
