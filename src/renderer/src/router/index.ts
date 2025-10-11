import { createMemoryHistory, createRouter } from 'vue-router'

import MainView from '../pages/MainView.vue'

const routes = [{ path: '/', component: MainView }]

const router = createRouter({
  history: createMemoryHistory(),
  routes
})

export default router
