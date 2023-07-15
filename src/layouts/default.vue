<template>
  <div>
    <Header />
    <div class="pt-20">
      <slot />
    </div>
  </div>
</template>
  
  <script>
import Header from "@/components/Header.vue";

export default {
  name: "DefaultLayout",
  components: {
    Header,
  },
};
</script>
  