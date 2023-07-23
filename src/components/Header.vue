<template>
  <div
    v-if="$route.name != 'Login' && $route.name != 'Registration'"
    class="header fixed w-full z-50 top-0 left-0"
  >
    <div class="w-full bg-white dark:bg-darkerBg dark:text-white text-sm">
      <div class="container mx-auto px-4 lg:px-0">
        <div class="flex items-center justify-between py-5">
          <font-awesome-icon
            @click="menu = !menu"
            class="block lg:hidden text-xl"
            :icon="['fas', 'bars']"
          />
          <router-link :to="{ name: 'MainPage' }"
            ><img
              class="w-28 lg:w-40 block dark:hidden"
              src="@/assets/img/logo.png"
              alt="" />
            <img
              class="w-28 lg:w-40 hidden dark:block"
              src="@/assets/img/darkLogo.png"
              alt=""
          /></router-link>
          <div class="flex items-center">
            <div class="flex items-center mr-3">
              <div class="hidden lg:flex items-center">
                <router-link
                  class="px-4 transition-all"
                  :to="{ name: 'MainPage' }"
                  >Пользователи</router-link
                >
                <router-link
                  class="px-4 transition-all"
                  :to="{ name: 'Categories' }"
                  >Категории</router-link
                >
                <router-link
                  class="px-4 transition-all"
                  :to="{ name: 'Clients' }"
                  >Клиенты</router-link
                >
                <router-link class="px-4 transition-all" :to="{ name: 'Cases' }"
                  >Кейсы</router-link
                >
                <router-link
                  class="px-4 transition-all"
                  :to="{ name: 'Projects' }"
                  >Проекты</router-link
                >
                <router-link
                  class="px-4 transition-all"
                  :to="{ name: 'Messages' }"
                  >Сообщения</router-link
                >
                <p
                  class="bg-secondaryColor px-3 py-1 text-white text-sm"
                  v-if="getCurrentUser"
                >
                  Здравствуйте, {{ getCurrentUser.name }}
                </p>
                <p class="px-4 transition-all cursor-pointer" @click="logout">
                  Выйти
                </p>
              </div>
            </div>
            <ThemeSwitcher />
          </div>
        </div>
      </div>
    </div>
    <div v-if="menu == true" class="fixed bgScreen w-full top-0">
      <div class="container mx-auto relative">
        <font-awesome-icon
          @click="menu = false"
          class="absolute right-10 top-9 text-5xl"
          :icon="['fas', 'xmark']"
        />
        <div
          class="h-screen w-full px-4 py-5 bg-white flex items-center text-xl font-medium"
        >
          <div class="mb-10">
            <router-link
              @click="menu = false"
              class="px-3 transition-all block mb-6 hover:text-mainColor"
              :to="{ name: 'MainPage' }"
              >Пользователи</router-link
            >
            <router-link
              @click="menu = false"
              class="px-3 transition-all block mb-6 hover:text-mainColor"
              :to="{ name: 'Categories' }"
              >Категории</router-link
            >
            <router-link
              @click="menu = false"
              class="px-3 transition-all block mb-6 hover:text-mainColor"
              :to="{ name: 'Clients' }"
              >Клиенты</router-link
            >
            <router-link
              @click="menu = false"
              class="px-3 transition-all block mb-6 hover:text-mainColor"
              :to="{ name: 'Cases' }"
              >Кейсы</router-link
            >
            <router-link
              @click="menu = false"
              class="px-3 transition-all block mb-6 hover:text-mainColor"
              :to="{ name: 'Projects' }"
              >Проекты</router-link
            >
            <router-link
              @click="menu = false"
              class="px-3 transition-all block mb-6 hover:text-mainColor"
              :to="{ name: 'Messages' }"
              >Сообщения</router-link
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ThemeSwitcher from "@/components/General/ThemeSwitcher.vue";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Header",
  data() {
    return {
      menu: false,
    };
  },
  computed: {
    ...mapGetters(["getCurrentUser"]),
  },
  methods: {
    ...mapActions(["logoutUser", "currentUser"]),
    logout() {
      this.logoutUser();
      this.$router.go();
    },
  },
  components: {
    ThemeSwitcher,
  },
};
</script>
