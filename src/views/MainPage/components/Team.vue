<template>
  <div class="relative pt-[1.875rem] pb-[7.688rem] bg-secondaryColor">
    <img
      class="w-full h-full absolute left-0 top-0 object-cover"
      src="@/assets/img/touch/bg.png"
      alt=""
    />
    <div class="relative z-10">
      <div class="container mx-auto px-4 lg:px-0">
        <Heading
          class="mb-6 lg:mb-[5.25rem]"
          heading="Команда"
          line="left"
          :mainColor="true"
        />
        <div class="w-3/5 flex justify-between">
          <div class="w-third relative">
            <div class="bg-mainColor w-full relative z-20 px-[0.875rem] py-3">
              <img
                class="w-full mb-[0.875rem]"
                src="@/assets/img/team/1.png"
                alt=""
              />
              <p class="text-white font-bold mb-2">Юлия Склярова</p>
              <p class="text-[0.625rem] text-white">Генеральный директор.</p>
              <p class="text-[0.625rem] text-white">Опыт в управлении 6 лет.</p>
            </div>
            <div
              class="w-[6.563rem] bg-white h-[6.563rem] z-10 absolute -left-1 -top-1"
            ></div>
          </div>
          <div class="w-third relative">
            <div class="bg-mainColor w-full relative z-20 px-[0.875rem] py-3">
              <img
                class="w-full mb-[0.875rem]"
                src="@/assets/img/team/2.png"
                alt=""
              />
              <p class="text-white font-bold mb-2">Александр Бычков</p>
              <p class="text-[0.625rem] text-white">Генеральный директор.</p>
              <p class="text-[0.625rem] text-white">Опыт в управлении 6 лет.</p>
            </div>
            <div
              class="w-[6.563rem] bg-white h-[6.563rem] z-10 absolute -left-1 -top-1"
            ></div>
          </div>
          <div class="w-third relative">
            <div class="bg-mainColor w-full relative z-20 px-[0.875rem] py-3">
              <img
                class="w-full mb-[0.875rem]"
                src="@/assets/img/team/3.png"
                alt=""
              />
              <p class="text-white font-bold mb-2">Артем Цымбал</p>
              <p class="text-[0.625rem] text-white">Генеральный директор.</p>
              <p class="text-[0.625rem] text-white">Опыт в управлении 6 лет.</p>
            </div>
            <div
              class="w-[6.563rem] bg-white h-[6.563rem] z-10 absolute -left-1 -top-1"
            ></div>
          </div>
        </div>
        <div class=" w-1/3">

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