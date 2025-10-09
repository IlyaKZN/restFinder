import { createApp } from 'vue'
import { createPinia } from 'pinia'

import PrimeVue from 'primevue/config';
import Button from 'primevue/button';
import Aura from '@primeuix/themes/aura';

import { definePreset } from '@primeuix/themes';

import App from './App.vue'
import router from './router'

import './styles/index.css';
import 'material-symbols';

const app = createApp(App)

const preset = definePreset(Aura, {
  semantic: {
    primary: {
      50: '{stone.50}',
      100: '{stone.100}',
      200: '{stone.200}',
      300: '{stone.300}',
      400: '{stone.400}',
      500: '{stone.500}',
      600: '{stone.600}',
      700: '{stone.700}',
      800: '{stone.800}',
      900: '{stone.900}',
      950: '{stone.950}'
    }
  }
})

app.use(createPinia())
app.use(router)
app.use(PrimeVue, {
  theme: {
    preset: preset,
  }
});

app.component('PVButton', Button);

app.mount('#app')
