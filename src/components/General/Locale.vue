<template>
  <div class="locale-changer dark:text-darkText">
    <select
      class="text-sm border cursor-pointer dark:border-darkBg rounded-md p-2 bg-white dark:bg-darkElBg px-4"
      v-model="currentLang"
      @change="switchLocale($event)"
    >
      <option
        class="px-5 py-2"
        v-for="(lang, i) in langs"
        :key="`Lang${i}`"
        :value="lang.value"
      >
        {{ lang.title }}
      </option>
    </select>
  </div>
</template>
    
    <script>
export default {
  name: "localeСhanger",
  beforeCreate() {
    const savedLocale = localStorage.getItem("locale");
    if (savedLocale) {
      this.$i18n.locale = savedLocale;
    } else {
      localStorage.setItem("locale", "ru");
    }
  },
  methods: {
    switchLocale(event) {
      localStorage.setItem("locale", event.target.value);
      this.$i18n.locale = event.target.value;
    },
  },
  data() {
    return {
      currentLang: localStorage.getItem("locale"),
      langs: [
        {
          id: 1,
          value: "ru",
          title: "Рус",
        },
        {
          id: 1,
          value: "kz",
          title: "Каз",
        },
        {
          id: 2,
          value: "en",
          title: "Eng",
        },
      ],
    };
  },
};
</script>
  