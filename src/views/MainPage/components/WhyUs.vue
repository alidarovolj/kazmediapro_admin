<template>
  <div class="bg-mainColor dark:bg-darkerBg">
    <div class="container mx-auto px-4 lg:px-0 py-10">
      <Heading
        class="mb-6 lg:mb-[5.25rem]"
        :heading="$t('mainPage.whyUs.header')"
        line="right"
        :center="true"
      />
      <div class="flex justify-center">
        <div class="w-max text-center">
          <img
            class="mx-auto w-6 lg:w-10 h-6 lg:h-10 mb-2"
            src="@/assets/img/whyUs/1.png"
            alt=""
          />
          <p
            class="text-[10px] lg:text-sm font-medium text-white w-10/12 lg:w-2/3 mx-auto"
          >
            {{ $t("mainPage.whyUs.first") }}
          </p>
        </div>
        <div class="w-max text-center">
          <img
            class="mx-auto w-6 lg:w-10 h-6 lg:h-10 mb-2"
            src="@/assets/img/whyUs/2.png"
            alt=""
          />
          <p
            class="text-[10px] lg:text-sm font-medium text-white w-10/12 lg:w-2/3 mx-auto"
          >
            {{ $t("mainPage.whyUs.second") }}
          </p>
        </div>
        <div class="w-max text-center">
          <img
            class="mx-auto w-6 lg:w-10 h-6 lg:h-10 mb-2"
            src="@/assets/img/whyUs/3.png"
            alt=""
          />
          <p
            class="text-[10px] lg:text-sm font-medium text-white w-10/12 lg:w-2/3 mx-auto"
          >
            {{ $t("mainPage.whyUs.third") }}
          </p>
        </div>
        <div class="w-max text-center">
          <img
            class="mx-auto w-6 lg:w-10 h-6 lg:h-10 mb-2"
            src="@/assets/img/whyUs/4.png"
            alt=""
          />
          <p
            class="text-[10px] lg:text-sm font-medium text-white w-10/12 lg:w-2/3 mx-auto"
          >
            {{ $t("mainPage.whyUs.fourth") }}
          </p>
        </div>
        <div class="w-max text-center">
          <img
            class="mx-auto w-6 lg:w-10 h-6 lg:h-10 mb-2"
            src="@/assets/img/whyUs/5.png"
            alt=""
          />
          <p
            class="text-[10px] lg:text-sm font-medium text-white w-10/12 lg:w-2/3 mx-auto"
          >
            {{ $t("mainPage.whyUs.fifth") }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Heading from "@/components/General/Heading.vue";

export default {
  name: "WhyUs",
  components: {
    Heading,
  },
};
</script>