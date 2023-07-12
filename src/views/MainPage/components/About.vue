<template>
  <section class="relative">
    <div class="container mx-auto px-4 lg:px-0">
      <div class="flex flex-col-reverse lg:flex-row justify-between items-center">
        <div class="w-full lg:w-half mr-0 lg:mr-[9.813rem] mb-[3.75rem]">
          <div class="block lg:flex justify-between">
            <div class="w-full lg:w-half min-w-half mb-3">
              <div class="py-6 px-6 bg-mainColor">
                <img
                  class="w-14 h-14 mx-auto mb-5"
                  src="@/assets/img/about/1.svg"
                  alt=""
                />
                <p class="font-bold text-center text-white">
                  Собственная производственная база
                </p>
              </div>
            </div>
            <div class="w-full lg:w-half min-w-half mb-3">
              <div class="py-6 px-6 bg-mainColor">
                <img
                  class="w-14 h-14 mx-auto mb-5"
                  src="@/assets/img/about/2.svg"
                  alt=""
                />
                <p class="font-bold text-center text-white">
                  Собственные склады хранения
                </p>
              </div>
            </div>
          </div>
          <div class="w-full lg:flex justify-between">
            <div class="w-full lg:w-half mb-3 lg:mb-0 min-w-half">
              <div class="py-6 px-6 bg-mainColor">
                <img
                  class="w-14 h-14 mx-auto mb-5"
                  src="@/assets/img/about/3.svg"
                  alt=""
                />
                <p class="font-bold text-center text-white">
                  Высокотехнологичное оборудование
                </p>
              </div>
            </div>
            <div class="w-full lg:w-half min-w-half">
              <div class="py-6 px-6 bg-mainColor">
                <img
                  class="w-14 h-14 mx-auto mb-5"
                  src="@/assets/img/about/4.svg"
                  alt=""
                />
                <p class="font-bold text-center text-white">
                  Собственный штат специалистов
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="w-full lg:w-half flex flex-col mb-[8.5rem]">
          <Heading class=" mb-6 lg:mb-[5.25rem]" heading="о нас" line="right" />
          <p class="text-lg">
            Следует отметить, что семантический разбор внешних противодействий
            обеспечивает актуальность переосмысления внешнеэкономических
            политик. Для современного мира высокое качество позиционных
            исследований, в своём классическом представлении, допускает
            внедрение экономической целесообразности принимаемых решений! В
            своём стремлении улучшить пользовательский опыт мы упускаем, что
            элементы политического процесса функционально разнесены на
            независимые элементы.
          </p>
        </div>
      </div>
    </div>
    <div class="block lg:flex">
      <div class="container mx-auto px-4 lg:px-0 pl-4 lg:!pl-24 relative z-20">
        <Heading class=" mb-6 lg:mb-[4.5rem]" heading="наше производство" line="left" />
        <ul class="text-sm lg:text-xl font-semibold">
          <li>Фрезерно-гравировальные станки</li>
          <li>Лазерные гравировальные станки</li>
          <li>UV печать</li>
          <li>Широкоформатная печать 1440 dpi</li>
          <li>Оборудование для работы с деревом и металлом</li>
          <li>Покраска</li>
          <li>Логистика, установка по всему Казахстану</li>
        </ul>
      </div>
      <img
        class="absolute right-0 bottom-0 w-3/4 lg:w-full"
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