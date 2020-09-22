import { createRouter,createWebHistory,createWebHashHistory} from 'vue-router'

// 构建路由配置。
const routes = [
    {
      path: '/',
      component: ()=>import('../views/Home.vue')
    },
    {
      path: '/login',
      component: () => import('../views/Login.vue'),
    }
  ]
  
  const router = createRouter({
    // 使用 hash 模式构建路由（ url中带 # 号的那种)
    history: createWebHashHistory(),
    // 使用 history 模式构建路由 （ url 中没有 # 号，但生产环境需要特殊配置）
    // history: createWebHistory(),
    routes
  })
  export default router
