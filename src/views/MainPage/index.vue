<template>
  <div>
    <Hero />
    <About />
  </div>
</template>

<script>
import Hero from "./components/Hero.vue";
import About from "./components/About.vue";

export default {
  name: "MainPage",
  components: {
    Hero,
    About,
  },
};
</script>