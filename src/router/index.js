import { createRouter, createWebHistory } from "vue-router";
import MainPage from "@/views/MainPage/index.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "MainPage",
      component: MainPage,
      //   meta: { requiresAuth: true, breadcrumb: "Сотрудники" },
    },
  ],
});

// router.beforeEach((to, from, next) => {
//   const isAuthenticated = localStorage.getItem("token");
//   if (to.matched.some((record) => record.meta.requiresAuth)) {
//     if (!isAuthenticated) {
//       next("/auth");
//     } else {
//       next();
//     }
//   } else if (to.matched.some((record) => record.path === "/auth")) {
//     if (isAuthenticated) {
//       next("/");
//     } else {
//       next();
//     }
//   } else {
//     next();
//   }
// });

export default router;
