// импортируешь свои компоненты
// import MyButton from '@/components/MyButton.vue'
// import MyModal from '@/components/MyModal.vue'
import { Button } from "primevue"


declare module 'vue' {
  export interface GlobalComponents {
    PVButton: typeof Button
  }
}

export {}
