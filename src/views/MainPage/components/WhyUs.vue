<template>
  <div class="bg-mainColor">
    <div class="container mx-auto px-4 lg:px-0 py-10">
      <Heading
        class="mb-6 lg:mb-[5.25rem]"
        heading="почему мы?"
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
          <p class=" text-[10px] lg:text-sm font-medium text-white w-10/12 lg:w-2/3 mx-auto">Широкий спектр услуг</p>
        </div>
        <div class="w-max text-center">
          <img
            class="mx-auto w-6 lg:w-10 h-6 lg:h-10 mb-2"
            src="@/assets/img/whyUs/2.png"
            alt=""
          />
          <p class=" text-[10px] lg:text-sm font-medium text-white w-10/12 lg:w-2/3 mx-auto">Качество работы</p>
        </div>
        <div class="w-max text-center">
          <img
            class="mx-auto w-6 lg:w-10 h-6 lg:h-10 mb-2"
            src="@/assets/img/whyUs/3.png"
            alt=""
          />
          <p class=" text-[10px] lg:text-sm font-medium text-white w-10/12 lg:w-2/3 mx-auto">Ориентация под клиента</p>
        </div>
        <div class="w-max text-center">
          <img
            class="mx-auto w-6 lg:w-10 h-6 lg:h-10 mb-2"
            src="@/assets/img/whyUs/4.png"
            alt=""
          />
          <p class=" text-[10px] lg:text-sm font-medium text-white w-10/12 lg:w-2/3 mx-auto">Реклама под ключ</p>
        </div>
        <div class="w-max text-center">
          <img
            class="mx-auto w-6 lg:w-10 h-6 lg:h-10 mb-2"
            src="@/assets/img/whyUs/5.png"
            alt=""
          />
          <p class=" text-[10px] lg:text-sm font-medium text-white w-10/12 lg:w-2/3 mx-auto">Гарантия на работы</p>
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