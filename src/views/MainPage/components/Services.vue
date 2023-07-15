<template>
  <section ref="services" id="services" class="pt-32 dark:bg-darkBg dark:text-white">
    <div class="block lg:flex pb-0 lg:pb-28">
      <img
        class="hidden lg:block absolute left-0 bottom-0 w-3/4 lg:w-[500px]"
        src="@/assets/img/services/bg.png"
        alt=""
      />
      <div
        class="container mx-auto px-4 lg:px-0 pl-4 lg:!pl-24 relative z-20 flex justify-end"
      >
        <div class="w-full lg:w-4/5">
          <Heading
            class="mb-6 lg:mb-[4.5rem]"
            :heading="$t('mainPage.services.header')"
            line="right"
            :center="true"
          />
          <div class="w-full flex justify-between flex-wrap">
            <div class="w-full lg:w-third flex relative pt-7">
              <div class="w-max relative mr-4">
                <p
                  class="bg-mainColor text-[1.75rem] font-bold text-secondaryColor p-1 w-max"
                >
                  01
                </p>
                <div
                  class="w-[1px] h-full left-1/2 -translate-x-1/2 bg-mainColor -top-[1.125rem] absolute"
                ></div>
              </div>
              <div class="w-auto flex flex-col">
                <p
                  class="text-mainColor text-xl uppercase font-bold mb-2 w-3/4"
                >
                  {{ $t("mainPage.services.list.first.header") }}
                </p>
                {{ $t("mainPage.services.list.first.content") }}
              </div>
            </div>
            <div class="w-full lg:w-third flex relative pt-7">
              <div class="w-max relative mr-4">
                <p
                  class="bg-mainColor text-[1.75rem] font-bold text-secondaryColor p-1 w-max"
                >
                  02
                </p>
                <div
                  class="w-[1px] h-full left-1/2 -translate-x-1/2 bg-mainColor -top-[1.125rem] absolute"
                ></div>
              </div>
              <div class="w-auto flex flex-col">
                <p
                  class="text-mainColor text-xl uppercase font-bold mb-2 w-3/4"
                >
                  {{ $t("mainPage.services.list.second.header") }}
                </p>
                {{ $t("mainPage.services.list.second.content") }}
              </div>
            </div>
            <div class="w-full lg:w-third flex relative pt-7">
              <div class="w-max relative mr-4">
                <p
                  class="bg-mainColor text-[1.75rem] font-bold text-secondaryColor p-1 w-max"
                >
                  03
                </p>
                <div
                  class="w-[1px] h-full left-1/2 -translate-x-1/2 bg-mainColor -top-[1.125rem] absolute"
                ></div>
              </div>
              <div class="w-auto flex flex-col">
                <p
                  class="text-mainColor text-xl uppercase font-bold mb-2 w-3/4"
                >
                  {{ $t("mainPage.services.list.third.header") }}
                </p>
                {{ $t("mainPage.services.list.third.content") }}
              </div>
            </div>
            <div class="w-full lg:w-third flex relative pt-7">
              <div class="w-max relative mr-4">
                <p
                  class="bg-mainColor text-[1.75rem] font-bold text-secondaryColor p-1 w-max"
                >
                  04
                </p>
                <div
                  class="w-[1px] h-full left-1/2 -translate-x-1/2 bg-mainColor -top-[1.125rem] absolute"
                ></div>
              </div>
              <div class="w-auto flex flex-col">
                <p
                  class="text-mainColor text-xl uppercase font-bold mb-2 w-3/4"
                >
                  {{ $t("mainPage.services.list.fourth.header") }}
                </p>
                {{ $t("mainPage.services.list.fourth.content") }}
              </div>
            </div>
            <div class="w-full lg:w-third flex relative pt-7">
              <div class="w-max relative mr-4">
                <p
                  class="bg-mainColor text-[1.75rem] font-bold text-secondaryColor p-1 w-max"
                >
                  05
                </p>
                <div
                  class="w-[1px] h-full left-1/2 -translate-x-1/2 bg-mainColor -top-[1.125rem] absolute"
                ></div>
              </div>
              <div class="w-auto flex flex-col">
                <p
                  class="text-mainColor text-xl uppercase font-bold mb-2 w-3/4"
                >
                  {{ $t("mainPage.services.list.fifth.header") }}
                </p>
                {{ $t("mainPage.services.list.fifth.content") }}
              </div>
            </div>
            <div class="w-full lg:w-third flex relative pt-7">
              <div class="w-max relative mr-4">
                <p
                  class="bg-mainColor text-[1.75rem] font-bold text-secondaryColor p-1 w-max"
                >
                  06
                </p>
                <div
                  class="w-[1px] h-full left-1/2 -translate-x-1/2 bg-mainColor -top-[1.125rem] absolute"
                ></div>
              </div>
              <div class="w-auto flex flex-col">
                <p
                  class="text-mainColor text-xl uppercase font-bold mb-2 w-3/4"
                >
                  {{ $t("mainPage.services.list.sixth.header") }}
                </p>
                {{ $t("mainPage.services.list.sixth.content") }}
              </div>
            </div>
            <div class="w-full lg:w-third flex relative pt-7">
              <div class="w-max relative mr-4">
                <p
                  class="bg-mainColor text-[1.75rem] font-bold text-secondaryColor p-1 w-max"
                >
                  07
                </p>
                <div
                  class="w-[1px] h-full left-1/2 -translate-x-1/2 bg-mainColor -top-[1.125rem] absolute"
                ></div>
              </div>
              <div class="w-auto flex flex-col">
                <p
                  class="text-mainColor text-xl uppercase font-bold mb-2 w-3/4"
                >
                  {{ $t("mainPage.services.list.seventh.header") }}
                </p>
                {{ $t("mainPage.services.list.seventh.content") }}
              </div>
            </div>
            <div class="w-full lg:w-third flex relative pt-7">
              <div class="w-max relative mr-4">
                <p
                  class="bg-mainColor text-[1.75rem] font-bold text-secondaryColor p-1 w-max"
                >
                  08
                </p>
                <div
                  class="w-[1px] h-full left-1/2 -translate-x-1/2 bg-mainColor -top-[1.125rem] absolute"
                ></div>
              </div>
              <div class="w-auto flex flex-col">
                <p
                  class="text-mainColor text-xl uppercase font-bold mb-2 w-3/4"
                >
                  {{ $t("mainPage.services.list.eighth.header") }}
                </p>
                {{ $t("mainPage.services.list.eighth.content") }}
              </div>
            </div>
            <div class="w-full lg:w-third flex relative pt-7">
              <div class="w-max relative mr-4">
                <p
                  class="bg-mainColor text-[1.75rem] font-bold text-secondaryColor p-1 w-max"
                >
                  09
                </p>
                <div
                  class="w-[1px] h-full left-1/2 -translate-x-1/2 bg-mainColor -top-[1.125rem] absolute"
                ></div>
              </div>
              <div class="w-auto flex flex-col">
                <p
                  class="text-mainColor text-xl uppercase font-bold mb-2 w-3/4"
                >
                  {{ $t("mainPage.services.list.ninth.header") }}
                </p>
                {{ $t("mainPage.services.list.ninth.content") }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="container mt-8 lg:mt-0 flex lg:block mx-auto px-4 lg:px-0 relative z-30"
    >
      <img
        class="w-1/2 mt-6 block lg:hidden -translate-x-1/4"
        src="@/assets/img/services/bg.png"
        alt=""
      />
      <div
        class="static lg:absolute left-0 bottom-0 translate-y-0 lg:translate-y-1/2"
      >
        <div class="block lg:flex justify-between">
          <div
            style="filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))"
            class="bg-mainColor mb-2 lg:mb-0 px-3 py-2 text-center flex flex-col justify-center w-[150px] max-w-[150px]"
          >
            <img
              class="w-10 h-10 mx-auto mb-2"
              src="@/assets/img/services/1.svg"
              alt=""
            />
            <p class="text-xs font-bold text-white">
              {{ $t("mainPage.services.benefits.first") }}
            </p>
          </div>
          <div
            style="filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))"
            class="bg-mainColor mb-2 lg:mb-0 px-3 py-2 text-center flex flex-col justify-center mx-0 lg:mx-6 w-[150px] max-w-[150px]"
          >
            <img
              class="w-10 h-10 mx-auto mb-2"
              src="@/assets/img/services/2.svg"
              alt=""
            />
            <p class="text-xs font-bold text-white">
              {{ $t("mainPage.services.benefits.second") }}
            </p>
          </div>
          <div
            style="filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))"
            class="bg-mainColor mb-2 lg:mb-0 px-3 py-2 text-center flex flex-col justify-center w-[150px] max-w-[150px]"
          >
            <img
              class="w-10 h-10 mx-auto mb-2"
              src="@/assets/img/services/3.svg"
              alt=""
            />
            <p class="text-xs font-bold text-white">
              {{ $t("mainPage.services.benefits.third") }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Heading from "@/components/General/Heading.vue";

export default {
  name: "Services",
  data() {
    return {
      active: 1,
    };
  },
  components: {
    Heading,
  },
};
</script>

