import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/home.vue'
import Transactions from '../pages/transactions.vue'
import TransactionsDetail from '../pages/transactions-detail.vue'
import NotFound from '../pages/notfound.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/transactions',
    name: 'transactions',
    component: Transactions
  },
  {
    path: '/transactions/:id',
    name: 'transaction-detail',
    component: TransactionsDetail
  }, {
    path: '/:pathMatch(.*)*',
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
