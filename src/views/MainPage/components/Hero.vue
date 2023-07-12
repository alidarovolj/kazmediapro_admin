<template>
  <div class="hero">
    <div class="h-full flex container mx-auto px-4 lg:px-0">
      <div class="flex items-center relative flex-col justify-between mr-20">
        <div class="lineFirst"></div>
        <p class="withLines whitespace-nowrap text-xl text-white py-5">
          {{ $t("mainPage.hero.line") }}
        </p>
        <div class="lineSecond"></div>
      </div>
      <div
        class="flex flex-col lg:flex-row items-center justify-center lg:justify-between"
      >
        <div class="w-full lg:w-half min-h-half">
          <h1 class="uppercase text-xl lg:text-4xl font-bold text-white mb-9">
            {{ $t("mainPage.hero.headText") }}
          </h1>
          <Button :text="$t('general.callRequest')" />
        </div>
        <div class="flex items-end min-w-half h-max lg:h-full w-full lg:w-1/2">
          <div class="relative">
            <img
              class="w-full relative z-10 mb-0"
              src="@/assets/img/hero/bg.png"
              alt=""
            />
            <div
              class="rounded-full blur-[300px] bg-white w-[550px] h-[550px] absolute bottom-1/3 right-1/2 translate-x-1/2 translate-y-1/2"
            ></div>
          </div>
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

<style scoped>
.hero {
  height: 682px;
  background: linear-gradient(
      154deg,
      rgba(0, 0, 0, 0.2) 0%,
      rgba(0, 0, 0, 0) 81.97%
    ),
    #1d52a7;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
}
.withLines {
  writing-mode: tb-rl;
  -webkit-transform: rotate(180deg);
  -moz-transform: rotate(180deg);
  -o-transform: rotate(180deg);
  -ms-transform: rotate(180deg);
  transform: rotate(180deg);
}
.lineFirst {
  position: relative;
  background: #f18a02;
  width: 1px;
  height: 100%;
}
.lineFirst::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 9px;
  height: 9px;
  border-radius: 100%;
  background: #f18a02;
  transform: translate(-50%, 50%);
}
.lineSecond {
  position: relative;
  background: #f18a02;
  width: 1px;
  height: 100%;
}
.lineSecond::after {
  content: "";
  position: absolute;
  top: 0;
  left: 50%;
  width: 9px;
  height: 9px;
  border-radius: 100%;
  background: #f18a02;
  transform: translate(-50%, -50%);
}
</style>