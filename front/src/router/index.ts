import { createRouter, createWebHistory } from 'vue-router'
import Layout from '../views/Layout/LayoutView.vue'
import Home from '../views/Home/HomeView.vue'
import Friend from '../views/FriendLink/FriendView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Layout,
      children: [
        {
          path: '/home',
          name: 'home1',
          component: Home
        },
        {
          path: '/friend',
          name: 'friend',
          component: Friend
        },
      ]
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ]
})

export default router
