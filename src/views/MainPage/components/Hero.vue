<template>
  <div class="hero">
    <div class="h-full relative flex container mx-auto px-4 lg:px-0">
      <div class="hidden lg:flex items-center relative flex-col justify-between mr-20">
        <div class="lineFirst"></div>
        <p class="withLines whitespace-nowrap text-xl text-white py-5">
          {{ $t("mainPage.hero.line") }}
        </p>
        <div class="lineSecond"></div>
      </div>
      <div
        class="flex flex-col lg:flex-row w-full items-center justify-between"
      >
        <div class="w-full lg:w-1/3 pt-20 lg:pt-0">
          <h1 class="uppercase text-2xl lg:text-4xl font-bold text-white mb-9">
            {{ $t("mainPage.hero.headText") }}
          </h1>
          <Button :text="$t('general.callRequest')" />
        </div>
        <div class="flex items-end h-full w-full">
          <img class="w-full h-full mb-0 relative z-10 object-cover lg:object-none object-bottom lg:translate-x-0 translate-x-1/3" src="@/assets/img/hero/bg.png" alt="" />
          <div
            class="rounded-full blur-[300px] bg-white w-[550px] h-[550px] absolute bottom-1/3 right-1/4 translate-x-1/2 translate-y-1/2"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Button from "@/components/General/Button.vue";

export default {
  name: "Hero",
  components: {
    Button,
  },
};
</script>
