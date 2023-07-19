import { createRouter, createWebHistory } from "vue-router";
import MainPage from "@/views/MainPage/index.vue";
import Categories from "@/views/Categories/index.vue";
import Messages from "@/views/Messages/index.vue";
import Registration from "@/views/Registration/index.vue";
import Projects from "@/views/Projects/index.vue";
import Login from "@/views/Login/index.vue";
import Cases from "@/views/Cases/index.vue";
import Clients from "@/views/Clients/index.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "MainPage",
      component: MainPage,
      meta: { requiresAuth: true, breadcrumb: "Пользователи" },
    },
    {
      path: "/categories",
      name: "Categories",
      component: Categories,
      meta: { requiresAuth: true, breadcrumb: "Категории" },
    },
    {
      path: "/messages",
      name: "Messages",
      component: Messages,
      meta: { requiresAuth: true, breadcrumb: "Сообщения" },
    },
    {
      path: "/clients",
      name: "Clients",
      component: Clients,
      meta: { requiresAuth: true, breadcrumb: "Клиенты" },
    },
    {
      path: "/cases",
      name: "Cases",
      component: Cases,
      meta: { requiresAuth: true, breadcrumb: "Кейсы" },
    },
    {
      path: "/projects",
      name: "Projects",
      component: Projects,
      meta: { requiresAuth: true, breadcrumb: "Проекты" },
    },
    {
      path: "/login",
      name: "Login",
      component: Login,
      meta: { requiresAuth: false, breadcrumb: "Вход" },
    },
    {
      path: "/registration",
      name: "Registration",
      component: Registration,
      meta: { requiresAuth: false, breadcrumb: "Регистрация" },
    },
  ],
});

router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem("token");
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (!isAuthenticated) {
      next("/login");
    } else {
      next();
    }
  } else if (to.matched.some((record) => record.path === "/login")) {
    if (isAuthenticated) {
      next("/");
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
