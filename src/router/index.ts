import VibesScreen from '@/screens/Vibes'
import TournamentScreen from '@/screens/Tournament'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      name: 'vibes',
      path: '',
      component: VibesScreen,
    },
    {
      name: 'tournament',
      path: '/tournament',
      component: TournamentScreen,
    }
  ],
})

export default router
