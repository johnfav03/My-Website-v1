import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/HomePage'
import ProjPage from '@/components/ProjPage'
import AppDisplay from '@/components/AppDisplay'
import GalDisplay from '@/components/GalDisplay'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/projects/:beg/:end',
      name: 'ProjPage',
      component: ProjPage
    },
    {
      path: '/currentrail',
			beforeEnter() {location.href = 'http://currentrail.com'},
			component: HomePage
    },
    {
      path: '/disp/app/weather',
      name: 'AppDisplay',
      component: AppDisplay
    },
    {
      path: '/disp/gal/:elem',
      name: 'GalDisplay',
      component: GalDisplay
    }
  ]
})
