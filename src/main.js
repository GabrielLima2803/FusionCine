import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import 'vue-loading-overlay/dist/css/index.css'

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css'

import './assets/tailwind.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
