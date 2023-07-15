<template>
  <div class="relative py-40 bg-secondaryColor">
    <img
      class="w-full h-full absolute left-0 top-0 object-cover"
      src="@/assets/img/touch/bg.png"
      alt=""
    />
    <div>
      <div class="container mx-auto px-4 lg:px-0">
        <Heading
          class="mb-6 lg:mb-[5.25rem]"
          heading="наш подход"
          line="left"
          :mainColor="true"
        />
        <div class="flex justify-between w-4/5">
          <div class="w-third text-white">
            <img src="@/assets/img/touch/1.png" alt="" />
            <div class="flex items-end mb-3">
              <p class="text-9xl text-mainColor font-bold">1</p>
              <div>
                <p class="text-sm font-bold">
                  Разработаем дизайн и подготовим файлы
                </p>
                <ul class="list-disc text-[0.625rem]">
                  <li>технические файлы</li>
                  <li>файлы для печати</li>
                </ul>
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
