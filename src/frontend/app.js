import Vue from "vue";
import Root from "./Root.vue";
import VueRouter from "vue-router";
import Axios from 'axios'
import VueAxios from 'vue-axios'

//estilos
import "./public/static/css/normalize.css"
import "./public/static/css/styles.css"

//vistas
import Nosotros from "./views/Nosotros.vue";
import Anuncios from "./views/Anuncios.vue";
import Anuncio from "./views/Anuncio.vue";
import Entrada from "./views/Entrada.vue";
import Blog from "./views/Blog.vue";
import Home from "./views/Home.vue";
import Contacto from "./views/Contacto.vue";

Vue.use(VueRouter);
Vue.use(VueAxios, Axios)

const router = new VueRouter({
  routes: [
    {
      path: "/",
      component: Home,
    },
    {
      path: "/anuncios",
      component: Anuncios,
    },
    {
      path: "/anuncio",
      component:  Anuncio,
    },
    {
      path: "/blog",
      component: Blog,
    },
    {
      path: "/entrada",
      component: Entrada,
    },
    {
      path: "/nosotros",
      component: Nosotros,
    },
    {
      path: "/contacto",
      component: Contacto,
    },
  ],
  mode: "history",
});

new Vue({
  router,
  render: (h) => h(Root),
}).$mount("#app");
