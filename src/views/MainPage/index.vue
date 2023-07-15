<template>
  <div>
    <Hero />
    <About />
    <WhyUs />
    <Services />
  </div>
</template>

<script>
import Hero from "./components/Hero.vue";
import About from "./components/About.vue";
import WhyUs from "./components/WhyUs.vue";
import Services from "./components/Services.vue";

export default {
  name: "MainPage",
  components: {
    Hero,
    About,
    WhyUs,
    Services,
  },
};
</script>