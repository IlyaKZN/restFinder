import q11Icon from '@/images/1_1.jpg'
import q13Icon from '@/images/1_3.jpg'
import q21Icon from '@/images/2_1.jpg'
import q22Icon from '@/images/2_2.jpg'
import q41Icon from '@/images/4_1.jpg'
import q42Icon from '@/images/4_2.jpg'
import q43Icon from '@/images/4_3.jpg'
import q31Icon from '@/images/3_1.jpg'
import q51Icon from '@/images/5_1.jpg'
import q62Icon from '@/images/6_2.jpg'
import q63Icon from '@/images/6_3.jpg'
import q73Icon from '@/images/7_3.jpg'
import q81Icon from '@/images/8_1.jpg'
import q82Icon from '@/images/8_2.jpg'
import q83Icon from '@/images/8_3.jpg'
import q93Icon from '@/images/9_3.jpg'

const restaurants = [
  {
    id: 1,
    name: 'Бочка и Сковорода',
    cuisines: ['Европейская', 'Паб-кухня'],
    avgCheck: 950,
    minutesFromMetro: 6,
    images: [q11Icon, q13Icon],
    schedule: {
      monday: '09:00-23:00',
      tuesday: '09:00-23:00',
      wednesday: '09:00-23:00',
      thursday: '09:00-23:00',
      friday: '09:00-23:00',
      saturday: '09:00-23:00',
      sunday: '09:00-23:00',
    },
  },
  {
    id: 2,
    name: 'Суши на Набережной',
    cuisines: ['Японская', 'Морепродукты'],
    avgCheck: 0,
    minutesFromMetro: 4,
    images: [q21Icon, q22Icon],
    schedule: {
      monday: '09:00-23:00',
      tuesday: '09:00-23:00',
      wednesday: '09:00-23:00',
      thursday: '09:00-23:00',
      friday: '09:00-23:00',
      saturday: '09:00-23:00',
      sunday: '09:00-23:00',
    },
  },
  {
    id: 4,
    name: 'Casa di Pasta',
    cuisines: ['Итальянская', 'Паста-бар'],
    avgCheck: 1700,
    minutesFromMetro: 8,
    images: [q41Icon, q42Icon, q43Icon],
    schedule: {
      monday: '09:00-23:00',
      tuesday: '09:00-23:00',
      wednesday: '09:00-23:00',
      thursday: '09:00-23:00',
      friday: '09:00-23:00',
      saturday: '09:00-23:00',
      sunday: '09:00-23:00',
    },
  },
  {
    id: 3,
    name: 'Пельменная №7',
    cuisines: ['Русская', 'Вегетарианская'],
    avgCheck: 450,
    minutesFromMetro: 2,
    images: [q31Icon],
    schedule: {
      monday: '09:00-23:00',
      tuesday: '09:00-23:00',
      wednesday: '09:00-23:00',
      thursday: '09:00-23:00',
      friday: '09:00-23:00',
      saturday: '09:00-23:00',
      sunday: '09:00-23:00',
    },
  },
  {
    id: 5,
    name: 'Шашлычный Двор',
    cuisines: ['Кавказская', 'Гриль'],
    avgCheck: 1200,
    minutesFromMetro: 12,
    images: [q51Icon],
    schedule: {
      monday: '09:00-23:00',
      tuesday: '09:00-23:00',
      wednesday: '09:00-23:00',
      thursday: '09:00-23:00',
      friday: '09:00-23:00',
      saturday: '09:00-23:00',
      sunday: '09:00-23:00',
    },
  },
  {
    id: 6,
    name: 'Веганика',
    cuisines: ['Веганская', 'Здоровая еда'],
    avgCheck: 800,
    minutesFromMetro: 5,
    images: [q62Icon, q63Icon],
    schedule: {
      monday: '09:00-23:00',
      tuesday: '09:00-23:00',
      wednesday: '09:00-23:00',
      thursday: '09:00-23:00',
      friday: '09:00-23:00',
      saturday: '09:00-23:00',
      sunday: '09:00-23:00',
    },
  },
  {
    id: 7,
    name: 'Taco & Co',
    cuisines: ['Мексиканская', 'Фаст-кэжуал'],
    avgCheck: 700,
    minutesFromMetro: 3,
    images: [q73Icon],
    schedule: {
      monday: '09:00-23:00',
      tuesday: '09:00-23:00',
      wednesday: '09:00-23:00',
      thursday: '09:00-23:00',
      friday: '09:00-23:00',
      saturday: '09:00-23:00',
      sunday: '09:00-23:00',
    },
  },
  {
    id: 8,
    name: 'Le Fleur — Кафе и Десерты',
    cuisines: ['Кондитерская', 'Кафе'],
    avgCheck: 600,
    minutesFromMetro: 7,
    images: [q81Icon, q82Icon, q83Icon],
    schedule: {
      monday: '09:00-23:00',
      tuesday: '09:00-23:00',
      wednesday: '09:00-23:00',
      thursday: '09:00-23:00',
      friday: '09:00-23:00',
      saturday: '09:00-23:00',
      sunday: '09:00-23:00',
    },
  },
  {
    id: 9,
    name: 'Grill & Wine',
    cuisines: ['Стейк-хаус', 'Винный бар'],
    avgCheck: 2800,
    minutesFromMetro: 10,
    images: [q93Icon],
    schedule: {
      monday: '09:00-23:00',
      tuesday: '09:00-23:00',
      wednesday: '09:00-23:00',
      thursday: '09:00-23:00',
      friday: '09:00-23:00',
      saturday: '09:00-23:00',
      sunday: '09:00-23:00',
    },
  },
]

export default restaurants
