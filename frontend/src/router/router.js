import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
    mode: "history",
    routes: [{
            path: "/",
            alias: "/polesList",
            name: "PolesList",
            component: () =>
                import ("./components/PolesList")
        },
        {
            path: "/poles/:id",
            name: "pole-details",
            component: () =>
                import ("./components/Pole")
        },
        {
            path: "/addPole",
            name: "AddPole",
            component: () =>
                import ("./components/AddPole")
        }
    ]
});