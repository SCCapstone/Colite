import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
    mode: "history",
    routes: [{
            path: "/",
            alias: "/poles",
            name: "poles",
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
            path: "/add",
            name: "add",
            component: () =>
                import ("./components/AddPoles")
        }
    ]
});