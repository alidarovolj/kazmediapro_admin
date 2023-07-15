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
        <div class="w-4/5">
          <Heading
            class="mb-6 lg:mb-[4.5rem]"
            heading="услуги"
            line="right"
            :center="true"
          />
          <div class="w-full flex justify-between flex-wrap">
            <div
              class="w-third flex justify-between items-start"
              v-for="(item, index) of services"
              :key="index"
            >
              <div class=" w-10 bg-mainColor mr-4">
                <p class="text-3xl font-bold text-secondaryColor p-1">
                  0{{ index + 1 }}
                </p>
              </div>
              <div class="w-full">
                <p class="text-mainColor text-xl font-bold">{{ item.name }}</p>
                <p class="text-sm">{{ item.content }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img
        class="w-full mt-6 block lg:hidden -translate-x-1/4"
        src="@/assets/img/services/bg.png"
        alt=""
      />
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
            "Следует отметить, что семантический разбор внешних противодействий обеспечивает актуальность ",
          name: "Дизайн и разработка",
        },
        {
          id: 2,
          content:
            "Следует отметить, что семантический разбор внешних противодействий обеспечивает актуальность ",
          name: "Наружная реклама",
        },
        {
          id: 3,
          content:
            "Следует отметить, что семантический разбор внешних противодействий обеспечивает актуальность ",
          name: "Внутренняя реклама",
        },
        {
          id: 4,
          content:
            "Следует отметить, что семантический разбор внешних противодействий обеспечивает актуальность ",
          name: "POSM материалы",
        },
        {
          id: 5,
          content:
            "Следует отметить, что семантический разбор внешних противодействий обеспечивает актуальность ",
          name: "Торговое оборудование",
        },
        {
          id: 6,
          content:
            "Следует отметить, что семантический разбор внешних противодействий обеспечивает актуальность ",
          name: "Брендинг",
        },
        {
          id: 7,
          content:
            "Следует отметить, что семантический разбор внешних противодействий обеспечивает актуальность ",
          name: "Производство мебели",
        },
        {
          id: 8,
          content:
            "Следует отметить, что семантический разбор внешних противодействий обеспечивает актуальность ",
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