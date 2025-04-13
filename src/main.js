import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'normalize.css';

import TitleSection from '@/components/TitleSection.vue'

const app = createApp(App)

app.component('TitleSection', TitleSection)

app.use(router).mount('#app')
