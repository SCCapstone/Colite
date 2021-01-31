import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/About.vue')
    },
    {
        path: '/dataViz',
        name: 'DataViz',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "dataViz" */ '../views/DataViz.vue')
    },
    {
        path: '/map',
        name: 'Map',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "map" */ '../views/Map.vue')
    },
    {
        path: '/listOfParts',
        name: 'ListOfParts',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "listOfParts" */ '../views/ListOfParts.vue')
    },
    {
        path: '/contactUs',
        name: 'ContactUs',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "ContactUs" */ '../views/ContactUs.vue')
    },
    {
        path: '/addPole',
        name: 'AddPole',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "AddPole" */ '../components/AddPole.vue')
    },
    {
        path: '/pole',
        name: 'Pole',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "pole" */ '../components/Pole.vue')
    },
    {
        path: '/polesList',
        name: 'PolesList',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "PolesList" */ '../components/PolesList.vue')
    },
    {
        path: '/unitTests',
        name: 'UnitTests',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "UnitTests" */ '../../tests/unit/unit-test.vue')
    }

]

const router = new VueRouter({
    routes
})

export default router