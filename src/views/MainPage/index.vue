<template>
  <div>
    <Hero />
    <About />
    <WhyUs />
    <Services />
    <Touch />
  </div>
</template>

<script>
import Hero from "./components/Hero.vue";
import About from "./components/About.vue";
import WhyUs from "./components/WhyUs.vue";
import Services from "./components/Services.vue";
import Touch from "./components/Touch.vue";

export default {
  name: "MainPage",
  components: {
    Hero,
    About,
    WhyUs,
    Services,
    Touch,
  },
};
</script>
