import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import 'vue-loading-overlay/dist/css/index.css'
import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia' 
import App from './App.vue'
import router from './router'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import { aliases, fa } from 'vuetify/iconsets/fa'
import { mdi } from 'vuetify/iconsets/mdi'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
    components,
    directives,
    icons: {
      defaultSet: 'mdi',
      aliases,
      sets: {
        mdi, fa
      },
    },
  })

const app = createApp(App)
app.use(router)
app.use(vuetify)


// Crie a instância do Pinia e use-a na aplicação
const pinia = createPinia()
app.use(pinia)

app.mount('#app')
