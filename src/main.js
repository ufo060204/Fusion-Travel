import { createApp } from 'vue'
import { createPinia } from 'pinia'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import './assets/all.scss'

import { register } from 'swiper/element/bundle'

import 'material-symbols'
import 'material-icons/iconfont/material-icons.css'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(register)
app.use(router)

app.mount('#app')
