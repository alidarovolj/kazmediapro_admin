<template>
  <metainfo>
    <template v-slot:title="{ content }">{{
      content ? `${content} | KazMediaPro` : `SITE_NAME`
    }}</template>
  </metainfo>
  <div class="dark:bg-darkBg">
    <DefaultLayout>
      <router-view></router-view>
    </DefaultLayout>
  </div>
</template>

<script>
import { useMeta } from "vue-meta";
import { mapActions, mapGetters } from "vuex";

import DefaultLayout from "@/layouts/default.vue";
import "vue3-toastify/dist/index.css";

export default {
  name: "App",
  components: {
    DefaultLayout,
  },
  methods: {
    ...mapActions(["logoutUser", "currentUser"]),
  },
  beforeCreate() {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  },
  mounted() {
    this.currentUser();
  },
  computed: {
    ...mapGetters(["getCurrentUser"]),
  },
  setup() {
    useMeta({
      title: "KazMediaPro",
      htmlAttrs: { lang: "ru", amp: false },
      description: "рекламно-производственная компания",
      author: "CREOAD",
      keywords:
        "создание сайта алматы, создание сайтов алматы, разработка сайтов алматы, разработка сайтов алматы, цена, разработка сайтов под ключ, создать сайт, создать сайт алматы, нур-султан, нур султан, разработать сайт алматы, creoad, веб студия алматы, создание сайтов в алмате, разработка сайтов в алмате",
      og: {
        title: "KazMediaPro",
        description: "рекламно-производственная компания",
        type: "website",
        url: "https://kazmediapro.creoad.kz/",
        image: "https://kazmediapro.creoad.kz/assets/logo-9b0d0300.png",
        site_name: "kazmediapro.creoad.kz",
        locale: "ru_KZ",
      },
    });
  },
};
</script>
