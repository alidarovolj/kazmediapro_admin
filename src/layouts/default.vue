<template>
  <div>
    <Header />
    <div class="pt-20">
      <slot />
    </div>
    <Footer />
  </div>
</template>
  
  <script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "DefaultLayout",
  components: {
    Header,
    Footer,
  },
};
</script>
  