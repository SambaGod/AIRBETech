import Vue from 'vue'
import Router from 'vue-router'

// Dashboard Components
import dashboard from '../views/dashboard'

//  Widgets Components
import mainView from '../mainView'

import Patient from '../views/patient'
import PatientDetails from '../views/PatientDetails'

//  Chart Components
import assignTasks from '../views/tasks/assign-tasks'

//  Icons Components
import login from '../views/samples/user-pages/login'
import register from '../views/samples/user-pages/register'

// Messenger
import Messages from '../views/Messages'

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
          name: 'Patient',
          component: Patient
        },
        {
          path: '/patient/patient-details',
          component: PatientDetails
        },
        {
          path: '/tasks',
          component: assignTasks
        },
        {
          path: '/messages',
          name: 'Messages',
          component: Messages
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
