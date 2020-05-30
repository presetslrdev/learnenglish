import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '@/views/index'
import Books from '@/views/Books.vue'
import Words from '@/views/Words.vue'
import Signin from '@/views/Signin.vue'
import Signup from '@/views/Signup.vue'
import Profile from '@/views/Profile.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index
  },
  {
    path: '/books',
    name: 'Books',
    component: Books
  },
  {
    path: '/words',
    name: 'Words',
    component: Words
  },
  {
    path: '/signin',
    name: 'Signin',
    component: Signin
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  }
]

const router = new VueRouter({
  routes
})

export default router
