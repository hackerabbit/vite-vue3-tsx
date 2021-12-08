import { createApp } from 'vue'
import router from '@/router'
import store from './store'
import App from './App'
import foucsDirective from './directive/foucs'
import ElementPlus from 'element-plus'
import 'element-plus/theme-chalk/index.css'

const app = createApp(App)

app.directive('focus', foucsDirective)

app.use(router).use(store).use(ElementPlus).mount('#app')
