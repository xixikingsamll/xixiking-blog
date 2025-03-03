import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home/HomeView.vue'  // 主页
import Friend from '../views/FriendLink/FriendView.vue'  // 友链
import AdminView from '@/views/Admin/AdminView.vue'  // 管理员主页
import AdminLogin from '@/views/Admin/LoginView.vue'  // 管理员登录
import LoginView from '@/views/Login/LoginView.vue'  // 登录
import article from '@/views/Article/IndexView.vue'  // 文章
import ArticleDetail from '@/views/Article/components/ArticleDetail.vue'  // 文章详情
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // blog首页
    {
      path: '/',
      name: 'home',
      component: Home,
    },

    // 友链
    {
      path: '/friend',
      name: 'friend',
      component: Friend
    },

    // 文章
    {
      path: '/article',
      name: 'article',
      component: article,
    },

    // 文章详情
    {
      path: '/article/:id',
      name: 'ArticleDetail',
      component: ArticleDetail
    },

    // 登录
    {
      path: '/login',
      name: 'login',
      component: LoginView,
      meta: { hideLayout: true }
    },

    // 管理员主页
    {
      path: '/admin',
      name: 'admin',
      component: AdminView,
      meta: { hideLayout: true }
    },

    // 管理员登录
    {
      path: '/AdminLogin',
      name: 'AdminLogin',
      component: AdminLogin
    }

    // 路由懒加载
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
