import { createApp } from 'vue'
import App from './App.vue'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { aliases, mdi } from 'vuetify/iconsets/mdi'
import 'material-design-icons-iconfont/dist/material-design-icons.css'


const vuetify = createVuetify({
    components,
    directives,
    icons: {
        defaultSet: 'mdi',
        aliases,
        sets: {
            mdi,
        },
    },
})

if (window.navigator.userAgent.includes('Mobile')) {
    document.querySelector("html").id = "is_mobile"
} else {
    document.querySelector("html").id = "is_desktop"
}

createApp(App).use(vuetify).mount('#app')