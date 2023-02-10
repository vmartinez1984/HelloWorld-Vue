import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
//import useLoginStore from '@/stores/login'

const pinia = createPinia()

createApp(App)
.use(pinia)
.use(router)
//.use(useLoginStore)
.mount('#app')
