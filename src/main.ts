import { createApp } from 'vue'
import router from '@/router'
import store from './store'
import App from './App'
import ElementPlus from 'element-plus'
import "element-plus/theme-chalk/index.css";

createApp(App)
    .use(router)
    .use(store)
    .use(ElementPlus)
    .mount('#app')
