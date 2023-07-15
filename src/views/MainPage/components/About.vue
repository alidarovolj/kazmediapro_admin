<template>
  <section ref="about" id="about" class="relative pt-32 dark:bg-darkBg dark:text-white">
    <div class="container mx-auto px-4 lg:px-0">
      <div
        class="flex flex-col-reverse lg:flex-row justify-between items-center"
      >
        <div class="w-full lg:w-half mr-0 lg:mr-[9.813rem] mb-[3.75rem]">
          <div class="flex justify-between">
            <div class="w-half min-w-half mb-3">
              <div class="py-6 px-4 bg-mainColor">
                <img
                  class="w-14 h-14 mx-auto mb-5"
                  src="@/assets/img/about/1.svg"
                  alt=""
                />
                <p
                  class="text-[10px] lg:text-base font-bold text-center text-white"
                >
                  {{ $t("mainPage.about.blocks.first") }}
                </p>
              </div>
            </div>
            <div class="w-half min-w-half mb-3">
              <div class="py-6 px-4 bg-mainColor">
                <img
                  class="w-14 h-14 mx-auto mb-5"
                  src="@/assets/img/about/2.svg"
                  alt=""
                />
                <p
                  class="text-[10px] lg:text-base font-bold text-center text-white"
                >
                  {{ $t("mainPage.about.blocks.second") }}
                </p>
              </div>
            </div>
          </div>
          <div class="flex justify-between">
            <div class="w-half mb-3 lg:mb-0 min-w-half">
              <div class="py-6 px-4 bg-mainColor">
                <img
                  class="w-14 h-14 mx-auto mb-5"
                  src="@/assets/img/about/3.svg"
                  alt=""
                />
                <p
                  class="text-[10px] lg:text-base font-bold text-center text-white"
                >
                  {{ $t("mainPage.about.blocks.third") }}
                </p>
              </div>
            </div>
            <div class="w-half min-w-half">
              <div class="py-6 px-4 bg-mainColor">
                <img
                  class="w-14 h-14 mx-auto mb-5"
                  src="@/assets/img/about/4.svg"
                  alt=""
                />
                <p
                  class="text-[10px] lg:text-base font-bold text-center text-white"
                >
                  {{ $t("mainPage.about.blocks.fourth") }}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="w-full lg:w-half flex flex-col mb-[8.5rem]">
          <Heading
            class="mb-6 lg:mb-[5.25rem]"
            :heading="$t('mainPage.about.header')"
            line="right"
          />
          <p class="text-sm lg:text-lg">
            {{ $t("mainPage.about.content") }}
          </p>
        </div>
      </div>
    </div>
    <div class="manufacturing block lg:flex pb-28">
      <div class="container mx-auto px-4 lg:px-0 pl-4 lg:!pl-24 relative z-20">
        <Heading
          class="mb-6 lg:mb-[4.5rem]"
          :heading="$t('mainPage.manufacture.header')"
          line="left"
        />
        <ul class="text-sm lg:text-xl font-semibold">
          <li>{{ $t("mainPage.manufacture.first") }}</li>
          <li>{{ $t("mainPage.manufacture.second") }}</li>
          <li>{{ $t("mainPage.manufacture.third") }}</li>
          <li>{{ $t("mainPage.manufacture.fourth") }}</li>
          <li>{{ $t("mainPage.manufacture.fifth") }}</li>
          <li>{{ $t("mainPage.manufacture.sixth") }}</li>
          <li>{{ $t("mainPage.manufacture.seventh") }}</li>
        </ul>
      </div>
      <img
        class="absolute right-0 bottom-0 w-3/4 lg:w-[500px]"
        src="@/assets/img/about/bg.png"
        alt=""
      />
    </div>
  </section>
</template>

<script>
import Heading from "@/components/General/Heading.vue";

export default {
  name: "About",
  components: {
    Heading,
  },
};
</script>