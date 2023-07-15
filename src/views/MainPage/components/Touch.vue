<template>
  <div
    class="relative pt-16 lg:pt-[10.625rem] pb-14 lg:pb-[10.938rem] bg-secondaryColor dark:bg-darkerBg"
  >
    <img
      class="w-full h-full dark:hidden absolute left-0 top-0 object-cover"
      src="@/assets/img/touch/bg.png"
      alt=""
    />
    <img
      class="z-10 w-3/5 lg:w-max h-auto absolute right-0 bottom-0"
      src="@/assets/img/touch/object.png"
      alt=""
    />
    <div
      class="w-[21.875rem] lg:w-[38.813rem] h-[20.625rem] lg:h-[36.688rem] bg-white blur-[150px] right-0 bottom-0 translate-x-1/3 lg:translate-y-1/4 absolute"
    ></div>
    <div class="relative z-10">
      <div class="container mx-auto px-4 lg:px-0">
        <Heading
          class="mb-6 lg:mb-[5.25rem]"
          :heading="$t('mainPage.touch.header')"
          line="left"
          :mainColor="true"
        />
        <div class="flex flex-col lg:flex-row justify-between w-1/2 lg:w-4/5">
          <div class="w-full lg:w-third text-white mb-4 lg:mb-0">
            <img
              class="mx-auto ml-0 lg:ml-8 w-3/4 lg:w-auto"
              src="@/assets/img/touch/1.png"
              alt=""
            />
            <div>
              <div class="-mt-10">
                <div class="flex items-end">
                  <p
                    class="text-7xl lg:text-9xl w-1/4 text-mainColor font-bold mt-2 lg:mt-0 lg:leading-[0.8]"
                  >
                    1
                  </p>
                  <p class="text-xs lg:text-sm font-bold w-full lg:w-3/4">
                    {{ $t("mainPage.touch.first.header") }}
                  </p>
                </div>
                <div class="flex justify-end">
                  <ul class="mr-0 ml-0 list-disc text-[0.625rem] w-3/4">
                    <li>
                      {{ $t("mainPage.touch.first.content.first") }}
                    </li>
                    <li>
                      {{ $t("mainPage.touch.first.content.second") }}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="w-full lg:w-third text-white mb-4 lg:mb-0">
            <img
              class="mx-auto ml-0 lg:ml-8 w-3/4 lg:w-auto"
              src="@/assets/img/touch/2.png"
              alt=""
            />
            <div>
              <div class="-mt-10">
                <div class="flex items-end">
                  <p
                    class="text-7xl lg:text-9xl w-1/4 text-mainColor font-bold mt-2 lg:mt-0 lg:leading-[0.8]"
                  >
                    2
                  </p>
                  <p class="text-xs lg:text-sm font-bold w-full lg:w-1/3">
                    {{ $t("mainPage.touch.second.header") }}
                  </p>
                </div>
                <div class="flex justify-end">
                  <ul class="mr-0 ml-0 list-disc text-[0.625rem] w-3/4">
                    <li>
                      {{ $t("mainPage.touch.second.content.first") }}
                    </li>
                    <li>
                      {{ $t("mainPage.touch.second.content.second") }}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="w-full lg:w-third text-white">
            <img
              class="mx-auto ml-0 lg:ml-8 w-3/4 lg:w-auto"
              src="@/assets/img/touch/3.png"
              alt=""
            />
            <div>
              <div class="-mt-10">
                <div class="flex items-end">
                  <p
                    class="text-7xl lg:text-9xl w-1/4 text-mainColor font-bold mt-2 lg:mt-0 lg:leading-[0.8]"
                  >
                    3
                  </p>
                  <p class="text-xs lg:text-sm font-bold w-full lg:w-1/3">
                    {{ $t("mainPage.touch.third.header") }}
                  </p>
                </div>
                <div class="flex justify-end">
                  <ul class="mr-0 ml-0 list-disc text-[0.625rem] w-3/4">
                    <li>
                      {{ $t("mainPage.touch.third.content.first") }}
                    </li>
                    <li>
                      {{ $t("mainPage.touch.third.content.second") }}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Heading from "@/components/General/Heading.vue";

export default {
  name: "Touch",
  components: {
    Heading,
  },
};
</script>
