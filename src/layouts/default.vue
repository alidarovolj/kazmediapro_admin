<template>
  <div>
    <Header />
    <div>
      <div class="pt-36">
        <slot />
      </div>
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
  