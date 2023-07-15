<template>
  <section class="pt-32">
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
            heading="услуги"
            line="right"
            :center="true"
          />
          <div class="w-full flex justify-between flex-wrap">
            <div
              class="w-full lg:w-third flex relative pt-7"
              v-for="(item, index) of services"
              :key="index"
            >
              <div class="w-max relative mr-4">
                <p
                  class="bg-mainColor text-[1.75rem] font-bold text-secondaryColor p-1 w-max"
                >
                  0{{ index + 1 }}
                </p>
                <div
                  class="w-[1px] h-full left-1/2 -translate-x-1/2 bg-mainColor -top-[1.125rem] absolute"
                ></div>
              </div>
              <div class="w-auto flex flex-col">
                <p
                  class="text-mainColor text-xl uppercase font-bold mb-2 w-3/4"
                >
                  {{ item.name }}
                </p>
                <p class="text-sm">{{ item.content }}</p>
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
            <p class="text-xs font-bold text-white">Высокий уровень сервиса</p>
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
            <p class="text-xs font-bold text-white">Индивидуальный подход</p>
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
              Логистика и монтаж по всему Казахстану
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
      services: [
        {
          id: 1,
          content:
            "Разработка дизайна с нуля любой сложности, адаптация, файлы для печати, технические файлы к производству.",
          name: "Дизайн и разработка",
        },
        {
          id: 2,
          content:
            "Эффективная наружная реклама под ключ. Лайтбоксы, вывески, объемные буквы, неоновая реклама и прочее.",
          name: "Наружная реклама",
        },
        {
          id: 3,
          content:
            "Все типы внутренней рекламы. Стенды, световые короба, светодиодные и цифровые экраны, мобайлы, муляжи и прочее.",
          name: "Внутренняя реклама",
        },
        {
          id: 4,
          content:
            "Привлекающие внимание и нестандартные pos-материалы. ОТС, навесные дисплеи, напольные дисплеи, шелфтокеры световые и прочее.",
          name: "POSM материалы",
        },
        {
          id: 5,
          content:
            "Индивидуальный подход к торговому оборудованию. Бренд-зоны, shop-in-shop, endcap, торцы, пристенные модули, бренд шоп и прочее.",
          name: "Торговое оборудование",
        },
        {
          id: 6,
          content:
            "Выделение продукта различной сложности. Брендинг категории, торгового пространства, выделение продукта на полке, кассовая зона, входная группа и прочее.",
          name: "Брендинг",
        },
        {
          id: 7,
          content:
            "Разработка дизайна с нуля, адаптация, файлы для печати, технические файлы к производству.",
          name: "Коммерческая мебель",
        },
        {
          id: 7,
          content:
            "Бренд зоны, стенды любой сложности и масштаба. Оформление и стилизация под бренд.",
          name: "Производство мебели",
        },
        {
          id: 8,
          content:
            "Разработка дизайна с нуля, адаптация, файлы для печати, технические файлы к производству.",
          name: "Аренда оборудования",
        },
      ],
    };
  },
  components: {
    Heading,
  },
};
</script>
<style scoped>
.accordion {
}
</style>
