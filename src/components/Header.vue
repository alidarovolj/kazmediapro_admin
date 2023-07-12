<template>
  <div
    class="sticky w-full z-50 top-0 left-0"
    style="box-shadow: 0px 4px 6px -3px rgba(0, 0, 0, 0.25)"
  >
    <div class="w-full bg-white">
      <div class="container mx-auto px-4 lg:px-0">
        <div class="flex items-center justify-between py-5">
          <font-awesome-icon
            @click="menu = !menu"
            class="block lg:hidden text-xl"
            :icon="['fas', 'bars']"
          />
          <img class="w-28 lg:w-40" src="@/assets/img/logo.png" alt="" />
          <div class="flex items-center">
            <div class="flex items-center mr-3">
              <div class="hidden lg:flex">
                <router-link
                  class="px-7 transition-all hover:text-mainColor"
                  :to="{ name: 'MainPage' }"
                  >{{ $t("header.links.about") }}</router-link
                >
                <router-link
                  class="px-7 transition-all hover:text-mainColor"
                  :to="{ name: 'MainPage' }"
                  >{{ $t("header.links.services") }}</router-link
                >
                <router-link
                  class="px-7 transition-all hover:text-mainColor"
                  :to="{ name: 'MainPage' }"
                  >{{ $t("header.links.cases") }}</router-link
                >
                <router-link
                  class="pl-7 pr-14 transition-all hover:text-mainColor"
                  :to="{ name: 'MainPage' }"
                  >{{ $t("header.links.contacts") }}</router-link
                >
              </div>
              <Locale />
              <div class="hidden lg:flex items-center ml-3">
                <div class="font-semibold">
                  <Button :text="$t('general.callRequest')" />
                </div>
              </div>
            </div>
            <ThemeSwitcher />
          </div>
        </div>
      </div>
    </div>
    <div v-if="menu == true" class="px-4 lg:px-0 sticky w-full top-28">
      <div class="container mx-auto">
        <div class="px-4 py-5 w-full bg-white">
          <div class="mb-10">
            <router-link
              class="px-3 transition-all block mb-3 hover:text-mainColor"
              :to="{ name: 'MainPage' }"
              >{{ $t("header.links.about") }}</router-link
            >
            <router-link
              class="px-3 transition-all block mb-3 hover:text-mainColor"
              :to="{ name: 'MainPage' }"
              >{{ $t("header.links.services") }}</router-link
            >
            <router-link
              class="px-3 transition-all block mb-3 hover:text-mainColor"
              :to="{ name: 'MainPage' }"
              >{{ $t("header.links.cases") }}</router-link
            >
            <router-link
              class="px-3 transition-all block mb-3 hover:text-mainColor"
              :to="{ name: 'MainPage' }"
              >{{ $t("header.links.contacts") }}</router-link
            >
          </div>
          <div class="block">
            <div class="font-semibold text-center">
              <Button :text="$t('general.callRequest')" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Button from "@/components/General/Button.vue";
import Locale from "@/components/General/Locale.vue";
import ThemeSwitcher from "@/components/General/ThemeSwitcher.vue";

export default {
  name: "Header",
  data() {
    return {
      menu: false,
    };
  },
  components: {
    Button,
    Locale,
    ThemeSwitcher,
  },
};
</script>