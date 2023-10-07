import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import 'vue-loading-overlay/dist/css/index.css'
import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia' // Importe createPinia
import App from './App.vue'
import router from './router'

const app = createApp(App)
app.use(router)

// Crie a instância do Pinia e use-a na aplicação
const pinia = createPinia()
app.use(pinia)

app.mount('#app')
