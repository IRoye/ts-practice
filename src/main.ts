/*
 * @Description: 
 * @Author: yuyi
 * @Date: 2024-06-16 14:24:42
 * @LastEditors: yuyi
 * @LastEditTime: 2024-06-16 17:01:33
 */
import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import './utils/enum.ts'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
