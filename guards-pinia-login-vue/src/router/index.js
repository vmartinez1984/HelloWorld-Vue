import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import login from '@/components/login'
import AccesoNoPermitido from '@/components/AccesoNoPermitido'
import { useLoginStore } from '@/stores/loginStore'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: { requiresAuth: true, role: ['admin','operator'] }
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
    meta: { requiresAuth: true, role: ['admin'] }
  },
  {
    path: '/login',
    name: 'login',
    component: login
  },
  {
    path:'/accesoNoPermitido',
    name: 'accesoNoPermitido',
    component: AccesoNoPermitido
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next)=>{
  if(to.matched.some(route => route.meta.requiresAuth)){
    var isLogin
    var rol

    isLogin =  useLoginStore().isLogin
    rol = useLoginStore().roles
    console.log('userRol '+ rol)
    console.log("Esta logueado: " +isLogin)
    console.log(to.meta.role.includes(rol))
    
    console.log(to.meta.role)   
        if(isLogin){
          //Se verifica si tiene acceso deacuerdo al rol
          if(to.meta.role.includes(rol)){
            console.log("Permitido")
            next()
          }else{
            console.log("Acceso no permitido")
            next('/AccesoNoPermitido')
          }
        }else{
          next('/login')
        }   
  }else{
    next()
  }
})
export default router
