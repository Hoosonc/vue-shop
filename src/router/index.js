import { createRouter, createWebHistory } from 'vue-router'

const Login = () => import('@/components/Login')
const Home = () => import('@/components/Home')
const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    name: 'Login',
    path: '/login',
    component: Login
  },
  {
    name: 'Home',
    path: '/home',
    component: Home
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to,from,next) => {
  if(to.path === '/login') {
    return next();
  } else {
    const tokenStr = window.sessionStorage.getItem('token')
    if(!tokenStr) {
      return next('/login')
    }
    next();
  }
})


export default router
