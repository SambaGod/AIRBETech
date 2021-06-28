import Vue from 'vue'
import Router from 'vue-router'

// Dashboard Components
import dashboard from '../views/dashboard'

//  Widgets Components
import mainView from '../mainView'

import patient from '../views/patient'
import dropdowns from '../views/basic-elements/dropdowns'

//  Chart Components
import chartjs from '../views/charts/chartjs'

//  Icons Components
import login from '../views/samples/user-pages/login'
import register from '../views/samples/user-pages/register'

//  Table Components
import basicTables from '../views/tables/basic-table'

Vue.use(Router)

export default new Router({
  linkActiveClass: 'active',
  scrollBehavior: () => ({ y: 0 }),
  mode: 'hash',
  routes: [
    {
      path: '/',
      redirect: '/dashboard',
      component: mainView,
      children: [
        {
          path: '/dashboard',
          name: 'dashboard',
          component: dashboard
        },
        {
          path: '/patient',
          name: 'patient',
          component: patient
        },
        {
          path: '/patient/add',
          component: dropdowns
        },
        {
          path: '/tasks',
          component: chartjs
        },
        {
          path: '/messages',
          name: 'basicTables',
          component: basicTables
        }
      ]
    },
    {
      path: '*',
      redirect: '/pages/error_404',
      component: {
        render (c) {
          return c('router-view')
        }
      },
      children: [
        {
          path: '/pages/login',
          component: login
        },
        {
          path: '/pages/register',
          component: register
        }
      ]
    }
  ]
})
