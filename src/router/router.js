// con lazyloading
import * as VueRouter from "vue-router";
import { createRouter, createWebHashHistory } from "vue-router";
import isAuthenticatedGuard from "./auth-guard";

// import ListPage from "";
// import AboutPage from "";
// import PokemonPage from "";
// import NotPageFound from "";

const routes = [
  {
    path: "/",
    redirect: "pokemon",
  },
  {
    path: "/pokemon",
    name: "pokemon",
    component: () =>
      import(
        /* webpackChunkName: "PokemonLayout" */ "../modules/pokemon/layouts/PokemonLayout.vue"
      ),
    children: [
      {
        path: "home",
        name: "home-pokemon",
        component: () =>
          import(
            /* webpackChunkName: "AboutPage" */ "../modules/pokemon/pages/ListPage.vue"
          ),
      },
      {
        path: "about",
        name: "about-pokemon",
        component: () =>
          import(
            /* webpackChunkName: "AboutPage" */ "../modules/pokemon/pages/AboutPage"
          ),
      },
      {
        path: "pokemon/:pokemonId",
        name: "pokemon-id",
        component: () =>
          import(
            /* webpackChunkName: "PokemonPage" */ "../modules/pokemon/pages/PokemonPage"
          ),
        props: (route) => {
          console.log({ route });
          const { pokemonId } = route.params;
          const id = Number(pokemonId);
          return isNaN(id) ? { pokemonId: 1 } : { pokemonId: id };
        },
      },
      {
        path: "",
        // redirect: "/pokemon/home",
        redirect: {
          name: "about-pokemon",
        },
      },
    ],
  },

  // BBZ Routes
  {
    path: "/dbz",
    name: "dbZ",
    beforeEnter: [isAuthenticatedGuard],
    component: () =>
      import(
        /* webpackChunkName: "PokemonLayout" */ "../modules/dbz/layouts/DbzLayout.vue"
      ),
    children: [
      {
        path: "characters",
        name: "characters-dbz",
        beforeEnter: [isAuthenticatedGuard],
        component: () =>
          import(
            /* webpackChunkName: "CharactersDBZ" */ "../modules/dbz/pages/Characters.vue"
          ),
      },
      {
        path: "about",
        name: "about-dbz",
        beforeEnter: [isAuthenticatedGuard],
        component: () =>
          import(
            /* webpackChunkName: "AboutDBZ" */ "../modules/dbz/pages/About.vue"
          ),
      },
      {
        path: "",
        // redirect: "/pokemon/home",
        redirect: {
          name: "characters-dbz",
        },
      },
    ],
  },

  {
    path: "/:pathMatch(.*)*",
    component: () =>
      import(
        /* webpackChunkName: "NOTFOUND" */ "../modules/shared/pages/NotPageFound.vue"
      ),
    // redirect: '/home'
  }, // cualquier otra ruta q no sea de las q defini cae aca
];

// import * as VueRouter from "vue-router";
// const router = VueRouter.createRouter({
//   // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
//   history: VueRouter.createWebHashHistory(),
//   routes, // short for `routes: routes`
// });

const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHashHistory(),
  routes, // short for `routes: routes`
});


// guard global sincrono
// router.beforeEach((to, from, next) => {
//   console.log({ to, from, next });
//   const ramdom = Math.random() * 100;
//   console.log(ramdom);
//   if (ramdom > 50) {
//     console.log("autenticado");
//     next();
//     return true;
//   } else {
//     console.log("bloqueado por guard");
//     next({
//       name: "home-pokemon",
//     });
//     return false;
//   }
// });


// const canAccess = (to, from, next) => {
//   return new Promise((resolve, reject) => {
//     console.log({ to, from, next });
//     const ramdom = Math.random() * 100;
//     console.log(ramdom);
//     if (ramdom > 50) {
//       console.log("autenticado - canAccess");
//       resolve(true);
//     } else {
//       console.log("bloqueado por guard - canAccess");
//       resolve(false);
//     }
//   });
// };

// // GUARD  global async
// router.beforeEach(async (to, from, next) => {
//   try {
//     const authorized = await canAccess(to, from, next);
//     authorized
//       ? next()
//       : next({
//           name: "home-pokemon",
//         });
//   } catch (error) {
//     console.log({ error });
//   }
// });

export default router;

// // sin lazyloading
// // import * as VueRouter from "vue-router";
// import { createRouter, createWebHashHistory } from "vue-router";

// import ListPage from "../modules/pokemon/pages/ListPage.vue";
// import AboutPage from "../modules/pokemon/pages/AboutPage.vue";
// import PokemonPage from "../modules/pokemon/pages/PokemonPage.vue";
// import NotPageFound from "../modules/shared/pages/NotPageFound.vue";

// const routes = [
//   { path: "/", component: ListPage },
//   { path: "/about", component: AboutPage },
//   { path: "/id", component: PokemonPage },
//   { path: "/:pathMatch(.*)*", component: NotPageFound }, // cualquier otra ruta q no sea de las q defini cae aca
// ];

// // import * as VueRouter from "vue-router";
// // const router = VueRouter.createRouter({
// //   // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
// //   history: VueRouter.createWebHashHistory(),
// //   routes, // short for `routes: routes`
// // });

// const router = createRouter({
//   // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
//   history: createWebHashHistory(),
//   routes, // short for `routes: routes`
// });

// export default router;
