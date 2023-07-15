<template>
  <div class="relative pt-[1.875rem] pb-[7.688rem] bg-secondaryColor dark:bg-darkerBg">
    <img
      class="w-full h-full dark:hidden absolute left-0 top-0 object-cover"
      src="@/assets/img/touch/bg.png"
      alt=""
    />
    <div class="relative z-10">
      <div class="container mx-auto px-4 lg:px-0">
        <Heading
          class="mb-6 lg:mb-[5.25rem]"
          :heading="$t('mainPage.team.header')"
          line="left"
          :mainColor="true"
        />
        <div class="block lg:flex justify-between">
          <div
            class="w-4/5 mb-[1.875rem] lg:mb-0 lg:w-3/4 mr-auto lg:mr-28 block lg:flex m-auto justify-between pt-10"
          >
            <div class="w-full mb-2 lg:mb-0 lg:w-third relative">
              <div
                style="box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25)"
                class="bg-mainColor flex lg:block w-full relative z-20 px-[0.875rem] py-3"
              >
                <img
                  class="w-2/5 lg:w-full mr-2 lg:mr-0 mb-0 lg:mb-[0.875rem]"
                  src="@/assets/img/team/1.png"
                  alt=""
                />
                <div>
                  <p class="text-white font-bold mb-2">
                    {{ $t("mainPage.team.first.name") }}
                  </p>
                  <p class="text-[0.625rem] text-white">
                    {{ $t("mainPage.team.first.position") }}
                  </p>
                  <p class="text-[0.625rem] text-white">
                    {{ $t("mainPage.team.first.experience") }}
                  </p>
                </div>
              </div>
              <div
                class="w-[4rem] lg:w-[6.563rem] bg-white h-[4rem] lg:h-[6.563rem] z-10 absolute -left-1 -top-1"
              ></div>
            </div>
            <div class="w-full mb-2 lg:mb-0 lg:w-third relative">
              <div
                style="box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25)"
                class="bg-mainColor flex lg:block w-full relative z-20 px-[0.875rem] py-3"
              >
                <img
                  class="w-2/5 lg:w-full mr-2 lg:mr-0 mb-0 lg:mb-[0.875rem]"
                  src="@/assets/img/team/2.png"
                  alt=""
                />
                <div>
                  <p class="text-white font-bold mb-2">
                    {{ $t("mainPage.team.second.name") }}
                  </p>
                  <p class="text-[0.625rem] text-white">
                    {{ $t("mainPage.team.second.position") }}
                  </p>
                  <p class="text-[0.625rem] text-white">
                    {{ $t("mainPage.team.second.experience") }}
                  </p>
                </div>
              </div>
              <div
                class="w-[4rem] lg:w-[6.563rem] bg-white h-[4rem] lg:h-[6.563rem] z-10 absolute -left-1 -top-1"
              ></div>
            </div>
            <div class="w-full lg:w-third relative">
              <div
                style="box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25)"
                class="bg-mainColor flex lg:block w-full relative z-20 px-[0.875rem] py-3"
              >
                <img
                  class="w-2/5 lg:w-full mr-2 lg:mr-0 mb-0 lg:mb-[0.875rem]"
                  src="@/assets/img/team/3.png"
                  alt=""
                />
                <div>
                  <p class="text-white font-bold mb-2">
                    {{ $t("mainPage.team.third.name") }}
                  </p>
                  <p class="text-[0.625rem] text-white">
                    {{ $t("mainPage.team.third.position") }}
                  </p>
                  <p class="text-[0.625rem] text-white">
                    {{ $t("mainPage.team.third.experience") }}
                  </p>
                </div>
              </div>
              <div
                class="w-[4rem] lg:w-[6.563rem] bg-white h-[4rem] lg:h-[6.563rem] z-10 absolute -left-1 -top-1"
              ></div>
            </div>
          </div>
          <div class="w-11/12 mx-auto lg:mx-0 lg:w-1/4 relative text-white">
            <img
              class="w-11 h-auto absolute left-0 top-0 -translate-x-1/2 -translate-y-1/2"
              src="@/assets/img/team/quote.png"
              alt=""
            />
            <div
              class="flex flex-col justify-between w-full text-sm lg:text-base h-full relative z-10"
            >
              <p class="leading-6 mb-3 lg:mb-0">
                {{ $t("mainPage.team.content.first") }}
              </p>
              <p class="leading-6 mb-5 lg:mb-0">
                {{ $t("mainPage.team.content.second") }}
              </p>
              <div class="flex items-center px-4 py-3 bg-mainColor">
                <img class="mr-3" src="@/assets/img/team/button.svg" alt="" />
                <p class="text-xs" v-html="$t('mainPage.team.button')"></p>
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
  name: "Team",
  components: {
    Heading,
  },
};
</script>
