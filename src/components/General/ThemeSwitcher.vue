<template>
  <div class="bg-secondaryColor flex items-center">
    <font-awesome-icon
      v-if="currentTheme == 'light'"
      class="cursor-pointer p-2 text-mainColor"
      @click="setTheme('dark')"
      :icon="['fas', 'sun']"
    />
    <font-awesome-icon
      v-else
      class="cursor-pointer p-2 text-mainColor"
      @click="setTheme('light')"
      :icon="['fas', 'moon']"
    />
  </div>
</template>

<script>
export default {
  name: "ThemeSwitcher",
  data() {
    return {
      currentTheme: localStorage.getItem("theme"),
    };
  },
  methods: {
    setTheme(theme) {
      localStorage.setItem("theme", theme);
      document.querySelector("html").classList.add(theme);
      document
        .querySelector("html")
        .classList.remove(theme === "light" ? "dark" : "light");
      this.currentTheme = theme;
    },
  },
};
</script>