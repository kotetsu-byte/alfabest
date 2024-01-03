import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Career from '../views/Career.vue'
import Cooperation from '../views/Cooperation.vue'
import Contacts from '../views/Contacts.vue'
import Purchases from '../views/Purchases.vue'
import Engineering from '../views/services/Engineering.vue'
import Household from '../views/services/Household.vue'
import Catering from '../views/services/Catering.vue'
import Trasnportation from '../views/services/Transportation.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/career',
      name: 'Career',
      component: Career
    },
    {
      path: '/cooperation',
      name: 'Cooperation',
      component: Cooperation
    },
    {
      path: '/contacts',
      name: 'Contacts',
      component: Contacts
    },
    {
      path: '/purchases',
      name: 'Purchases',
      component: Purchases
    },
    {
      path: '/engineering',
      name: 'Engineering',
      component: Engineering
    },
    {
      path: '/household',
      name: 'Household',
      component: Household
    },
    {
      path: '/catering',
      name: 'Catering',
      component: Catering
    },
    {
      path: '/transportation',
      name: 'Transportation',
      component: Trasnportation
    }
  ]
})

export default router
