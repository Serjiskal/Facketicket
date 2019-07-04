import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/eventos',
      name: 'eventos',
      component: () => import(/* webpackChunkName: "Eventos" */ './views/EventosView.vue')
    },
    {
      path: '/formularioEvento',
      name: 'formularioEvento',
      component: () => import(/* webpackChunkName: "FormularioEvento" */ './components/FormularioEvento.vue')
    },
    {
      path: '/formularioEvento/:id',
      name: 'formularioEvento',
      component: () => import(/* webpackChunkName: "FormularioEvento" */ './components/FormularioEvento.vue')
    },
    {
      path: '/ComprasView/',
      name: 'ComprasView',
      component: () => import(/* webpackChunkName: "FormularioEvento" */ './views/ComprasView.vue')
    },
    {
      path: '/listadoCompras/:id',
      name: 'listadoCompras',
      component: () => import(/* webpackChunkName: "FormularioEvento" */ './views/ListadoCompras.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import(/* webpackChunkName: "FormularioEvento" */ './views/Login.vue')
    }
  ]
})
